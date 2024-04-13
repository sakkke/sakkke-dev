"use client";

import ErrorAlert from "@/app/components/ErrorAlert";
import { useCallback, useEffect, useId, useState } from "react";

export default function Tool() {
  const textAreaId = useId();
  const patternAreaId = useId();
  const resultAreaId = useId();

  const [text, setText] = useState("");
  const [pattern, setPattern] = useState("");
  const [result, setResult] = useState("");
  const [regExpValid, setRegExpValid] = useState(true);

  const validateRegExp = (pattern: string): boolean => {
    try {
      new RegExp(pattern);
      return true;
    } catch {
      return false;
    }
  };

  const handleGrep = useCallback(() => {
    if (!validateRegExp(pattern)) {
      setRegExpValid(false);
      return;
    }
    setRegExpValid(true);

    const lines = text.split("\n");
    const regexp = new RegExp(pattern);
    const filteredLines = lines.filter((line) => regexp.test(line));
    const filteredText = filteredLines.join("\n");
    setResult(filteredText);
  }, [text, pattern]);

  useEffect(() => {
    handleGrep();
  }, [handleGrep]);

  return (
    <>
      <details>
        <summary>changelog</summary>
        <h2>0.1.0</h2>
        <ul>
          <li>first release</li>
        </ul>
      </details>
      <hr />
      {!regExpValid ? <ErrorAlert>invalid pattern</ErrorAlert> : <></>}
      <div className="form-group">
        <label htmlFor={patternAreaId}>pattern:</label>
        <textarea
          name="textarea"
          id={patternAreaId}
          cols={30}
          rows={1}
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor={textAreaId}>text:</label>
        <textarea
          name="textarea"
          id={textAreaId}
          cols={30}
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor={resultAreaId}>result:</label>
        <textarea
          name="textarea"
          id={resultAreaId}
          cols={30}
          rows={10}
          value={result}
          readOnly={true}
        ></textarea>
      </div>
    </>
  );
}
