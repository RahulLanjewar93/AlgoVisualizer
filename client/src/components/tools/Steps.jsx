import { useContext } from 'react'
import { GlobalContext } from '../../App'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    code: {
        backgroundColor: 'grey'
    },
    steps: {
        margin: '4px 0px'
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
                        <pre className={globalContext.currentStep.map((currentStep) => {
                            return (`${currentStep == index ? `current` : classes.steps}`)
                        })} key={index}>
                            {step}
                        </pre>
                    )
                })}
            </code>
        </div>
    )
}

export default Steps
