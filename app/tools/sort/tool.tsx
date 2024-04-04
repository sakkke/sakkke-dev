"use client";

import Button from "@/app/components/Button";
import { useId, useState } from "react";

export default function Tool() {
  const textareaId = useId();
  const [text, setText] = useState("");

  const handleSort = () => {
    setText([...text.split("\n")].sort().join("\n"));
  };

  return (
    <>
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
      <Button onClick={handleSort}>sort</Button>
    </>
  );
}
