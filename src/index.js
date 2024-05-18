import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

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
      <Skill skill="HTML" emoji="🎖" color="#75B9BE" />
      <Skill skill="CSS" emoji="🥇" color="#DEC5E3" />
      <Skill skill="SASS/SCSS" emoji="👍" color="#BB7E5D" />
      <Skill skill="Javascript" emoji="🥈" color="#7161EF" />
      <Skill skill="jQuery" emoji="🥉" color="#FF0054" />
      <Skill skill="React" emoji="🏆" color="#FF5400" />
      <Skill skill="nbm" emoji="💪" color="#FFBD00" />
      <Skill skill="Git/Github" emoji="🎉" color="#F2F79E" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <APP />
  </React.StrictMode>
);
