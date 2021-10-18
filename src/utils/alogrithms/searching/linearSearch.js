import sleep from '../../sleep'

const linearSearch = async (randomArray,index, setIndex, setCurrentElement, setCurrentStep, speed, target) => {
    const newArray = [...randomArray]
    console.log(target);
    setCurrentStep([0, 4])
    for (let i = 0; i < newArray.length; i++) {
        await sleep(speed)
        setCurrentElement(i)
        setCurrentStep([1, 3])
        if (newArray[i] == target) {
            await sleep(speed)
            setCurrentStep([2])
            console.log('found');
            setIndex(i)
            console.log(index);
            return i
        }
    }
    await sleep(speed)
    setCurrentStep([5])
    console.log('not found');
    return -1
}

export default linearSearch
