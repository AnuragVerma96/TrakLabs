import AddDept from "../Components/AddDept";
import DepartmentTable from "../Components/DepartTable";
import { Link } from "react-router-dom"

const Department = () =>{
    return (
        <>
        <DepartmentTable/>
        <Link to='/addDepartment'>
            <button onClick={AddDept} style={{margin:'10px', fontFamily:'sans-serif', padding:'0',cursor:'pointer'}}>Add Department</button>
        </Link>
        </>
    );
}

export default Department;