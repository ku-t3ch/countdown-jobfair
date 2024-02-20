import { useState, useEffect } from "react"
import Countdown from 'react-countdown';
import { TimeRenderer } from './TimeRanderer';
import { storage } from "../firebaseConfig";
import { ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

export const CountDown = () => {
    const [time, setTime] = useState();
    const [start, setStart] = useState(false);
    const [end, setEnd] = useState(false);

    const fetchFile = async () => {
        const fileRef = ref(storage, 'saved_date.txt');
        getDownloadURL(fileRef)
            .then((url) => {
                fetch(url)
                    .then(response => response.text())
                    .then(textData => {
                        setTime(textData);
                        // console.log(textData);
                    });
            })
            .catch((error) => {
                console.log("file not found");
            });
    };

    useEffect(() => {
        fetchFile();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const storageRef = ref(storage);
        const fileRef = ref(storageRef, "saved_date.txt");
        const content = new Date(Date.now() + 86400 * 3 * 1000)

        try {
            const blob = new Blob([content], { type: 'text/plain' });
            await uploadBytes(fileRef, blob);
            setStart(true);

            console.log('File uploaded successfully!');

        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    const handleReset = async (e) => {
        e.preventDefault();
        const fileRef = ref(storage, 'saved_date.txt');

        deleteObject(fileRef).then(() => {
            console.log('File deleted successfully!');
        }).catch((error) => {
            console.error('Error deleting file:', error);
        });
    }

    console.log(time);

    return (
        <div className="">
            {start && time ? (
                <div className="">
                    <Countdown date={time} renderer={TimeRenderer} />
                    {/* <button onClick={handleSubmit}>Start</button>
                    <button onClick={handleReset}>Reset</button> */}
                </div>

            ) :
                (
                    <div>
                        <button onClick={handleSubmit}>Start</button>
                    </div>
                )}
        </div>
    )
}