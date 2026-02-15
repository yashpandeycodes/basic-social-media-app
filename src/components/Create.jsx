import { useContext, useRef ,useState } from "react";
import { pList } from "./store/Postcardsstore";
const Create=()=>{
 const {addPost}=useContext(pList);
const postTitleElement=useRef();
const useridElement=useRef();
const postcontentElement=useRef();
const postReactionElement=useRef();
const postTagElement=useRef();
const handleSubmit=(event)=>{
  event.preventDefault();
  const postTitle=postTitleElement.current.value;
  const userid=useridElement.current.value;
  const postcontent=postcontentElement.current.value;
  const postReaction=postReactionElement.current.value;
  const postTag=postTagElement.current.value.split(" ");
  addPost(postTitle,userid,postcontent,postReaction,postTag);

  postTitleElement.current.value="";
  useridElement.current.value="";
  postcontentElement.current.value="";
  postReactionElement.current.value="";
  postTagElement.current.value="";
}
  return (
    <form onSubmit={handleSubmit}>
       <div class="mb-3">
    <label for="userId" class="form-label">User Id</label>
    <input type="text" class="form-control" id="reactions"placeholder="Enter your user id here..." ref={useridElement}/>
  </div>
  <div class="mb-3">
    <label for="title" class="form-label">Post Title</label>
    <input type="text" class="form-control" id="title" placeholder="Today's mood..." ref={postTitleElement}/>
  </div>
   <div class="mb-3">
    <label for="body" class="form-label">Content</label>
    <textarea type="text" class="form-control" id="content" rows="4" placeholder="Explain more about your feeling..." ref={postcontentElement}/>
  </div>
   <div class="mb-3">
    <label for="reactions" class="form-label">Reactions</label>
    <input type="text" class="form-control" id="reactions"placeholder="How many people reacted on this post?" ref={postReactionElement}/>
  </div>
   <div class="mb-3">
    <label for="tags" class="form-label">Tags</label>
    <input type="text" class="form-control" id="tags"placeholder="Enter hashtags with space" ref={postTagElement}/>
  </div>
  <button type="submit" class="btn btn-primary">POST</button>

</form>
  );
}
export default Create;