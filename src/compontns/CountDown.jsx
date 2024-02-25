import { useState, useEffect } from "react"
import Countdown from 'react-countdown';
import { TimeRenderer } from './TimeRanderer';
import { storage } from "../firebaseConfig";
import { ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

export const CountDown = () => {
    const [time, setTime] = useState();
    const [start, setStart] = useState(true);
    const [end, setEnd] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchFile = async () => {
        const fileRef = ref(storage, 'saved_date.txt');
        getDownloadURL(fileRef)
            .then((url) => {
                fetch(url)
                    .then(response => response.text())
                    .then(textData => {
                        setTime(textData);
                        setStart(true);
                    });
            })
            .catch((error) => {
                console.log("file not found");
                setStart(false);
            });
        
    };

    useEffect(() => {
        fetchFile();
        setTimeout(1000);
        setLoading(false);
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

            fetchFile();

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

    return (
        <div className="">
            {start && time ? (
                <div className="">
                    <Countdown date={time} renderer={TimeRenderer} />
                </div>

            ) :
                (
                    <div>
                        {!start ? (
                            <div>
                                <button onClick={handleSubmit}>Start</button>
                            </div>
                        ) : (
                            <div>
                                loading....
                            </div>
                        )}
                    </div>
                )}
        </div>
    )
}