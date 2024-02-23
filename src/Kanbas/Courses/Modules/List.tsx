import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            <div className="flex-fill">
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-light-gray">Collapse All</button>
                    <button type="button" className="btn btn-light-gray">View Progress</button>
                    <select id="publish-all" className="form-select btn-light-gray">
                        <option selected>Publish All</option>
                    </select>
                    <button type="button" className="btn btn-danger" style={{marginRight: "5px"}}>+ Module</button>
                    <button type="button" className="btn btn-light-gray">
                        <FaEllipsisV />
                    </button>
                </div>
                <hr />
                <ul className="list-group wd-modules">
                    {modulesList.map((module, index) => (
                        <li key={index}
                            className="list-group-item"
                            onClick={() => setSelectedModule(module)}>
                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson, index) => (
                                        <li className="list-group-item" key={index}>
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default ModuleList;