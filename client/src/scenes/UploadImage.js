import { ref, uploadBytesResumable } from "firebase/storage";
import storage from "firebase.js";

const handleUpload = (value) => {
  const fileName = new Date().getTime() + value.name;
  const storageRef = ref(storage, `/images/${fileName}`);
  const uploadTask = uploadBytesResumable(storageRef, value);
  return uploadTask;
  
};

export default handleUpload;
