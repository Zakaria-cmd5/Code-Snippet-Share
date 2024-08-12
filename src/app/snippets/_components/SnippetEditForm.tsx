"use client";

import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";

interface Props {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: Props) => {
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
};

export default SnippetEditForm;
