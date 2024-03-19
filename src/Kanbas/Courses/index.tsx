import { useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
  Link,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import {
  FaAddressBook,
  FaBook,
  FaBullseye,
  FaCalendarAlt,
  FaChevronDown,
  FaClipboard,
  FaExclamationCircle,
  FaGlasses,
  FaHome,
  FaInbox,
  FaPlug,
  FaRegCircle,
  FaRegClock,
  FaRegComments,
  FaRegFile,
  FaRegFolder,
  FaRegQuestionCircle,
  FaRegUserCircle,
  FaRocket,
  FaShareSquare,
  FaSlidersH,
  FaTachometerAlt,
  FaTimes,
  FaTv,
  FaUsers,
} from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Assignments from "./Assignments";
import Home from "./Home";
import "./index.css";

function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const pathName = useLocation().pathname.split("/").pop();
  const [isKanbasNavbarOpen, setIsKanbasNavbarOpen] = useState(false);
  const [isCourseNavbarOpen, setIsCourseNavbarOpen] = useState(false);

  const toggleKanbasNavbar = () => {
    setIsKanbasNavbarOpen(!isKanbasNavbarOpen);
    if (isCourseNavbarOpen) {
      setIsCourseNavbarOpen(false);
    }
  };

  const toggleCourseNavbar = () => {
    setIsCourseNavbarOpen(!isCourseNavbarOpen);
    if (isKanbasNavbarOpen) {
      setIsKanbasNavbarOpen(false);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column flex-grow-1">
        <div className="d-flex d-block d-md-none mobile-navbar">
          <div>
            <button
              className="btn btn-black"
              type="button"
              onClick={toggleKanbasNavbar}
            >
              <HiMiniBars3 />
            </button>
            <div
              className={`collapse ${isKanbasNavbarOpen ? "show" : ""}`}
              id="collapseKanbasNav"
            >
              <ul className="mobile-kanbas-navbar">
                <li>
                  <Link to={`/Kanbas/Dashboard`} onClick={toggleKanbasNavbar}>
                    {" "}
                    <FaTachometerAlt /> Dashboard{" "}
                  </Link>
                </li>
                <li>
                  <Link to={`/Kanbas/Account`} onClick={toggleKanbasNavbar}>
                    {" "}
                    <FaRegUserCircle /> Account{" "}
                  </Link>
                </li>
                <li>
                  <Link to={`/Kanbas/Courses`} onClick={toggleKanbasNavbar}>
                    {" "}
                    <FaBook /> Courses{" "}
                  </Link>
                </li>
                <li>
                  <Link to={`/Kanbas/Calendar`} onClick={toggleKanbasNavbar}>
                    {" "}
                    <FaCalendarAlt /> Calendar{" "}
                  </Link>
                </li>
                <li>
                  <Link to={`/Kanbas/Inbox`} onClick={toggleKanbasNavbar}>
                    {" "}
                    <FaInbox /> Inbox{" "}
                  </Link>
                </li>
                <li>
                  <Link to={`/Kanbas/Studio`} onClick={toggleKanbasNavbar}>
                    {" "}
                    <FaTv /> Studio{" "}
                  </Link>
                </li>
                <li>
                  <Link to={`/Kanbas/Commons`} onClick={toggleKanbasNavbar}>
                    {" "}
                    <FaShareSquare /> Commons{" "}
                  </Link>
                </li>
                <li>
                  <Link to={`/Kanbas/History`} onClick={toggleKanbasNavbar}>
                    {" "}
                    <FaRegClock /> History{" "}
                  </Link>
                </li>
                <li>
                  <Link to={`/Kanbas/Help`} onClick={toggleKanbasNavbar}>
                    {" "}
                    <FaRegQuestionCircle /> Help{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            {course?.number} {course?.name} <br />
            {pathName}
          </div>
          <div>
            <button
              className="btn btn-black"
              type="button"
              onClick={toggleCourseNavbar}
            >
              {isCourseNavbarOpen ? <FaTimes /> : <FaChevronDown />}
            </button>
            <div
              className={`collapse ${isCourseNavbarOpen ? "show" : ""}`}
              id="collapseCourseNav"
            >
              <ul className="mobile-course-navbar">
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Home`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaHome /> Home{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Modules`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaRegCircle /> Modules{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Piazza`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaPlug /> Piazza{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaBook /> Assignments{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Quizzes`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaRocket /> Quizzes{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Grades`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaAddressBook /> Grades{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/People`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaUsers /> People{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/People`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaRegComments /> Discussions{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Announcements`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaExclamationCircle /> Announcements{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Pages`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaRegFile /> Pages{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Files`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaRegFolder /> Files{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Rubrics`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaClipboard /> Rubrics{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Outcomes`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaBullseye /> Outcomes{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Collaborations`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaRegCircle /> Collaborations{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Syllabus`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaBook /> Syllabus{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Settings`}
                    onClick={toggleCourseNavbar}
                  >
                    {" "}
                    <FaSlidersH /> Settings{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-block d-md-none">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="Discussions" element={<h1>Discussions</h1>} />
            <Route path="Announcements" element={<h1>Announcements</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
            <Route path="Files" element={<h1>Files</h1>} />
            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
            <Route path="Settings" element={<h1>Settings</h1>} />
          </Routes>
        </div>
      </div>

      <div className="d-none d-md-block">
        <div className="breadcrumb">
          <div className="breadcrumb-left">
            <HiMiniBars3 /> &nbsp; &nbsp; {course?.number} {course?.name}{" "}
            <BiChevronRight />
            <span style={{ color: "black" }}>{pathName}</span>
          </div>
          <div className="breadcrumb-right">
            <button type="button" className="btn btn-light-gray">
              <FaGlasses /> Student View
            </button>
          </div>
        </div>
        <hr />
        <CourseNavigation />
        <div>
          <div
            className="overflow-y-scroll position-fixed bottom-0 end-0 modules-list"
            style={{ left: "250px", top: "50px" }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<h1>Assignment Editor</h1>}
              />
              <Route path="Quizzes" element={<h1>Quizzes</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
              <Route path="People" element={<h1>People</h1>} />
              <Route path="Discussions" element={<h1>Discussions</h1>} />
              <Route path="Announcements" element={<h1>Announcements</h1>} />
              <Route path="Pages" element={<h1>Pages</h1>} />
              <Route path="Files" element={<h1>Files</h1>} />
              <Route path="Rubrics" element={<h1>Rubrics</h1>} />
              <Route path="Outcomes" element={<h1>Outcomes</h1>} />
              <Route path="Collaborations" element={<h1>Collaborations</h1>} />
              <Route path="Syllabus" element={<h1>Syllabus</h1>} />
              <Route path="Settings" element={<h1>Settings</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;
