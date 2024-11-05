import React, { useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./styles.css";

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
    new Quill(editor, { theme: "snow" })
  }, []) // Empty deps array = run once

  return <div className="container" ref={wrapperRef}></div>
}