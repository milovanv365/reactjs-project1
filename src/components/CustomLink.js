import React from 'react'
import {Link} from "react-router-dom";

const CustomLink = (props) => {
    return (
        <Link
            to={{pathname: props.pathName}}
            style = {{
                color: props.color,
                lineHeight: props.lineHeight,
                fontSize: props.fontSize,
                fontWeight: props.fontWeight,
                letterSpacing: props.letterSpacing,
                wordSpacing: props.wordSpacing,
                borderBottom: props.borderBottom
            }}
        >
            {props.content}
        </Link>
    )
}

CustomLink.defaultProps = {
    borderBottom: "1px solid"
}

export default CustomLink