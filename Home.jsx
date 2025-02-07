import "./in1.css";
import { FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
function Home() {
    const nav=useNavigate();
    return (
    <div>
        <h1 className="h1">
        
          CRUD Application
        </h1>
        <div className="actions">
      <div className="action">
        <button onClick={()=>nav("/create")}>
          <FaPlus /> Create 
        </button>
        <p>Creates New Record</p>
      </div>
      <div className="action">
        <button>
          <FaEye /> Read
        </button>
        <p>View Records</p>
      </div>
      <div className="action">
        <button>
          <FaEdit /> Update
        </button>
        <p>Update Records</p>
      </div>
      <div className="action">
        <button>
          <FaTrash /> Delete
        </button>
        <p>Delete Records</p>
      </div>
    </div>
    </div>
    );
  }
  export default Home;
  