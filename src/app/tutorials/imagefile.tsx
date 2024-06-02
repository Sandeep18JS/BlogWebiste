import Image from 'next/image';
import React from 'react'

type Props = {}

const ImageFile = ({ value }: any) => {

    const { asset } = value;
    const refParts = asset._ref.split('-');
    const imageUrl = `https://cdn.sanity.io/images/37z689uz/production/${refParts[1]}-${refParts[2]}.${refParts[3]}`;

    return (
        <>
            {imageUrl ?
                (<Image
                    src={imageUrl}
                    width={850}
                    height={850}
                    alt={"image"}
                    quality={100}
                    className='rounded-[10px] '
                />) : null}
        </>

    )


}

export default ImageFile