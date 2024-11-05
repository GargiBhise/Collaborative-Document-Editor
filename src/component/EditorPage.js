import React, { useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./styles.css";

const TOOLBAR_OPTIONS = [
    [{header:[1,2,3,4,5,6, false]}],
    [{font: []}],
    [{list: "ordered"}, {list: "bullet"}],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{color: []}, {background: []}],
    [{script: "sub"}, {script: "super"}],
    [{align: []}],
    ["image", "blockquote", "code-block"],
    ["clean"],
];



export default function EditorPage() {
  // Create and manage editor instance. 
  //Creates a fresh editor container each time
  const wrapperRef = useCallback(wrapper => {
    // Cleanup on unmount ("hey, this component is being removed, let's clean up after ourselves!")
    if (wrapper === null) return
  
    // Reset container
    wrapper.innerHTML = ""
    // Create editor element
    const editor = document.createElement("div")
    wrapper.append(editor)
    // Initialize Quill
    new Quill(editor, { theme: "snow", modules: {toolbar: TOOLBAR_OPTIONS} })
  }, []) // Empty deps array = run once

  return <div className="container" ref={wrapperRef}></div>
}