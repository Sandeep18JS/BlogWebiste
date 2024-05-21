'use client';

import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import copy from 'copy-to-clipboard';

interface Props {
    value: { code: string; language: string };
}

const CodeBlock = ({ value }: Props) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        copy(value.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative">
            <SyntaxHighlighter
                showLineNumbers={true}
                showInlineLineNumbers={true}
                language={jsx}
                style={docco}
                customStyle={{ padding: '1em', marginBottom: '2em' }}
            >
                {value.code}
            </SyntaxHighlighter>
            <button
                className="absolute top-2 right-2 px-6 py-2 bg-white text-gray-800 text-sm rounded-md"
                onClick={handleCopy}
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
};

export default CodeBlock;