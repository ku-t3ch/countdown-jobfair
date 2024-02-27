// import { firebaseConfig } from "./firebaseConfig";
import { storage } from "./firebaseConfig";
import { ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";


const fetchFileFromStorage = async () => {
    try {
        const fileRef = ref(storage, 'content.txt');
        const url = await getDownloadURL(fileRef);
        const response = await fetch(url);
        if (response.ok) {
            const textData = await response.text();
            return (Number(textData));
        } else {
            console.log("Error fetching file:", response.status);
            return (0);
        }
    } catch (error) {
        console.log("File not found or other error occurred:", error);
        return (0);
    }
    
};


export const Submit = async (index) => {
    // e.preventDefault();

    const storageRef = ref(storage);
    const fileRef = ref(storageRef, "content.txt");
    const content = index

    try {
        const blob = new Blob([content], { type: 'text/plain' });
        await uploadBytes(fileRef, blob);

        console.log('File uploaded successfully!');

        return fetchFile();
    } catch (error) {
        console.error('Error uploading file:', error);
        return "";
    }
}


export const handleReset = async (e) => {
    e.preventDefault();
    const fileRef = ref(storage, 'content.txt');

    deleteObject(fileRef).then(() => {
        console.log('File deleted successfully!');
    }).catch((error) => {
        console.error('Error deleting file:', error);
    });
}
