import { type } from "os";

type Weekday = 1 | 2 | 3 | 4 | 5 | 'Monday' | 'etc.'

function goToWork(dayOfWeek : Weekday) {
    return `Working hard or hardly working?`;
}