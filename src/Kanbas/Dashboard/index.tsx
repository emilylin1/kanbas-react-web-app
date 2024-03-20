import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h2 style={{ marginTop: "10px" }}>Published Courses ({courses.length})</h2> <hr />
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        style={{ marginBottom: "10px" }}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        style={{ marginBottom: "10px" }}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.semester}
        className="form-control"
        style={{ marginBottom: "10px" }}
        onChange={(e) => setCourse({ ...course, semester: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        style={{ marginBottom: "10px" }}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        style={{ marginBottom: "10px" }}
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button
        onClick={addNewCourse}
        className="btn btn-light"
        style={{ backgroundColor: "#f5f5f5", marginRight: "10px" }}
      >
        Add
      </button>
      <button
        onClick={updateCourse}
        className="btn btn-light"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        Update
      </button>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <Link
                  className="card-image"
                  to={`/Kanbas/Courses/${course._id}/Home`}
                >
                  <img
                    src={`/images/${course.image}`}
                    className="card-img-top"
                    style={{ height: 150 }}
                  />
                </Link>
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.number} {course.name} <br />
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-light"
                      style={{
                        backgroundColor: "#f5f5f5",
                        marginRight: "10px",
                        fontSize: "small",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-light"
                      style={{ backgroundColor: "#f5f5f5", fontSize: "small" }}
                    >
                      Delete
                    </button>
                  </Link>
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ color: "gray", textDecoration: "none" }}
                  >
                    <p className="card-text">
                      {course.number}.{course._id}
                    </p>{" "}
                  </Link>
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      color: "gray",
                      textDecoration: "none",
                      fontSize: "smaller",
                    }}
                  >
                    <p className="card-text">{course.semester}</p>{" "}
                  </Link>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ color: "gray", fontSize: "large" }}
                  >
                    <FaRegEdit />{" "}
                  </Link>
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
