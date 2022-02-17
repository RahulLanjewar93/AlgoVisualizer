import React, { useContext } from 'react'
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
    background:${props => props.active ? '#ff5e00!important' : props.next ? '#e6712e!important' : '#ffbba6!important'};
`

const Visualizer = () => {
    const classes = useStyles();
    const globalContext = useContext(GlobalContext)

    return (
        <div>

            <div style={{ textAlign: 'center' }}>
                {globalContext.randomArray.map((element, index) =>
                    <Bar
                        className={classes.box}
                        style={{ backgroundColor: '#42cef5', width: `${70 / globalContext.randomArray.length}%`, height: element * 5 + 1, color: 'black' }}
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
                            style={{ width: `${70 / globalContext.randomArray.length}%`, color: 'black' }}
                            key={index}>
                            {element}
                        </Typography>
                    )
                    }
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                {globalContext.sortedArray.map((element, index) =>
                    <Bar
                        className={classes.box}
                        style={{ backgroundColor: '#42cef5', width: `${70 / globalContext.sortedArray.length}%`, height: element * 5 + 1, color: 'black' }}
                        key={index}
                        active={globalContext.currentElement === index}
                        next={globalContext.nextElement === index}>
                    </Bar>
                )
                }
                <div style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                    {globalContext.sortedArray.map((element, index) =>
                        <Typography
                            vairant='p'
                            className={classes.box}
                            style={{ width: `${70 / globalContext.sortedArray.length}%`, color: 'black' }}
                            key={index}>
                            {element}
                        </Typography>
                    )
                    }
                </div>
            </div>
        </div>
    )
}



export default Visualizer
