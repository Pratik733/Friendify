import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "firebase.js";

const handleUpload = (value) => {
  const fileName = new Date().getTime() + value.name;
  const storageRef = ref(storage, `/images/${fileName}`);
  const uploadTask = uploadBytesResumable(storageRef, value);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const uploaded = Math.floor(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      console.log(uploaded);
    },
    (error) => {
      console.log(error);
    },
    () => {
     getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log(url)
        return url;
        // handleInputState(name, url);
      });
    }
  );
};

export default handleUpload;
