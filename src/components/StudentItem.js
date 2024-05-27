import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const StudentItem = ({ student, onDelete, onEdit }) => {
    return (
        <li>
            <p>{student.name} {student.mobile} {student.address}
            <DeleteButton onClick={onDelete} />
            <EditButton onClick={onEdit} />
            </p>
            
        </li>
    );
};

export default StudentItem;