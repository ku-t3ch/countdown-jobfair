import { Completionist } from "./Completionist"
import { zeroPad } from 'react-countdown';

export const TimeRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    }else{
        return (
            <div className="grid grid-cols-4 gap-4 justify-items-center">
                <div className="text-8xl">{zeroPad(days)}</div>
                <div className="text-8xl">{zeroPad(hours)}</div>
                <div className="text-8xl">{zeroPad(minutes)}</div>
                <div className="text-8xl">{zeroPad(seconds)}</div>

                <div className="text-3xl">days</div>
                <div className="text-3xl">hours</div>
                <div className="text-3xl">minutes</div>
                <div className="text-3xl">seconds</div>
            </div>
        )
    }
}