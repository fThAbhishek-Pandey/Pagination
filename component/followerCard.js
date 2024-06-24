

const folowerCardf = (data) => {
    console.log("I am going to create : ",data);
    const followerCard = data.map((follower)=>{
        console.log("follower in follawer cart : ",follower);
        const  {login,avatar_url,url} = follower;
        return `
        <article class='card'>
           <img src="${avatar_url}" alt='person' />
           <h4>${login}</h4>
           <a href="${url}" class="btn">view profile</a>
        </article>`;
        }).join(' ');
        console.log("followerCards : ",followerCard);
        return followerCard;
}
export default folowerCardf; 
