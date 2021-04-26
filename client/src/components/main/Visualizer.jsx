import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'


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
    const [randomArray, setRandomArray] = useState([])

    const insertInArray = () => {
        for (let i = 0; i < 20; i++) {
            setRandomArray(prevArray => [...prevArray, Math.floor(Math.random() * 64)]);
        };
    }

    useEffect(() => {
        insertInArray();
    }, [])

    return (
        <div style={{ textAlign: 'center' }}>
            {randomArray.map((element, index) => <div className={classes.box} style={{ backgroundColor: '#42cef5', height: element * 3, color: 'black', WebkitBoxAlign: 'end', }} key={index}>{element}</div>)}
        </div>
    )
}

export default Visualizer
