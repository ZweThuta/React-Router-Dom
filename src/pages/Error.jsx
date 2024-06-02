import { useNavigate } from "react-router-dom"

const Error = () => {
    const navigate = useNavigate();
    const navigateHandler = () =>{
        navigate("/");
    }
  return (
    <>
     <h1>404 error not found!</h1>
    <button onClick={navigateHandler}>Go to Home</button></>
   
  )
}

export default Error