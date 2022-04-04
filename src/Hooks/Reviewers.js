import { useEffect, useState } from "react"

const Reviewers=()=>{
    const[reviewer , setReviewer]=useState([]);
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setReviewer(data))
    },[])

    return[reviewer , setReviewer];
}
export default Reviewers;