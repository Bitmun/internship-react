import React from "react";
import Block from "./Block";

const searchItemsList = [
  {
    title: "Spring Boot",
    desc: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
    img: "https://spring.io/img/projects/spring-boot.svg",
  },
  {
    title: "Spring Framework",
    desc: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
    img: "https://spring.io/img/projects/spring-framework.svg?v=2",
  },
  {
    title: "Spring Data",
    desc: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
    img: "https://spring.io/img/projects/spring-data.svg",
  },
  {
    title: "Spring Cloud Data Flow",
    desc: "Provides an orchestration service for composable data microservice applications on modern runtimes.",
    img: "https://spring.io/img/projects/spring-data-flow.svg",
  },
  {
    title: "Spring Cloud",
    desc: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
    img: "https://spring.io/img/projects/spring-cloud.svg",
  },
  {
    title: "Spring Security",
    desc: "Provides an orchestration service for composable data microservice applications on modern runtimes.",
    img: "https://spring.io/img/projects/spring-security.svg",
  },
];

function BlocksSection() {
  return (
    <div className="blocks-section">
      {searchItemsList.map((item) => (
        <Block title={item.title} desc={item.desc} img={item.img} />
      ))}
    </div>
  );
}

export default BlocksSection;
