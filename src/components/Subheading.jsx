import { useContext } from "react";
import { pList } from "./store/Postcardsstore";
function Subheading(){
  const {postList}=useContext(pList);
  if(postList.length===0){
    return(
      <h3 className="subhead">No Posts Yet</h3>
    );
  }
}
export default Subheading;