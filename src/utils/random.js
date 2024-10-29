import { Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getPipeSizePosPair = (addToPosx = 0) => {
    let yPosTop = getRandom(220, windowHeight - 900)

    const pipeTop = {
        pos: { x: windowWidth + addToPosx, y: yPosTop }, 
        size: { height: 450, width: 55 }
    }

    const pipeBottom = {
        pos: {x: windowWidth + addToPosx, y: (windowHeight - 100) + yPosTop},
        size: { height: 450, width: 55 }
    }

    return {pipeTop, pipeBottom}
}