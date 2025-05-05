import React from 'react'

const Arrow = ({ ...props }) => {
    return <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M15 1L8 7L1 1" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

};

export default Arrow;