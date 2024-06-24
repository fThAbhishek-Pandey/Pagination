const paginate = (follower)=> {
    const   ItemPerPage = 10;
    const  numberOfPages = Math.ceil(follower.length/ItemPerPage);
    const newFollowers = Array.from({length :numberOfPages },(_,index)=>{
             const start = index*ItemPerPage;
             return follower.slice (start,start+ItemPerPage);
    })
    return newFollowers;
}
export default paginate;