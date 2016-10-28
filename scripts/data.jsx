import React from "react";

//Data model for the about section of the website
var about = {
  id: "about",
  title: "About Me",
  description: 
  <div>
    <h2>Ray Y Han</h2>
    <h3>Software Engineer</h3>
    <p>
    I am a recently graduated computer science major with the professional goal of a
    software engineering position. I have had excellent academic record and some professional
    experice. I have done several projects for the reasons of academic, professional and
    personal interest. I believe these personal properties of mine will make me a great
    candidate for a software engineering position:
    </p>
    <ul>
      <li>
        <b>Logical</b>
        <p>
        I have a very logical mindset that enables me be good at modeling a problem into
        code and produce necessary steps to reach a solution.
        </p>
      </li>
      <li>
        <b>Enthusiastic</b>
        <p>
        When I run into a difficult challenge, I try really hard to come up with a solution
        not because I have to, but because I really want to. Sometime a mental road block
        would keep me sleepless and other times an eruka moment would wake me from the
        deepest slumber.
        </p>
      </li>
      <li>
        <b>Deadline Driven</b>
        <p>
        Deadline is my religious. If a due date is set, I would exert all my might to meet it.
        During my years in school, I turned in all the assignments on time and met all the
        project deadlines.
        </p>
      </li>
      <li>
        <b>Flexible</b>
        <p>
        I have taken on many different roles in different groups for different projects. I was
        known for my ability to code when a coder was needed; I came up with many well received
        design ideas when the team already had strong coders; and I assumed a leadship role and
        took charge when a team was headless.
        </p>
      </li>
    </ul>
  </div>,
  image: "../images/about_me.png"
};

//Data model for the experience section of the website
var experience = {
  id: "experience",
  title: "Experience",
  image: "../images/jpl.png",
  description:
  <div>
  <h2>Software Engineering Intern</h2>
  <h3>National Aeronautics and Space Administration - Jet Propulsion Laboratory Jun, 2016 - Aug, 2016</h3>
  <p>
  Through the NASA DIRECT STEM program, I received a summer internship
  oppotunity at NASA - JPL. During the internship, I worked in a team
  of three on the <a href="#rasta">REST API Service Task Assessor</a>. My tasks within the
  team includes programming server-side logic in nodeJS and database
  CRUD operations in MongoDB. 
  </p>
  </div>
}

//Data model for the education section of the website
var education = {
  id: "education",
  title: "Education",
  description: 
  <div>
    <h2>California State University, Los Angeles</h2>
    <h3>Computer Science - 2016</h3>
    <ul>
      <li>Graduation honor: <b>Summa Cum Laude, 2016</b></li>
      <li>Competition winner: <b>Cal State LA Codeathon, 2015</b></li>
      <li>Scholarship: <b>NASA DIRECT STEM Research Scholarship, 2015 - 2016</b></li>
      <li>Other: <b>Dean's Honor, 2015 - 2016</b></li>
    </ul>
  </div>,
  image: "../images/codeathon.png"
};

var rasta = {
  id: "rasta",
  title: "RASTA",
  images: {
    type: "carousel",
    images: [
      "../images/rasta/rasta1.png",
      "../images/rasta/rasta2.png",
      "../images/rasta/rasta3.png",
      "../images/rasta/rasta4.png"
    ]
  },
  description:
    <div>
      <h2>REST API Service Task Assessor</h2>
      <h3>NASA - JPL, 2016</h3>
      <p>
        For my internship at JPL in summer 2016, my team was tasked with
        creating a web app to monitor and test large number of REST API
        Services. The services need to be tested are API calls currently
        used by NASA portals. Our app can parse the API calls out of the
        Apache logs of these portals, perform scheduled and manual tests
        of these API calls and notify system administrator in case of
        serive unavailablities. Our app is build on the MEAN stack with 
        NodeJS and ExpressJS handling the server, AngularJS handling the
        frontend and MongoDB managing the data. My tasks for the project
        was to program server-side logic in Node and CRUD operations in
        Mongo.
      </p>
    </div>
};

var heartAttack = {
  id: "heartAttack",
  title: "Heart Attack",
  images: {
    type: "animation",
    stop: "../images/heart_attack.png",
    play: "../images/heart_attack.gif"
  },
  description:
  <div>
    <h2>PyGame Prototype</h2>
    <h3>Codeathon, 2015</h3>
    <p>
      In fall 2105, I participated the Cal State LA, "Fight the Ladykiller",
      codeathon. The theme was to design and rapid prototype if possible an App
      that raises awareness of women's heart disease of women of the age group 18
      - 25. To cater the interest of this age group, the design of my group was a
      simple advanture game with embeded heart health messages. The prototype was
      retooled from a project I did the previous quarter. It was writtin in Python
      with the PyGame library.
    </p>
  </div>
};

var rayYHan = {
 id: "rayYHan",
 title: "This site",
 images: {
   type: "embeded",
   src: "../index.html"
 },
 description:
 <div>
  <h2>RayYHan.github.io</h2>
  <h3>Personal Portfolio, 2016</h3>
  <p>
  I am building this single page website for two purposes. One is to create a web based resmue and
  Portfolio to help me find a job. The other is that I want to use it as a test bed to learn React
  JS. I have heard a lot of praises about this framework but found it hard to learn something
  without actually applying it. I am only able to scratch the surface of the framework with this
  site and I like it a lot and hope to learn it in depth with a bigger, badder project in the
  future.
  </p>
 </div>
};

var projects = {
  id: "projects",
  title: "Projects",
  image: "../images/projects.png",
  description: 
  <div>
    <h2>Academic and Professional Projects</h2>
    <h3>Cal State LA, NASA JPL, 2015 - 2016</h3>
    <p>
    During my time at school and internship, I have completed several projects. Some project
    helped me learn different tools and technology while others taught me how to apply
    classroom theories in practice. Below is a short list of the more notable projects I
    worked on.
    </p>
  </div>,
  subsections: [rasta, heartAttack, rayYHan]
  //"I have worked on several projects for both academic and professional purposes"
};

var skills = {
  id: "skills",
  title: "Skills",
  image: "../images/skills.png",
  description:
  <div>
    <h2>Technical Skills</h2>
    <ul className="skills">
      <li>
        <b>NodeJS</b>
        <ul>
          <li>RASTA web app, NASA-JPL, 2016</li>
          <li>Angular/Node class, Cal State LA, 2015</li>
        </ul>
      </li>
      <li>
        <b>Python</b>
        <ul>
          <li>Data Science class, Cal State LA, 2016</li>
          <li>MMO Game class, Cal State LA, 2015</li>
          <li>Python/PyGame class, Cal State LA, 2015</li>
        </ul>
      </li>
      <li>
        <b>ReactJS</b>
        <ul>
          <li>Bulding this portfolio, 2016</li>
          <li>Codecademy tutorial, 2016</li>
        </ul>
      </li>
      <li>
        <b>C++</b>
        <ul>
          <li>NASA Swarmathon competition class, Cal State LA, 2015</li>
          <li>C++ class, Cal State LA, 2015</li>
          <li>One year worth of intro level programming class, Pasadena City College, 2014</li>
        </ul>
      </li>
      <li>
        <b>JAVA</b>
        <ul>
          <li>Data Science class, Cal State LA, 2016</li>
          <li>JSP web dev class, Cal State LA, 2015</li>
        </ul>
      </li>
    </ul>
    <p>
    I would consider the most valuable skill I gained in the past few years to be the
    ability to acquire new skills. Any piece of technology I now know may go out of
    favor any day. But the the ability to pick up whatever is relevent will never go
    out of fashion.
    </p>
  </div>
};

var findMe = {
  id: "findMe",
  title: "Find Me",
  description:
  <div className="find-me">
    <a href="https://www.linkedin.com/in/ray-han-a709ba61">
      <img className="icon" src="../images/find_me/linkedin.png" />
    </a>
    <a href="https://github.com/RayYHan">
      <img className="icon" src="../images/find_me/github.png" />
    </a>
    <a>
      <img className="icon" id="email-icon" src="../images/find_me/email.png" />
    </a>
  </div>
}

//Data model for the content of the website
var content = [about, experience, education, projects, skills, findMe];

export default content;
