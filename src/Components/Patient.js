import React from "react";
import "../style/patient.css";

const Patient = () => {
  return <div>
    <div className="container">
        <aside>
          <div className="top">
            <div className="close">
              <a href="#">
                <span className="material-icons">close</span>
              </a>
            </div>
          </div>
          <div className="sidebar">
            <a className="active" href="#">
              <span className="material-icons">dashboard</span>
              <h3>Dashboard</h3>
            </a>
            <a href="#">
              <span className="material-icons">settings</span>
              <h3>Settings</h3>
            </a>
            <a href="#">
              <span className="material-icons">notifications</span>
              <h3>Notifications</h3>
              <span className="message-count">5</span>
            </a>
            <a href="#">
              <span className="material-icons">history</span>
              <h3>History</h3>
            </a>
            <a className="logout" href="#">
              <span className="material-icons">logout</span>
              <h3>LogOut</h3>
            </a>
          </div>
        </aside>

        <main>
          <h1>Hi ! Rohan,</h1>
          <h1>Good evening</h1>
          <div className="searching">
            <div className="date">
              <input type="date" />
            </div>
            <div className="hospital">
              <input type="text" value="" placeholder="Search for doctors" />
            </div>
          </div>
          <div className="insights">
            <div className="heart-rate">
              <div className="icon">
                <span className="material-icons">health_and_safety</span>
              </div>
              <div className="right">
                <h1>80-bpm</h1>
                <h3>Heartrate</h3>
              </div>
            </div>
            <div className="glucose-level">
              <div className="icon">
                <span className="material-icons">health_and_safety</span>
              </div>
              <div className="right">
                <h1>60-70 mg/dL</h1>
                <h3>Glucose level</h3>
              </div>
            </div>
            <div className="blood-pressure">
              <div className="icon">
                <span className="material-icons">health_and_safety</span>
              </div>
              <div className="right">
                <h1>120/80 mmHg</h1>
                <h3>Blood Pressure</h3>
              </div>
            </div>
          </div>

          <h1>Recent treatments</h1>

          <div className="cards">
            <div className="card1">
              <h1>Dr. Sunil Sahoo</h1>
              <h3>Apollo Hospital, BGL</h3>
              <h3>18th March</h3>
              <div className="group">
                <span className="disease">Dental Checkup</span>
                <span className="material-icons">history</span>
              </div>
            </div>
            <div className="card2">
              <h1>Dr. Sunil Sahoo</h1>
              <h3>Apollo Hospital, BGL</h3>
              <h3>18th March</h3>
              <div className="group">
                <span className="disease">Dental Checkup</span>
                <span className="material-icons">history</span>
              </div>
            </div>
          </div>
        </main>

        <div className="right">
          <div className="top">
            <div className="noti">
              <span className="material-icons">notifications</span>
            </div>
            <div className="profile-photo">
              <img src="dp.svg" alt="" width="65px" height="65px" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default Patient;
