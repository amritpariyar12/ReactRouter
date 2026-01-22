import { useEffect } from 'react'
import { useState } from 'react'

function Github() {
    // to call the data from github api
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/amritpariyar12')
        .then(response => response.json())
        .then(data => {
            setData(data)
            console.log(data)
        })
    }, [])
  return (
    <div className='text-center m-4 bg-blue-600 text-white p-4 text-2xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="git picture" width={300}/>
    </div>
  )
}

export default Github
