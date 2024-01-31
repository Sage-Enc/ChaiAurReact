import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();
    // const [data, setData] = useState({})
    
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/sage-enc`)
    //     .then(res => res.json())
    //     .then(res => setData(res))
    // }, [])
  return (
    <div className='bg-slate-400 w-1/2 h-80 mx-auto flex'>
        <div className='left w-1/3'>
            <img src={data.avatar_url} alt="Sage Avatar" className='' />
        </div>
        <div className='right w-2/3 text-2xl font-bold font-mono pl-10 pt-10'>
            <h1>Username: {data.login}</h1>
            <h1>Name: {data.name}</h1>
            <h1>Followers: {data.followers}</h1>
            <h1>Following: {data.following}</h1>
            <h1>Twitter: {data.twitter_username}</h1>
        </div>
        
    </div>
  )
}

export default Github;