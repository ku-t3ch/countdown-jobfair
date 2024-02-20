import { Completionist } from "./Completionist"

export const TimeRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    }else{
        return (
            <h1>
                {days}:{hours}:{minutes}:{seconds}
            </h1>
        )
    }
}