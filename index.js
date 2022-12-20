// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if (blocks > 42){
        return blocks - 42;
    } else if (blocks < 42){
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocksInFeet){
    let distance = distanceFromHqInBlocks(blocksInFeet)
    return distance*264
}

function distanceTravelledInFeet(start, destination){
    if(destination > start){
        return (destination - start)*264;
    } else if(start > destination){
        return (start - destination)*264
    }
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400){
        return distance*0;
    }else if(distance < 2000){
        return (distance - 400)*0.02;
    }else if(distance < 2500){
        return 25;
    }else{
        return 'cannot travel that far'
    }
}












































































// function distanceFromHqInBlocks(currentBlock) {
//     if (currentBlock > 42) {
//         return currentBlock - 42;
//     } else if (currentBlock < 42) {
//         return 42 - currentBlock;
//     }
// }

// function distanceFromHqInFeet(distance) {
//     if (distance > 42) {
//         return (distance - 42)*264;
//     } else if (distance < 42) {
//         return (42 - distance)*264; 
//     }
// }

// function distanceTravelledInFeet(start, destination) {
//     if (destination > start) {
//         return (destination - start)*264;
//     } else if (destination < start) {
//         return (start - destination)*264
//     }
// }

// function calculatesFarePrice(start, destination){
//     let dist = distanceTravelledInFeet(start, destination)
//     if (dist <= 400){
//         return dist*0;
//     } else if (dist < 2000) {
//         return (dist - 400)*0.02;
//     } else if (dist < 2500) {
//         return 25;
//     } else {
//         return 'cannot travel that far';
//     }
// }