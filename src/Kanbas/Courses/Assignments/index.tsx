import React from "react";
import { FaCheckCircle, FaEllipsisV, FaCaretDown, FaPlus, FaPenSquare } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <div className="breadcrumb">
                <div className="breadcrumb-left">
                    <input type="text" className="form-control" placeholder="Search for Assignment" />
                </div>
                <div className="breadcrumb-right">
                    <button type="button" className="btn btn-light-gray">+ Group</button>
                    <button type="button" className="btn btn-danger">+ Assignment</button>
                    <button type="button" className="btn btn-light-gray"> <FaEllipsisV /> </button>
                </div>
            </div>
            <hr />
            <ul className="list-group wd-assignments">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> <FaCaretDown className="me-2" />ASSIGNMENTS
                        <span className="float-end">
                            40% of Total <FaPlus className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <FaEllipsisV className="me-2" />
                                <FaPenSquare className="me-2 text-success" />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span> <br />
                                <span className="assignment-details">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Multiple Modules | Due Sep 18 at 11:59pm | 100 pts</span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;