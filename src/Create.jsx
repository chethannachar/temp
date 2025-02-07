import { useNavigate } from "react-router-dom";
function Create(){
    const nav=useNavigate();
    return(<div><h1>Create</h1>
    <button onClick={()=>nav("/")}>Home</button></div>);
}
export default Create;