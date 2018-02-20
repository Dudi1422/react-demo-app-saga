import React from 'react'

const FromToTimeInput = (props) => (
    <div style={{ ...style.container, ...props.containerStyle }}>
        <span style={{ ...style.label, ...props.labelStyle }}>{props.title}</span>
        <div style={{ ...style, ...props.style }}>
            <span style={{ ...style.fromToStyle, ...props.fromToStyle }}>From</span>
            <input style={{ ...style.timeInputStyle, ...props.timeInputStyle }} value={props.fromValue} id="time" type="time" />
            <span style={{ ...style.fromToStyle, ...props.fromToStyle }}>To</span>
            <input style={{ ...style.timeInputStyle, ...props.timeInputStyle }} value={props.toValue} id="time" type="time" />
        </div>
    </div>
)
export default FromToTimeInput;

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: '15px',
        marginBottom: '9px'
    },
    width: '270px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    timeInputStyle: {
        backgroundColor: '#fdf5e6'
    },
    fromToStyle: {
        fontWeight: 'bold',
        fontSize: 'small'
    }
}