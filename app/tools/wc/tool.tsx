"use client";

import { useId, useState } from "react";

export default function Tool() {
  const textareaId = useId();
  const [text, setText] = useState("");

  const getBytes = (text: string): number => new Blob([text]).size;
  const getCharacters = (text: string): number => text.length;
  const getNewlines = (text: string): number => text.split("\n").length - 1;
  const getWords = (text: string): number => {
    const t = text.replace(/[\n ]+/g, " ").replace(/^ +| +$/, "");
    return t.length === 0 ? 0 : t.split(/[\n ]/).length;
  };
  const getLongestLineLength = (text: string): number =>
    Math.max(...text.split("\n").map((t) => t.length));

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
      <span>
        <span className="text-[var(--ctp-macchiato-pink)]">
          bytes: {getBytes(text)}
        </span>
        <br />
        <span className="text-[var(--ctp-macchiato-red)]">
          characters: {getCharacters(text)}
        </span>
        <br />
        <span className="text-[var(--ctp-macchiato-yellow)]">
          newlines: {getNewlines(text)}
        </span>
        <br />
        <span className="text-[var(--ctp-macchiato-green)]">
          words: {getWords(text)}
        </span>
        <br />
        <span className="text-[var(--ctp-macchiato-blue)]">
          longest line length: {getLongestLineLength(text)}
        </span>
      </span>
    </>
  );
}
