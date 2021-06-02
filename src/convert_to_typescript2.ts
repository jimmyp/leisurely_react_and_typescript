enum EventTypes {
    'EAT',
    'SLEEP',
    'WORK'
}

type Eat = {
    food: string
    type: EventTypes.EAT
}

type Sleep = {
    dream: string
    duration: number
    type: EventTypes.SLEEP
}

type Work = {
    profession: string
    slack: string
    type: EventTypes.WORK
}

type Play = {
    type: 'PLAY'
}

type Events = Eat | Sleep | Work

function assertUnreachable(x: never): never {
    throw new Error("Didn't expect to get here");
}

//TODO: Couldn't get exhaustive pattern matching working?
function handleEvent(event: Events) {
    switch (event.type) {
        case EventTypes.EAT: return `Enjoy your ${event.food}`;
        case EventTypes.SLEEP: return `You will dream about ${event.dream} for ${event.duration} hours`;
        case EventTypes.WORK: return `A job in ${event} is tough but you can always ${event.slack}!`;
        default: throw new Error("Didn't expect to get here");
    }
}
console.log(handleEvent({ type: EventTypes.EAT, food: 'Pizza' }));
console.log(handleEvent({ type: EventTypes.SLEEP, dream: 'Surfing', duration: 10 }));
console.log(handleEvent({ type: EventTypes.WORK, profession: 'software', slack: `play games` }));

export default {}