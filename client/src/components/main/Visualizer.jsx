import React, { useEffect, useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { RunningContext } from '../../App';
import styled from 'styled-components'

const useStyles = makeStyles({
    box: {
        width: 30,
        textAlign: 'center',
        display: 'inline-box',
        margin: 5,
    }
})

const Visualizer = () => {
    const classes = useStyles();
    const runningContext = useContext(RunningContext)
    return (
        <div style={{ textAlign: 'center' }}>
            {runningContext.randomArray.map((element, index) =>
                <Bar className={classes.box} style={{ backgroundColor: '#42cef5', height: element * 5 + 1, color: 'black', WebkitBoxAlign: 'end', }} key={index} active={runningContext.currentElement === index} next={runningContext.nextElement === index}>
                    {element}
                </Bar>)
            }
        </div>
    )
}

const Bar = styled.div`
    background:${props => props.active ? 'red!important' : props.next ? 'blue!important' : '#42cef5'};
    transition:background-color ease-in-out 0.5s
`

export default Visualizer
