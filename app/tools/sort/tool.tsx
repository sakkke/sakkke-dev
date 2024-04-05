"use client";

import Button from "@/app/components/Button";
import ButtonGroup from "@/app/components/ButtonGroup";
import PrimaryButton from "@/app/components/PrimaryButton";
import { useId, useState } from "react";

export default function Tool() {
  const textareaId = useId();
  const [text, setText] = useState("");

  const handleSort = () => {
    setText([...text.split("\n")].sort().join("\n"));
  };

  const handleReverse = () => {
    setText([...text.split("\n")].sort().reverse().join("\n"));
  };

  return (
    <>
      <details>
        <summary>changelog</summary>
        <h2>0.2.0</h2>
        <ul>
          <li>add changelog</li>
          <li>add &apos;reverse sort&apos; feature</li>
        </ul>
        <h2>0.1.0</h2>
        <ul>
          <li>first release</li>
        </ul>
      </details>
      <hr />
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
      <ButtonGroup>
        <PrimaryButton onClick={handleSort}>sort</PrimaryButton>
        <Button onClick={handleReverse}>reverse</Button>
      </ButtonGroup>
    </>
  );
}
