import React, { useEffect, useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { RunningContext } from '../../App';
import styled from 'styled-components'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    box: {
        textAlign: 'center',
        display: 'inline-box',
        margin: 1,
    }
})

const Visualizer = () => {
    const classes = useStyles();
    const runningContext = useContext(RunningContext)
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                {runningContext.randomArray.map((element, index) =>
                    <Bar className={classes.box}
                        style={{ backgroundColor: '#42cef5', width: `${70 / runningContext.randomArray.length}%`, height: element * 5 + 1, color: 'black' }} key={index}
                        active={runningContext.currentElement === index}
                        next={runningContext.nextElement === index}>
                    </Bar>
                )
                }
                <div style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                    {runningContext.randomArray.map((element, index) =>
                        <Typography vairant='p' className={classes.box}
                            style={{ width: `${70 / runningContext.randomArray.length}%`, color: 'black' }} key={index}
                        >
                            {element}
                        </Typography>
                    )
                    }
                </div>
            </div>
        </>
    )
}

const Bar = styled.div`
    background:${props => props.active ? 'red!important' : props.next ? 'blue!important' : '#42cef5'};
    transition:background-color ease 0.3s
`

export default Visualizer
