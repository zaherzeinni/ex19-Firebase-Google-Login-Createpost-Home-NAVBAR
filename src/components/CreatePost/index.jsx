import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
const CreatePost = ({ isAuth }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [error,setError] = useState('')

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  const postCollection = collection(db, "posts");

  const createPost = async () => {



if (title === '' &&  postText === '' ){
 
  setError('some fields is Empty')
  console.log('error data'  , error)
  return
}




else {

    await addDoc(postCollection, {
      title,
      postText,
      ownerId: auth?.currentUser?.uid,
    });

    setError('')
   // navigate('/')

  }
  };

  return (
    <div className="createPostPage">

{error !=='' &&
        <div className=" text-danger text-2xl font-semibold">
          <p>{error}</p>
        </div>
}
     


     
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            className=" text-black"
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post Desc:</label>
          <textarea
            className=" text-black"
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button
          className="   bg-green-500"
         
          onClick={createPost}
        >
         
          Submit Post
        </button>

</div>
    </div>
  );
};

export default CreatePost;
