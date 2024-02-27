import { useEffect, useState } from 'react'
// import Transition from './assets/transition.mp4'
// import Footage from './assets/footage.mp4'
import opening_sound from './assets/opening_sound.mp4'

import { Submit } from './firebase'
import { ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig";

import { Transition } from './pages/Transition'
import { Video } from './pages/Video'
import { Footage } from './pages/Footage'


// import KULogo from '/ku_job_fair_center_logo_dark.png'
// import './App.css'

// import { Loading } from './components/Loading';
// import image from '/ku_job_fair_center_logo_dark.png'
// import { CountDown } from './compontns/CountDown'



function App() {
    const [content, setContent] = useState(0);
    const [opening, setOpening] = useState(false);
    // let contentList = [Transition,opening_sound, Footage];

    const fetchFile = async () => {
        try {
            const fileRef = ref(storage, 'content.txt');
            const url = await getDownloadURL(fileRef);
            const response = await fetch(url);
            if (response.ok) {
                const textData = await response.text();
                setContent(Number(textData));
            } else {
                console.log("Error fetching file:", response.status);
                setContent(0);
            }
        } catch (error) {
            console.log("File not found or other error occurred:", error);
            setContent(0);
        }
    };
    


    useEffect(() => {
        fetchFile();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        Submit();
        fetchFile();
        setOpening(true);
    }

    const handleEnded = () => {
        setOpening(false);
        fetchFile();
    }

    if (opening)
    {
        return (
            <div className='h-screen w-screen relative'>
            <video className="absolute top-0 left-0 w-full h-full object-cover z-10" autoPlay muted onEnded={handleEnded}>
                <source
                    src={opening_sound}
                    type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        )
    }

    console.log("debug: ", content);

    return (
        <div className="h-screen w-screen relative " onClick={handleSubmit}>

            {content == 0 ? (
                    <Transition/>
            ): (
                    <Footage/>
            )}

            
        </div>
    );
}

export default App
