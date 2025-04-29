// import React from "react";
// import "./Dashboard.css";
// import profilePic from "../assets/profile.jpg"; // optional

// export default function Dashboard() {
//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="user">
//           <img src={profilePic} alt="User" className="profile-pic" />
//           <h3>Kanye East</h3>
//           <p>k.east@edu-track.io</p>
//         </div>
//         <nav>
//           <ul>
//             <li>Overview</li>
//             <li>Classes</li>
//             <li>Grades</li>
//             <li>Teachers</li>
//             <li>Notes</li>
//           </ul>
//         </nav>
//         <div className="sidebar-footer">
//           <button>Settings</button>
//           <button>Log out</button>
//         </div>
//       </aside>

//       {/* Main content */}
//       <main className="main-content">
//         <h1>Overview</h1>
//         <div className="cards">
//           <div className="card">
//             <h2>English 101</h2>
//             <p>Starts today at 11AM. Class 300</p>
//             <p>34 students</p>
//           </div>
//           <div className="card">
//             <h2>Human Biology</h2>
//             <p>Wed 10/5, 2PM. Class 766</p>
//             <p>42 students</p>
//           </div>
//           <div className="card">
//             <h2>World Economy</h2>
//             <p>Mon 15/5, 11AM - Online</p>
//           </div>
//           <div className="card">
//             <h2>Paper Review</h2>
//             <p>Fri 19/5, 9AM - Online</p>
//           </div>
//         </div>

//         <h2>Your Schedule</h2>
//         <div className="calendar-placeholder">[Insert Calendar Here]</div>
//       </main>

//       {/* Right Panel */}
//       <aside className="right-panel">
//         <div className="ongoing">
//           <h3>Ongoing Lesson</h3>
//           <p>Science Basics</p>
//           <p>Ends in: 45 mins</p>
//           <p>Students: 34/40</p>
//           <p>Mandatory</p>
//         </div>
//         <div className="grades">
//           <h3>Grades</h3>
//           <ul>
//             <li>Mid-term paper: <span>98</span></li>
//             <li>Art History: <span>72</span></li>
//             <li>Maths & Numbers: <span>34</span></li>
//           </ul>
//         </div>
//         <div className="inbox">
//           <h3>Inbox</h3>
//           <p>Your summer scholarship was approved!</p>
//         </div>
//       </aside>
//     </div>
//   );
// }
// import React from "react";
// import img1 from "../assets/img1.png";
// import img2 from "../assets/img2.png";
// import img3 from "../assets/img3.png";
// import img4 from "../assets/img4.png";
// import img5 from "../assets/img5.png";
// import profilePic from "../assets/profile.jpg";
// import "./Dashboard.css";

// export default function Dashboard() {
//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="user">
//           <img src={profilePic} alt="User" className="profile-pic" />
//           <h3>Kanye East</h3>
//           <p>k.east@student.io</p>
//         </div>
//         <nav>
//           <ul>
//             <li className="active">Overview</li>
//             <li>Classes</li>
//             <li>Grades</li>
//             <li>Teachers</li>
//             <li>Notes</li>
//           </ul>
//         </nav>
//         <div className="sidebar-footer">
//           <button>Settings</button>
//           <button>Log out</button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         <h1>Overview</h1>
//         <div className="cards">
//           {/* Card 1 */}
//           <div className="card">
//             <img src={img1} alt="English 101" />
//             <div>
//               <h2>English 101</h2>
//               <p>Starts today at 11 AM. Class 300</p>
//               <p>34 students</p>
//               <div className="progress purple">
//                 <div style={{ width: "67%" }} />
//               </div>
//               <small>Lesson 8/12</small>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="card">
//             <img src={img2} alt="Human Biology" />
//             <div>
//               <h2>
//                 Human Biology <span className="badge homework">Homework</span>
//               </h2>
//               <p>Wed 10/5, 2 PM. Class 766</p>
//               <p>42 students</p>
//               <div className="progress green">
//                 <div style={{ width: "33%" }} />
//               </div>
//               <small>Lesson 4/12</small>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="card">
//             <img src={img3} alt="World Economy" />
//             <div>
//               <h2>
//                 World Economy <span className="badge exam">Exam</span>
//               </h2>
//               <p>Mon 15/5, 11 AM - Online</p>
//               <div className="progress blue">
//                 <div style={{ width: "40%" }} />
//               </div>
//               <small>Status: Sign up pending...</small>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="card">
//             <img src={img4} alt="Paper Review" />
//             <div>
//               <h2>Paper Review</h2>
//               <p>Fri 19/5, 9 AM - Online</p>
//               <div className="progress green">
//                 <div style={{ width: "100%" }} />
//               </div>
//               <small>Status: Signed up</small>
//             </div>
//           </div>
//         </div>

//         <h2>Your Schedule</h2>
//         <div className="calendar-placeholder">[Insert Calendar Here]</div>
//       </main>

//       {/* Right Panel */}
//       <aside className="right-panel">
//         <div className="ongoing">
//           <img src={img5} alt="Science Basics" className="ongoing-img" />
//           <h3>Science Basics</h3>
//           <p>(Ends in: 45 mins)</p>
//           <small>Students: 34/40</small>
//           <p><strong>Mandatory</strong></p>
//         </div>
//         <div className="grades">
//           <h3>Grades</h3>
//           <ul>
//             <li>Mid-term paper: <span>98</span></li>
//             <li>Art History: <span>72</span></li>
//             <li>Maths & Numbers: <span>34</span></li>
//           </ul>
//         </div>
//         <div className="inbox">
//           <h3>Inbox</h3>
//           <p><strong>Your summer scholarship was approved!</strong></p>
//           <small>For further information, contact Mrs. Horse to help you.</small>
//         </div>
//       </aside>
//     </div>
//   );
// }
import React from "react";
import { Link } from 'react-router-dom';

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import profilePic from "../assets/profile.jpg";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="user">
          <img src={profilePic} alt="User" className="profile-pic" />
          <h3>Kanye East</h3>
          <p>k.east@student.io</p>
        </div>
        <nav>
          <ul>
            <li className="active">Overview</li>
            <li>Classes</li>
            <li>Grades</li>
            {/* <li>Teachers</li> */}
            <li><Link to="/teachers">Teachers</Link></li>
            <li>CCTV</li>
            <li>Notes</li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button>Settings</button>
          <button>Log out</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h2>Overview</h2>
        <div className="cards">
          {/* Card 1 */}
          <div className="card">
            <div className="image-container">
              <img src={img1} alt="English 101" />
            </div>
            <div className="card-content">
              <h2>English- A Letter to God</h2>
              <p>Starts Tuesday at 11 AM. Class 300</p>
              
              <div className="progress purple">
                <div style={{ width: "67%" }} />
              </div>
              {/*<small>Lesson 8/12</small>*/}
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="image-container">
              <img src={img2} alt="Human Biology" />
            </div>
            <div className="card-content">
              <h2>
                Biology- Human Anatomy <span className="badge homework">Homework</span>
              </h2>
              <p>Due Date: Wed 10/5, 2 PM.</p>
            
              <div className="progress green">
                <div style={{ width: "33%" }} />
              </div>
              {/*<small>Lesson 4/12</small>*/}
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="image-container">
              <img src={img3} alt="Mathematics-Statistics" />
            </div>
            <div className="card-content">
              <h2>
                Mathematics- Statistics <span className="badge exam">Exam</span>
              </h2>
              <p>Mon 15/5, 11 AM </p>
              <div className="progress blue">
                <div style={{ width: "100%" }} />
              </div>
              {/*<small>Status: Sign up pending...</small>*/}
            </div>
          </div>

          {/* Card 4 */}
          <div className="card">
            <div className="image-container">
              <img src={img4} alt="Paper Review" />
            </div>
            <div className="card-content">
              <h2>Geography</h2>
              <p>Fri 19/5, 9 AM </p>
              <div className="progress green">
                <div style={{ width: "100%" }} />
              </div>
              {/*<small>Status: Signed up</small>*/}
            </div>
          </div>
        </div>

        <h2>Your Schedule</h2>
        <div className="calendar-placeholder">[Insert Calendar Here]</div>
      </main>

      {/* Right Panel */}
      <aside className="right-panel">
        <div className="ongoing">
          <img src={img5} alt="Chemistry- Molecules " className="ongoing-img" />
          <h3>Chemistry- Molecules</h3>
          <p>(Ends in: 45 mins)</p>
          {/*<small>Students: 34/40</small>
          <p><strong>Mandatory</strong></p>*/}
        </div>
        <div className="grades">
          <h3>Grades</h3>
          <ul>
            <li>Mid-term paper: <span>98</span></li>
            <li>Art History: <span>72</span></li>
            <li>Maths & Numbers: <span>34</span></li>
          </ul>
        </div>
        {/* <div className="inbox">
          <h3>Inbox</h3>
          <p><strong>Your summer scholarship was approved!</strong></p>
          <small>For further information, contact Mrs. Horse to help you.</small>
        </div> */}
      </aside>
    </div>
  );
}
