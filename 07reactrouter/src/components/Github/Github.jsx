
import { useLoaderData } from "react-router-dom";
const Github = () => {
    const data= useLoaderData()
//  const[data,setData]= useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/manjilkoirala')
//         .then(response=>response.json())
//         .then(data=>setData(data))
//     })
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Github Avatar" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader= async()=>{
   const response=await fetch('https://api.github.com/users/manjilkoirala')
      return response.json()
}

