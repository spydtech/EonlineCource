import React from "react";
import { FaCaretRight } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div>
        <div className="pt-4">
          Mastering Full Stack Web Development involves becoming proficient in
          both the front-end and back-end aspects of web development. This
          includes understanding various programming languages, frameworks,
          databases, and deployment techniques. Here's a breakdown of what it
          entails:
        </div>
        <div className="py-2 gap-4">
          <div className="font-bold py-2"> Front-End Development</div>
          <div>
            <span className="font-bold">HTML/CSS:</span> Proficiency in at least
            one back-end programming language such as JavaScript (Node.js),
            Python (Django or Flask), Ruby (Ruby on Rails), or Java (Spring
            Boot).
          </div>
          <div>
            <span className="font-bold">JavaScript:</span> A deep understanding
            of JavaScript is crucial for creating interactive and dynamic web
            experiences. This includes modern frameworks/libraries like React,
            Angular, or Vue.js.
          </div>
          <div>
            <span className="font-bold">Responsive Design:</span> Ability to
            create websites that adapt and look good on various devices and
            screen sizes
          </div>
        </div>
        <div className="py-2 gap-4">
          <div className="font-bold py-2"> Back-End Development:</div>
          <div>
            <span className="font-bold">Programming Languages:</span> Mastery of
            HTML and CSS is fundamental for structuring web pages and styling
            them effectively. Proficiency in at least one back-end programming
            language such as JavaScript (Node.js), Python (Django or Flask),
            Ruby (Ruby on Rails), or Java (Spring Boot).
          </div>
          <div>
            <span className="font-bold">Database Management:</span>{" "}
            Understanding of database systems like MySQL, PostgreSQL, MongoDB,
            or SQLite, and how to interact with them using SQL or NoSQL queries.
          </div>
          <div>
            <span className="font-bold">API Development: </span> Ability to
            create websites that adapt and look good on various devices and
            screen sizes
          </div>
        </div>

        <div className="py-8">
          <hr className="border-t border-gray-500" />
        </div>
        <div className="text-2xl font-bold">What you'll learn</div>
        <div>
          <div className="flex justify-start items-center">
            <div>
              <FaCaretRight />
            </div>
            <div>Prepare for the Full Stack Web Development interview</div>
          </div>
          <div className="flex justify-start items-center">
            <div>
              <FaCaretRight />
            </div>
            <div>
              Learn about Full Stack Web Development including managing access,
              defining organizational structure/ policies, configuring network
              security, and analyzing logs.
            </div>
          </div>
          <div className="flex justify-start items-center">
            <div>
              <FaCaretRight />
            </div>
            <div>
              Learn the skills needed to be successful in a Full Stack Web
              Development role
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
