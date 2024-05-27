import React, {useState} from "react";
import StudentItem from "./StudentItem";

const Form = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [allStudents, setAllStudents] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newStudent = { name, mobile, address };
        setAllStudents([...allStudents, newStudent]);
    
        setName("");
        setMobile("");
        setAddress("");
    };

    const handleDelete = (index) => {
        const updatedStudents = [...allStudents];
        updatedStudents.splice(index, 1);
        setAllStudents(updatedStudents);
    };

    const handleEdit = (index) => {
        const selectedStudent = allStudents[index];
        setName(selectedStudent.name);
        setMobile(selectedStudent.mobile);
        setAddress(selectedStudent.address);
    };

   
    return(
        <>
       
        <form onSubmit={handleSubmit}>
            <h1 className="header">Student Manager</h1>
            <p className="allStudents">All Students: {allStudents.length}</p>
            <label htmlFor="name" className="name">Name:</label>
            <input 
             type="text" 
             value={name} 
             onChange={(e) => setName(e.target.value)} 
            
             />

            <div>
            <label htmlFor="mobileNumber" className="mobile">Mobile:</label>
            <input 
            type="number"
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)}  />
            </div>
            
            <div>
            <label htmlFor="address" className="address">Address:</label>
            <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} />
            </div>
            <button type="submit" className="btn">Add</button>
           
        </form>
        <h1>All Students</h1>
        <ul>
                {allStudents.map((student, index) => (
                    <StudentItem 
                        key={index} 
                        student={student} 
                        onDelete={() => handleDelete(index)} 
                        onEdit={() => handleEdit(index)} 
                    />
                ))}
        </ul>
        </>
    );
}
export default Form;