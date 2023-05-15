import React from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import Link from "../components/link";
import Section from "../components/section";
import SEO from "../components/seo";
import classes from "../components/link/link.module.css";

const IndexPage = () => (
  <Layout>
    <Header />
    <SEO title="Noy JS" />
    <Section id="about" title="About Me">
      <p>
        I turn coffee into code and problems into solutions. When I'm not busy creating amazing web experiences, you can find me exploring new places and trying new foods.
      </p>
      <p>
        I'm a JavaScript enthusiast, a performance fanatic and a web development knowledge seeker. Let's create something great together!
      </p>
    </Section>
    <Section id="experience" title="Experience">
      <Link
        title="Cylus"
        link="https://www.cylus.com/"
        desc="Full Stack Developer (Front-End oriented), February 2022 - November 2022"
      />
      <p className={classes.desc}>●	Using my proficiency in React and TypeScript, I spearheaded the development and delivery of pivotal features for our applications. I demonstrated problem-solving acumen by effectively resolving intricate bugs. I also actively participated in team discussions and offered support to other developers, fostering a collaborative work environment.</p>
      <p className={classes.desc}>●	I designed and implemented diverse components to enhance Cylus's web applications, using Redux for state management and React-Table for versatile tabular data representation. My tasks also included establishing testing libraries and functionalities, leveraging React-Query for fetching, caching, and updating asynchronous data and Cypress for end-to-end testing.</p>
      <p className={classes.desc}>●	In pursuit of performance optimization, I implemented pagination techniques and reduced unnecessary re-renders, contributing to a smoother user experience. By employing my knowledge of Docker and AWS, I integrated CI processes efficiently, using docker-compose for defining and running multi-container Docker applications and Socket.IO for enabling real-time bidirectional event-based communication. This effort ensured the seamless deployment of our applications on cloud services.</p>
      <br /><br />
      <Link
        title="StorrSoft"
        link="https://www.storrsoft.com/"
        desc="Full Stack Developer (Front-End oriented), September 2020 - January 2022"
      />
      <p className={classes.desc}>●	As the exclusive developer for the <a className={classes.linkTextInText} href={"https://www.servicesapp.com/?lang=he"}>Services App</a>, I leveraged my proficiency in React, JavaScript, and Electron to implement end-to-end features, successfully releasing versions across all supported platforms to tens of thousands of users. My efforts involved utilizing MongoDB for data management, Node.js for the backend, and CSS for designing the app's aesthetics.</p>
      <p className={classes.desc}>●	Employing a combination of MUI for UI components and MobX for state management, I developed, troubleshooted, designed, and deployed multiple fully-featured proof of concepts and web applications from scratch. Webpack was instrumental in module bundling, ensuring efficient and optimized builds for the projects.</p>
      <p className={classes.desc}>●	For existing applications, I made extensive upgrades, rectified numerous bugs, and enhanced features. This was a meticulous process involving code improvements in Python, data structure enhancements in MongoDB, and frontend refinements using CSS. The resulting enhancements significantly improved application performance and user experience.</p>
      <br /><br />
      <Link
        title="CEVA"
        link="https://www.ceva-dsp.com/"
        desc="Automation Developer, December 2018 - August 2020"
      />
      <p className={classes.desc}>●	I utilized my skills in Python, Java, and Jython to implement backend API routes. These were instrumental for IDE scripting, enabling automatic testing of CEVA's IDE. Through this process, bugs were promptly exposed and addressed. To manage the underlying data, SQL server was employed, while the entire operation was run on a Linux environment, ensuring seamless and efficient processes.</p>
      <p className={classes.desc}>●	I also built a sophisticated profiling tool using Python, effectively measuring and reporting the performance of CEVA’s software development tools. This proved crucial in uncovering performance slowdowns, which resulted in saving valuable testing days and preventing the release of inadequate versions. The data handling for this task was managed using SQL server, and the frontend was crafted using Angular for a responsive and user-friendly interface. The project involved creating POCs, Test Plans, and Design Reviews, which were managed with Makefiles and the development was further enhanced with C#.</p>
    </Section>
    <Section id="education" title="Education">
      <Link
        title="B.Sc. in Computer Science, GPA: 92"
        desc="The College of Management Academic Studies, 2015 - 2018"
      />
    </Section>
    <Section id="military" title="Military Service">
      <Link
        title="Infantry Corps, Israeli Defense Force"
        desc="Outstanding infantry soldier, 2011 - 2014"
      />
    </Section>
  </Layout>
);

export default IndexPage;
