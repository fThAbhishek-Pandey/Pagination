
import folowerCardf from "./followerCard.js";
const container = document.querySelector(".container");
console.log(container);
const display = (data) => {
    console.log("I am going to display follower",data);
    //  const data = await fetchFollowers();
     console.log("123 : ",data);
     const folowerCard = folowerCardf(data);
     console.log("followerCards : ",folowerCard);
     container.innerHTML = folowerCard;

}   
export default display;
