import React from 'react'
import { makeStyles } from '@mui/styles'
import { GlobalContext } from '../../App';
import styled from 'styled-components'
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    box: {
        textAlign: 'center',
        display: 'inline-box',
        margin: 1,
    },
    container: {
        marginTop: '3rem',
    }
})

const Bar = styled.div`
    background:${props => props.active ? '#ff5e00!important' : '#42cef5'};
`

export default function Visualizer() {
    const classes = useStyles();
    const globalContext = React.useContext(GlobalContext)
    return (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            {globalContext.randomArray.map((element, index) =>
                <Bar
                    className={classes.box}
                    style={{ backgroundColor: '#ffbba6', width: `${70 / globalContext.randomArray.length}%`, height: element * 5 + 1, border: '1px solid #232323' }}
                    key={index}
                    active={globalContext.currentElement === index}
                    next={globalContext.nextElement === index}>
                </Bar>
            )
            }
            <div style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                {globalContext.randomArray.map((element, index) =>
                    <Typography
                        vairant='p'
                        className={classes.box}
                        style={{ width: `${70 / globalContext.randomArray.length}%`, color: 'black', textAlign: 'center', padding: '0.1rem' }}
                        key={index}>
                        {element}
                    </Typography>
                )
                }
            </div>
        </div>
    )
}