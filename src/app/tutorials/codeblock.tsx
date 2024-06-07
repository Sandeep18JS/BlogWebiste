'use client';
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arduinoLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import copy from 'copy-to-clipboard';

const customArduinoLight = {
    ...arduinoLight,
    "hljs": {
        ...arduinoLight.hljs,
        "color": "#5b6a71"
    }
}


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
        <div className="relative w-[calc(93vw)]  md:max-w-[850px]">
            <SyntaxHighlighter
                showLineNumbers={true}
                showInlineLineNumbers={true}
                language='javascript'
                className='border border-border/100'
                style={customArduinoLight}
                customStyle={{ padding: '1em', marginBottom: '2em', backgroundColor: 'transparent' }}
            >
                {value.code}
            </SyntaxHighlighter>
            <button
                className="absolute top-2 right-2 px-6 py-2  border border-border/100 text-sm rounded-md"
                onClick={handleCopy}
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
};

export default CodeBlock;