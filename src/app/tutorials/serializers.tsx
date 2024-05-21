import { PortableTextComponents } from '@portabletext/react';
import CodeBlock from './codeblock';

const serializers: PortableTextComponents = {
    types: {
        code: (props) => <CodeBlock value={props.value} />, // Ensure it is a functional component
    },
};

export default serializers;
