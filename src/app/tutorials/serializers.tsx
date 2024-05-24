import React from 'react';
import { PortableTextComponents } from '@portabletext/react';
import CodeBlock from './codeblock';

const serializers: PortableTextComponents = {
    types: {
        code: (props) => <CodeBlock value={props.value} />,
    },
}


export default serializers;