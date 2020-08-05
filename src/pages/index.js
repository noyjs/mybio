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
        title="B.Sc. in Computer Science"
        desc="The College of Management Academic Studies, GPA: 92"
      />
    </Section>
    <Section id="experience" title="Experience">
      <Link
        title="CEVA"
        link="https://www.ceva-dsp.com/"
        desc="Software and Automation Developer, July 2020 - Present"
      />
      <p className={classes.desc}>- Developed some basic React web applications that display our failures and results. Based on Ant Design on frontend, REST/GraphQL and Node.js using “<a className={classes.linkText} href={"https://github.com/goldbergyoni/nodebestpractices"}>Best Practices</a>”.</p>
      <p className={classes.desc}>- Implemented from scratch the Jython API that is used for IDE scripting in order to test our IDE automatically and expose bugs as quickly as possible.</p>
      <p className={classes.desc}>- Debugged test failures across various platforms (Red Hat, Ubuntu and Windows) and repaired complex software bugs.</p>
      <p className={classes.desc}>- Initiated independently Python scripting to improve efficiencies of CEVA's main product. It revealed plenty of performance slowdowns and saved us a lot of development time.</p>
    </Section>
    <Section id="projects" title="Projects">
      <Link
        title="Goalaso Store"
        link="http://www.goalaso.store/"
        desc="Ecommerce store based on CSS3 (Grid and Flexbox), Material-UI, React, Redux with action creators and React Hooks on client, Node.js with Express, Bcrypt, authorization and JWT authentication on server and AWS with EC2 and Route 53. Tested by Mocha, Chai and SinonJS."
      />
      <Link
        title="Notes Application"
        link="https://noyag.herokuapp.com/"
        desc="Built on top of React frontend, Node.js backend (with JWT authentication) and MongoDB database."
      />
    </Section>
    <Section id="skills" title="Skills">
      <Link
        title="Languages & Frameworks"
        desc="JavaScript (ES6+), React, Node.js, Express.js, TypeScript"
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
