import { useContext } from 'react'
import { GlobalContext } from '../../App'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    code: {
        backgroundColor: 'grey'
    },
    steps: {
        fontSize: '1.2em',
        lineHeight: '1.5em',
        margin: 0
    }
})


const Steps = () => {
    const globalContext = useContext(GlobalContext)
    const classes = useStyles()
    return (
        <div>
            <code className={classes.code}>
                {globalContext.stepsArray.map((step, index) => {
                    return (
                        <pre className={`${classes.steps} ${globalContext.currentStep.map((currentStep) => {
                            return (currentStep === index ? `current` : ``)
                        }).join('')}`} key={index}>
                            {step}
                        </pre>
                    )
                })}
            </code>
        </div >
    )
}

export default Steps
