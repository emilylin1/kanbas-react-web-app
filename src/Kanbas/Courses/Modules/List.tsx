import React, { useState } from "react";
import "./index.css";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaRegEdit,
  FaRegTrashAlt,
} from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules,
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module,
  );
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

  return (
    <>
      <div className="flex-fill">
        <div
          className="d-flex justify-content-end"
          style={{ marginBottom: "10px" }}
        >
          <button type="button" className="btn btn-light-gray">
            Collapse All
          </button>
          <button type="button" className="btn btn-light-gray">
            View Progress
          </button>
          <select id="publish-all" className="form-select btn-light-gray">
            <option selected>Publish All</option>
          </select>

          <button type="button" className="btn btn-light-gray">
            <FaEllipsisV />
          </button>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            value={module.name}
            style={{ marginBottom: "10px" }}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            className="form-control"
            value={module.description}
            style={{ marginBottom: "10px" }}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          <button
            type="button"
            className="btn btn-danger"
            style={{ marginRight: "5px" }}
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            + Module
          </button>
          <button
            className="btn btn-light-gray"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
        </div>
        <hr />
        <ul className="list-group wd-modules">
          {modulesList
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li
                key={index}
                className="list-group-item"
                onClick={() => setSelectedModule(module)}
              >
                <div>
                  <FaEllipsisV className="me-2" />
                  {module.name}
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaPlusCircle className="ms-2" />
                    <FaRegEdit
                      className="ms-2"
                      onClick={() => dispatch(setModule(module))}
                    />
                    <FaRegTrashAlt
                      className="ms-2"
                      onClick={() => dispatch(deleteModule(module._id))}
                    />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </div>
                {selectedModule._id === module._id && (
                  <ul className="list-group">
                    {module.lessons?.map(
                      (lesson: any, index: number) => (
                        <li className="list-group-item" key={index}>
                          <FaEllipsisV className="me-2" />
                          {lesson.name}
                          <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaEllipsisV className="ms-2" />
                          </span>
                        </li>
                      ),
                    )}
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
