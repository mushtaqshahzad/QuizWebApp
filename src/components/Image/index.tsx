import React from 'react'

const Image = ({ src, alt }): any => {
    return (
        <img
            src={src}
            style={{ margin: '0 10px', width: '25px', height: '25px' }}
            alt={alt}
        />
    )
}

export default Image
