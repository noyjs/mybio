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
    <SEO title="Noy Agasi" />
    <Section id="about" title="About Me">
      <p>
        During the past few months I have been specializing in full-stack development
        and some time along the way I fell in love with JavaScript and the web.
      </p>
      <p>
        I want to help people by building meaningful apps.
        I enjoy developing in the full stack, building beautiful things from nothingness, that are a delight to use.
      </p>
    </Section>
    <Section id="education" title="Education">
      <Link
        title="B.Sc. in Computer Science, GPA: 92"
        desc="The College of Management Academic Studies, 2015 - 2018"
      />
    </Section>
    <Section id="experience" title="Experience">
      <Link
        title="CEVA"
        link="https://www.ceva-dsp.com/"
        desc="Software and Automation Developer, 2018 - Present"
      />
      <p className={classes.desc}>●	Developed some basic React web applications that used by our all department. Based on Ant Design on frontend, REST/GraphQL and Node.js using “<a className={classes.linkText} href={"https://github.com/goldbergyoni/nodebestpractices"}>Best Practices</a>”.</p>
      <p className={classes.desc}>●	Implemented from scratch our IDE scripting API that led to almost maximum test coverage and saved 120% of daily working time for 4 automation engineers.</p>
      <p className={classes.desc}>●	Built test automation that found significant bugs automatically before releases and helped us fixing complex bugs efficiently and quickly.</p>
      <p className={classes.desc}>●	Initiated independently Python scripts to improve efficiencies of CEVA's main product. It revealed plenty of performance slowdowns and saved us a lot of development time.</p>
    </Section>
    <Section id="projects" title="Projects">
      <Link
        title="Goalaso Store"
        link="http://www.goalaso.store/"
        desc="React.js, Redux, Node.js, Express.js, EC2 (AWS)"
      />
      <p className={classes.desc}>●	Created an Ecommerce store based on a Node+Express back-end and hosted on AWS EC2.</p>
      <p className={classes.desc}>●	Utilized Bcrypt and JWT Authentication for secure password creation and encryption.</p>
      <p className={classes.desc}>●	Authored powerful unit tests with with Mocha, Chai, and SinonJS to ensure strong project release.</p>
      <p className={classes.desc}>●	Constructed a React and Material-UI front-end, paired with CSS Grid and Flexbox to incorporate responsive and dynamic webapges.</p>
      
      <Link
        title="Notes Application"
        link="https://noyag.herokuapp.com/"
        desc="React.js, Node.js, MongoDB, REST API, Heroku"
      />
      <p className={classes.desc}>●	Developed a Node.js full-stack application with authentication that offers note-taking functionality for online users.</p>
      <p className={classes.desc}>●	Wrote and authored theReact front-end, following best practices for user experience.</p>
      <p className={classes.desc}>●	Constructed a MongoDB NoSQL database and hosted on Heroku PaaS to store users and notes.</p>
      
    </Section>
    <Section id="skills" title="Skills">
      <Link
        title="Languages & Frameworks"
        desc="JavaScript (ES6+), React, Node.js, Express.js, Redux"
      />
      <Link title="Databases" desc="MongoDB, MySQL" />
      <Link
        title="Other"
        desc="SOLID, OOP, Git, TFS, EC2"
      />
    </Section>
  </Layout>
);

export default IndexPage;
