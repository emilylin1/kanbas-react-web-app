import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaRegEdit } from "react-icons/fa";
function Dashboard() {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>              <hr />
            <h2>Published Courses (12)</h2> <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <Link className="card-image" to={`/Kanbas/Courses/${course._id}/Home`}>
                                    <img src={`/images/${course.image}`} className="card-img-top"
                                        style={{ height: 150 }} />
                                </Link>
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.number} {course.name} </Link>
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ color: "gray", textDecoration: "none" }}>
                                        <p className="card-text">{course.number}.{course._id}</p> </Link>
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ color: "gray", textDecoration: "none", fontSize: "smaller"}}>
                                        <p className="card-text">{course.semester}</p> </Link>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} style={{color: "gray", fontSize: "large"}}>
                                        <FaRegEdit /> </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;