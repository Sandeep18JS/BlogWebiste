import { PortableTextComponents } from '@portabletext/react'
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

interface Props {
    value: {
        code: string
        language: string
    }
}

const CodeBlock = ({ value }) => {
    return (
        <SyntaxHighlighter
            showLineNumbers={true}
            showInlineLineNumbers={true}
            language={jsx}
            style={docco}
            customStyle={{
                padding: '1em',
                marginBottom: '2em',
            }}
        >
            {value.code}
        </SyntaxHighlighter>
    )
}

const serializers: PortableTextComponents = {
    types: {
        code: CodeBlock,
    },
}

export default serializers
