import { useState } from 'react'
// import Transition from './assets/transition.mp4'
import Footage from '../assets/footage.mp4'
import opening_sound from '../assets/opening_sound.mp4'
// import KULogo from '/ku_job_fair_center_logo_dark.png'
// import '../App.css'


export const Video = () => {
    const [isEnded, setIsEnded] = useState(false);

    return (

        <div>
            <video className="absolute top-0 left-0 w-full h-full object-cover z-10" autoPlay muted>
                <source
                    src={opening_sound}
                    type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}