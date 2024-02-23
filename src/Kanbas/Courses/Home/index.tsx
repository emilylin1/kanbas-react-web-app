import { FaArrowAltCircleRight, FaBullseye, FaCircle, FaExclamationCircle, FaFile, FaRegBell, FaRegCalendar, FaRegChartBar } from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
    return (
        <div className="d-flex flex-fill home-content">
            <ModuleList />
            <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: "250px" }}>
                <div className="misc-buttons-links">
                    <h4>Course Status</h4>
                    <button type="button" className="btn course-btn">
                        <FaFile /> Import Existing Content
                    </button>
                    <br />
                    <button type="button" className="btn course-btn">
                        <FaArrowAltCircleRight /> Import from Commons
                    </button>
                    <br />
                    <button type="button" className="btn course-btn">
                        <FaBullseye /> Choose Home Page
                    </button>
                    <br />
                    <button type="button" className="btn course-btn">
                        <FaRegChartBar /> View Course Stream
                    </button>
                    <br />
                    <button type="button" className="btn course-btn">
                        <FaExclamationCircle /> New Annnouncement
                    </button>
                    <br />
                    <button type="button" className="btn course-btn">
                        <FaRegChartBar /> New Analytics
                    </button>
                    <br />
                    <button type="button" className="btn course-btn">
                        <FaRegBell /> View Course Notifications
                    </button>
                    <br />
                    <br />

                    <h5>To Do</h5>
                    <hr />
                    <div className="to-do-item">
                        <span className="red-link"><FaCircle /> Grade A1 - ENV + HTML</span>
                        <br />
                        &nbsp; &nbsp; 100 points &#x2022; Sep 18 at 11:59pm
                    </div>
                    <br />

                    <div className="row">
                        <div className="col-7">
                            <h5>Coming Up</h5>
                        </div>
                        <div className="col-5 coming-up">
                            <span style={{ fontSize: "smaller", color: "red" }}><FaRegCalendar /> View Calendar</span>
                        </div>
                    </div>
                    <hr />
                    <div className="event">
                        <span className="red-link"><FaRegCalendar /> Lecture<br /></span> &nbsp; &nbsp; &nbsp;
                        <span className="gray-link"> CS4550.12631.202410 <br /> &nbsp; &nbsp; &nbsp; Sep 7 at 11:45am</span>
                    </div>
                    <br />
                    <div className="event">
                        <span className="red-link"><FaRegCalendar /> Lecture<br /></span> &nbsp; &nbsp; &nbsp;
                        <span className="gray-link"> CS4550.12631.202410 <br /> &nbsp; &nbsp; &nbsp; Sep 11 at 11:45am</span>
                    </div>
                    <br />
                    <div className="event">
                        <span className="red-link"><FaRegCalendar /> CS5610 06 SP23 Lecture<br /></span> &nbsp; &nbsp; &nbsp;
                        <span className="gray-link"> CS4550.12631.202410 <br /> &nbsp; &nbsp; &nbsp; Sep 11 at 6pm</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;