import React from 'react'
import './About.css'
import pro from '../../assets/pro.png'
const About = () => {
  return (
    <div id='about' className="about">
      <div className="title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={pro} alt="" className="iimm" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m Pratyush Basak, a Computer Science Engineering student at the
              University of Engineering and Management, Kolkata, and a
              passionate Full-Stack Web Developer dedicated to transforming
              ideas into seamless digital experiences. With a strong grasp of
              modern web technologies, I specialize in building responsive,
              scalable, and elegant applications. From designing engaging
              front-end interfaces to developing robust back-end systems, I
              enjoy working across the full stack to bring projects to life with
              both creativity and precision.
            </p>
            <p>
              Beyond coding, I see development as a way to solve real-world
              problems and create meaningful impact. I’m always exploring new
              technologies, refining my skills, and pushing creative boundaries
              to deliver work that combines innovation with reliability. Whether
              it’s collaborating on a team project or developing solo, I strive
              to write efficient code, design user-friendly experiences, and
              deliver solutions that leave a lasting impression.
            </p>
          </div>
          <div className="skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>NODE & EXPRESS JS</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>6+</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <div className="about-achievement">
          <h1>3+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievement">
          <h1>2+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About