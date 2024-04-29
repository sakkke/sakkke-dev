"use client";

import ErrorAlert from "@/app/components/ErrorAlert";
import { useCallback, useEffect, useId, useState } from "react";

export default function Tool() {
  const textAreaId = useId();
  const patternAreaId = useId();
  const replacementAreaId = useId();
  const resultAreaId = useId();

  const [text, setText] = useState("");
  const [pattern, setPattern] = useState("");
  const [replacement, setReplacement] = useState("");
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

  const handleReplace = useCallback(() => {
    if (!validateRegExp(pattern)) {
      setRegExpValid(false);
      return;
    }
    setRegExpValid(true);

    const regexp = new RegExp(pattern, "g");
    const replacedText = text.replace(regexp, replacement);
    setResult(replacedText);
  }, [text, pattern, replacement]);

  useEffect(() => {
    handleReplace();
  }, [handleReplace]);

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
          name="pattern_area"
          id={patternAreaId}
          cols={30}
          rows={1}
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor={replacementAreaId}>replacement:</label>
        <textarea
          name="replacement_area"
          id={replacementAreaId}
          cols={30}
          rows={1}
          value={replacement}
          onChange={(e) => setReplacement(e.target.value)}
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
          name="result_area"
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
