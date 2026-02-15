import Post from "./Post";
import Subheading from "./subheading";
import { useContext } from "react";
import { pList } from "./store/Postcardsstore";
const Postlist=()=>{
  const {postList}=useContext(pList);
    return( 
    <>
    {postList.map(items=><Post posts={items}></Post>)};  
      <Subheading></Subheading>
    </>);
}
export default Postlist;