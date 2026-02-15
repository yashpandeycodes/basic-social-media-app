import { createContext, useReducer } from "react";

export const pList=createContext({
   postList: [],
   addPost:()=>{},
   deletePost:()=>{},
}
);
const ReducerList=(currentList,action)=>{
   let newList=currentList;
   if(action.type==="delete"){
      newList= (currentList.filter(item=>item.id!=action.payload.postId)) 
   }
   else if(action.type=="add"){
      newList=[...currentList,{
         id:(currentList.length+1),
         topic:action.payload.topic,
         content:action.payload.content,
         tags:action.payload.tags,
         username:action.payload.username,
         reactions:action.payload.reactions,
      }]
   }
   return newList;
}
  


function Postcardsstore({children}){
  const [postList,dispatchpostList]=useReducer(ReducerList,[]);

  const addPost=(postTitle,userid,postcontent,postReaction,postTag)=>{
  dispatchpostList({
   type:"add",
   payload:{
      topic:postTitle,
      username:userid,
      content:postcontent,
      reactions:postReaction,
      tags:postTag,
   }
  })
        
  }

  const deletePost=(postId)=>{
   dispatchpostList({
      type:"delete",
      payload:{
         postId,
      }
   });
  }
 

  return(
    <pList.Provider value={{
      postList:postList,
      addPost:addPost,
      deletePost:deletePost,
    }}>{children} </pList.Provider>
  );
}
export default Postcardsstore;
