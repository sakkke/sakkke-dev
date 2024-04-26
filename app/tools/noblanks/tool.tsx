"use client";

import { useEffect, useId, useState } from "react";

export default function Tool() {
  const textareaId = useId();
  const [text, setText] = useState("");

  useEffect(() => {
    setText(text.replace("\n", ""));
  }, [text]);

  return (
    <>
      <details>
        <summary>changelog</summary>
        <h2>0.1.0</h2>
        <ul>
          <li>first release</li>
        </ul>
      </details>
      <div className="form-group">
        <label htmlFor={textareaId}>text:</label>
        <textarea
          name="textarea"
          id={textareaId}
          cols={30}
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
    </>
  );
}
