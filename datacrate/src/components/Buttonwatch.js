import React from 'react'
import './Button.css'
import video from '../videos/video-1.mp4'

const STYLES=['btn--primary','btn--outline']
const SIZES=['btn--medium','btn--large']

export const Buttonwatch = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <a href={video} target="_blank"className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </a>)}