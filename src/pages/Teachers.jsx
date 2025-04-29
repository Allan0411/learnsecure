import React from 'react';
import './Teachers.css';
import tr1 from '../assets/tr1.jpg';
import tr2 from '../assets/tr2.jpg';
import tr3 from '../assets/tr3.jpg';
import tr4 from '../assets/tr4.jpg';
import tr5 from '../assets/tr5.jpg';
import tr6 from '../assets/tr6.jpg';

const filters = ["All Teachers", "Science", "History", "Art", "Mathematics", "Physics", "Chemistry", "Literature", "Information Technology", "Biology"];

const teachers = [
  {
    name: "Josh Homme",
    email: "j.homme@teacher.io",
    subjects: ["Science", "Chemistry"],
    tagColor: "#C1F7E3",
    photo: tr1
  },
  {
    name: "Jeanette Horse",
    email: "j.horse@teacher.io",
    subjects: ["Art", "History"],
    tagColor: "#F3D1F4",
    photo: tr2
  },
  {
    name: "Donatella Ruler",
    email: "d.ruler@teacher.io",
    subjects: ["Mathematics", "Physics"],
    tagColor: "#D6E8FC",
    photo: tr3
  },
  {
    name: "Steve Smith",
    email: "s.smith@teacher.io",
    subjects: ["English Literature", "French"],
    tagColor: "#EAD8F7",
    photo: tr4
  },
  {
    name: "Amina Saleh",
    email: "a.saleh@teacher.io",
    subjects: ["History", "Literature"],
    tagColor: "#FFEAB6",
    photo: tr5
  },
  {
    name: "Kenji Yamada",
    email: "k.yamada@teacher.io",
    subjects: ["Information Technology"],
    tagColor: "#D0F0FD",
    photo: tr6
  }
];

const Teachers = () => {
  return (
    <div className="teachers-container">
      <h1 className="teachers-title">Teachers</h1>
      <div className="filter-buttons">
        {filters.map(filter => (
          <button key={filter} className="filter-btn">
            {filter}
          </button>
        ))}
      </div>
      <div className="teachers-grid">
        {teachers.map((teacher) => (
          <div className="teacher-card" key={teacher.email}>
            <div className="teacher-tag" style={{ backgroundColor: teacher.tagColor }}>
              {teacher.subjects.join(', ')}
            </div>
            <img src={teacher.photo} alt={teacher.name} className="teacher-photo" />
            <h3 className="teacher-name">{teacher.name}</h3>
            <a href={`mailto:${teacher.email}`} className="teacher-email">{teacher.email}</a>
            <div className="teacher-icons">
              <span>📧</span>
              <span>📞</span>
              <span>⋯</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
