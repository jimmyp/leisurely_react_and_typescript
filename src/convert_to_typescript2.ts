type Eat = {
    food: string
    type: 'EAT'
}

type Sleep = {
    dream: string
    duration: number
    type: 'SLEEP'
}

type Work = {
    profession: string
    slack: string
    type: 'WORK'
}

type Play = {
    type: 'PLAY'
}

type Events = Eat | Sleep | Work

function assertUnreachable(x: never): never {
    throw new Error("Didn't expect to get here");
}

//TODO: Couldn't get exhaustive pattern matching working?
// function handleEvent(event: Events) {
//     switch (event.type) {
//         case 'EAT': return `Enjoy your ${event.food}`;
//         case 'SLEEP': return `You will dream about ${event.dream} for ${event.duration} hours`;
//         case 'WORK': return `A job in ${event} is tough but you can always ${event.slack}!`;
//         default: assertUnreachable(event.type)
//     }
// }

// console.log(handleEvent({ type: 'EAT', food: 'Pizza' }));
// console.log(handleEvent({ type: 'SLEEP', dream: 'Surfing', duration: 10 }));
// console.log(handleEvent({ type: 'WORK', profession: 'software', slack: `play games` }));

export default {}