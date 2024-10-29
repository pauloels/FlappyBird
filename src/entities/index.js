import Matter from 'matter-js';
import Bird from '../components/bird';
import floor from '../components/floor';

import { Dimensions } from "react-native";
import { getPipeSizePosPair } from '../utils/random';
import obstacle from '../components/obstacle';

const BOTTOM = 51

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default () => {
    let engine = Matter.Engine.create({ enableSleeping: false });

    let world = engine.world;

    engine.gravity.y = 0.4

    const pipeSizePosA = getPipeSizePosPair()
    const pipeSizePosB = getPipeSizePosPair( windowWidth * 0.9)

    return {
        physics: {engine, world},
        Bird: Bird(world, 'green', {x: 120, y: 300}, {height: 40, width: 40}),
        ObstacleTop1: obstacle(world, 'ObstacleTop1', 'green', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size, true),
        ObstacleBottom1: obstacle(world, 'ObstacleBottom1', 'green', pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size, true),
        ObstacleTop2: obstacle(world, 'ObstacleTop2', 'green', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size, true),
        ObstacleBottom2: obstacle(world, 'ObstacleBottom2', 'green', pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size, true),
        Floor: floor(world, '#E1D694', {x: windowWidth / 2, y: windowHeight - 17},
        { height: BOTTOM + 20, width: windowWidth })
    }
}