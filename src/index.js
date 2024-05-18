import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const skills = [
  { skill: 'HTML', level: 'advanced', color: '#75B9BE' },
  { skill: 'CSS', level: 'advanced', color: '#DEC5E3' },
  { skill: 'SASS/SCSS', level: 'advanced', color: '#BB7E5D' },
  { skill: 'Javascript', level: 'intermediate', color: '#7161EF' },
  { skill: 'jQuery', level: 'beginner', color: '#FF0054' },
  { skill: 'React', level: 'beginner', color: '#FF5400' },
  { skill: 'nbm', level: 'intermediate', color: '#FFBD00' },
  { skill: 'Git/Github', level: 'advanced', color: '#F2F79E' },
];
function APP() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="./avatar.jpg" alt="Mohamed Ismail" />;
}
function Intro() {
  return (
    <div>
      <h1>Mohamed Ismail</h1>
      <p>
        Freelance front-end web developer . When not coding or creating new
        awesome web application ,I like to read books , swimming and travel . Or
        just enjoy some quality time with my family .
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map(sk => (
        <Skill skill={sk.skill} level={sk.level} color={sk.color} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <APP />
  </React.StrictMode>
);
