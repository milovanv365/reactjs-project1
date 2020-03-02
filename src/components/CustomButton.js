import React from 'react'
import Button from '@material-ui/core/Button';

const CustomButton = (props) => {
    return (
        <Button
            style = {{
                backgroundColor: props.backgroundColor,
                marginRight: props.marginRight,
                padding: props.padding,
                border: props.border,
                borderRadius: props.borderRadius,
                color: props.color,
                lineHeight: props.lineHeight,
                fontSize: props.fontSize,
                fontWeight: props.fontWeight,
                letterSpacing: props.letterSpacing,
                wordSpacing: props.wordSpacing,
                textTransform: props.textTransform
            }}
        >
            {props.label}
        </Button>
    )
}

export default CustomButton
