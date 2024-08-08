import React,{useState,useEffect} from 'react'
import service from '../service/service.config'
function Profile() {

  const [dataOnlyForLoggedUsers, setData] = useState(null)

  useEffect(()=>{
    getData()
  },[])
  const getData = async ()=>{
    try {
      const response = await service.get("/user/own")
      console.log(response)
      setData(response.data)

    } catch (error) {
      console.log(error)
    }
  }
  if (dataOnlyForLoggedUsers === null){
    return "Fetching data, one moment please ..."
  }
  return (
    <div>Profile</div>
  )
}

export default Profile