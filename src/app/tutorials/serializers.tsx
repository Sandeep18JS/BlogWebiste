import React from 'react';
import { PortableTextComponents } from '@portabletext/react';
import CodeBlock from './codeblock';
import ImageFile from './imagefile';
import VideoFile from './videofile';

const serializers: PortableTextComponents = {
    types: {
        code: (props) => <CodeBlock value={props.value} />,
        file: (props) => <VideoFile value={props.value} />,
        image: (props) => <ImageFile value={props.value} />
    },
};

export default serializers;
