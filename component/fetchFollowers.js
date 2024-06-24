
const myurl = 'https://api.github.com/users/singhsanket143/followers';
const fetchFollowers = async () => {
    console.log("I am going to fetching github followers");
    console.log(myurl);
    const  response = await fetch (myurl);
    const data = await  response.json();
    console.log("data in fechfollwer function",data);
    return data;
}
export default fetchFollowers;
