import React, { useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./styles.css";
import { useParams } from 'react-router-dom';

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
    const { roomId } = useParams();
  const wrapperRef = useCallback(wrapper => {
    if (wrapper === null) return
    wrapper.innerHTML = ""
    const editor = document.createElement("div")
    wrapper.append(editor)
    new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS } })
  }, [])
  return <div className="container" ref={wrapperRef}></div>
}