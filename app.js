import display from './component/displayFollowers.js';
import paginate from './component/paginate.js';
import fetchFollowers from './component/fetchFollowers.js';
import displayButtons from './component/displayButtons.js';

const title = document.querySelector(".section-title h1");
const loading_logo = document.querySelector(".logo");

const btnContainer = document.querySelector(".btn-container");
console.log("button containers : ",btnContainer);
let index =0;

let page =[];

const setupUI = ()=>{
      console.log("i am setup UI : ",index,page)
      display(page[index]);
     displayButtons(btnContainer,page,index);
}
const init = async ()=>{
      const followers = await fetchFollowers();
      title.textContent = "Pagination";
      loading_logo.classList.add("hide");
      page= paginate(followers);
      setupUI();
}
btnContainer.addEventListener("click",function(e){
      console.log("I am buttun container and I am Listening", e.currentTarget);
//     if(e.currentTarget.classList.contains("btn-container")) return;
    if (e.currentTarget.classList.contains("page-btn")){
      index = parseInt(e.target.dataset.index);
      
    }
    if (e.currentTarget.classList.contains("next-btn")){
        index ++;
        if(index>=page.length){
            index=0;
      }

    }
    if (e.currentTarget.classList.contains("prev-btn")){
       index --;
       if(index<0) index= page.length-1;
    }
    console.log("index : ",index);
    setupUI();

});

window.addEventListener('DOMContentLoaded',init);
