"use client";

import { editSnippet } from "@/actions";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";

interface Props {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: Props) => {
  const [code, setCode] = useState(snippet.code);

  const editorChangeHandler = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={editorChangeHandler}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded mt-2">
          Save
        </button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
