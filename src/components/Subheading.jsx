import { useContext } from "react";
import { pList } from "./store/Postcardsstore";
function Subheading(){
  const {postList}=useContext(pList);
  const {addPost}=useContext(pList);
  const handleFetch=()=>{
      fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(obj=>obj.posts.forEach(item=>addPost(item.title,item.id,item.body,item.reactions,item.tags))).catch();
  }
  if(postList.length===0){
    return(
     <center>
         <h3 className="subhead">No Posts Yet</h3>
         <button type="button" onClick={handleFetch} class="btn btn-primary ">Get Data From Server</button>
     </center>
    );
  }
  else{
    return(
<button type="button" onClick={handleFetch} class="btn btn-primary ">Get Data From Server</button>
    );
  }
}
export default Subheading;