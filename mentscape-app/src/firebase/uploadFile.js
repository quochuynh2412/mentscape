import { storage } from "../firebase-config";
import { v4 as uuid } from 'uuid';
import { ref, uploadBytes } from "firebase/storage";

const prefix = "https://storage.googleapis.com/mentscape-25fdd.appspot.com/";

export const uploadFile = async (file, folderName) => {
    const fileExtension = file.type === 'image/png'
        ? '.png'
        : file.type === 'image/jpeg'
            ? '.jpg'
            : '';
    const filePath = folderName + '/' + uuid() + fileExtension;
    const storageRef = ref(storage, filePath);
    // const metadata = {
    //     contentType: 'image/png',
    // };
    await uploadBytes(storageRef, file);
    return prefix + filePath;
}