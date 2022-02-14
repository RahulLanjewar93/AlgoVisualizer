import sleep from '../../sleep'

const binarySearch = async (randomArray, setRandomArray, setCurrentElement, setNextElement, setCurrentStep, speed, index, setIndex, target) => {
    const newArray = [...randomArray]
    setRandomArray(newArray.sort((a, b) => a - b))
    // setCurrentStep([0, 6])
    // for (let i = 0; i < newArray.length; i++) {
    //     await sleep(0)
    //     setCurrentStep([1, 5])
    //     for (let j = 0; j < newArray.length - 1 - i; j++) {
    //         await sleep(0)
    //         setCurrentElement(j)
    //         setNextElement(j + 1)
    //         setCurrentStep([2, 4])
    //         if (newArray[j + 1] < newArray[j]) {
    //             await sleep(0)
    //             setCurrentStep([3])
    //             let temp = newArray[j]
    //             newArray[j] = newArray[j + 1];
    //             newArray[j + 1] = temp;
    //         }
    //         await setRandomArray([...newArray])
    //     }
    // }
    // setCurrentElement(null)
    // setNextElement(null)
    // setCurrentStep([])
    // setCurrentStep([7, 7])
    var low = 0;
    var high = newArray.length - 1;
    await sleep(speed)
    while (low <= high) {
        setCurrentStep([0, 10])
        var mid = Math.floor((low + high) / 2);
        setCurrentStep([1, 1])
        await sleep(speed)
        setIndex(mid)
        setCurrentStep([2, 4])
        if (newArray[mid] == target) {
            setCurrentElement(mid)
            setCurrentStep([3])
            await sleep(speed)
            return mid;
        }
        setCurrentStep([5, 7])
        if (newArray[mid] < target) {
            setCurrentElement(mid)
            await sleep(speed)
            setCurrentElement(high)
            await sleep(speed)

            setCurrentStep([6])
            low = mid + 1;
        }
        setCurrentStep([7, 9])
        if (newArray[mid] > target) {
            setCurrentElement(low)
            await sleep(speed)
            setCurrentElement(mid)
            await sleep(speed)
            setCurrentStep([19])
            high = mid - 1;
        }
        mid = Math.floor((low + high) / 2);
    }
    await sleep(speed)
    setCurrentStep([11])
    setCurrentElement(null)
    return -1;
}

export default binarySearch
