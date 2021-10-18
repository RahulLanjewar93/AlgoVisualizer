import sleep from '../../sleep'

const binarySearch = async (randomArray, setRandomArray, setCurrentElement, setNextElement, setCurrentStep, speed, index, setIndex, target) => {
    const newArray = [...randomArray]
    setCurrentStep([0, 20])
    for (let i = 0; i < newArray.length; i++) {
        setCurrentStep([1, 5])
        await sleep(speed)
        for (let j = 0; j < newArray.length - 1 - i; j++) {
            setCurrentElement(j)
            setNextElement(j + 1)
            setCurrentStep([2, 4])
            await sleep(speed)
            if (newArray[j + 1] < newArray[j]) {
                setCurrentStep([3])
                let temp = newArray[j]
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temp;
                await sleep(speed)
            }
            await setRandomArray([...newArray])
        }
    }
    setCurrentStep([7])
    var low = 0;
    setCurrentStep([8])
    var high = newArray.length - 1;
    setCurrentStep([9, 19])
    while (low <= high) {
        setCurrentStep([10])
        var mid = Math.floor((low + high) / 2);
        await sleep(speed)
        setCurrentStep([4])
        setIndex(mid)
        setCurrentStep([11, 13])
        if (newArray[mid] == target) {
            await sleep(speed)
            setCurrentStep([12])
            return mid;
        }
        setCurrentStep([14, 16])
        if (newArray[mid] < target) {
            await sleep(speed)
            setCurrentStep([15])
            low = mid + 1;
        }
        setCurrentStep([16, 18])
        if (newArray[mid] > target) {
            await sleep(speed)
            setCurrentStep([19])
            high = mid - 1;
        }
        mid = Math.floor((low + high) / 2);
    }
    await sleep(speed)
    setCurrentStep([20])
    return -1;
}

export default binarySearch
