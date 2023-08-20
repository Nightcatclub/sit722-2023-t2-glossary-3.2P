const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const terms = [
    {
      id: 1,
      name: "DevOps",
      description: "DevOps is a software development methodology.DevOps focuses on enabling close collaboration between development (Dev) and operations (Ops)",
      reference: "Microsoft. (2023). What Is DevOps? Learn.Microsoft. https://learn.microsoft.com/en-us/devops/what-is-devops",
    },
    {
      id: 2,
      name: "The Wall of Confusion",
      description: "The Wall of Confusion is the idea that different departments have different goals and work according to their own goals.",
      reference: "stephen , K. (2020). The Wall of Confusion. Levelup. https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26",
    },    {
      id: 3,
      name: "Microservices",
      description: "Microservices are an architecture for developing software. Connecting a variety of small, independent services together via APIs",
      reference: "Aws. (2020). What Is Microservices. Amazon. https://aws.amazon.com/microservices/",
    },    {
      id: 4,
      name: "API",
      description: "An API is a mechanism that allows two pieces of software to communicate with each other using an API.",
      reference: "Aws. (2020). What Is API. Amazon. https://aws.amazon.com/cn/what-is/api/",
    },    {
      id: 5,
      name: "Software development life cycle",
      description: "SDLC is a software development process.It is required to produce high quality software with high efficiency. And to meet delivery standards",
      reference: "synopsys. (2023). Software Development Life Cycle (SDLC). Synopsys. https://www.synopsys.com/glossary/what-is-sdlc.html",
    },    {
      id: 6,
      name: "Continuous integration",
      description: "continuous integration is an approach to the DevOps development process. It is when developers periodically commit code to a shared code base for automated testing. This method is used to find problems in the code and fix them.",
      reference: "Aws. (2023). What Is Continuous Integration? Amazon. https://aws.amazon.com/devops/continuous-integration/",
    },    {
      id: 7,
      name: "Continuous Delivery",
      description: "Continuous delivery is also an approach to development using DevOps. In this method, the system automatically deploys the code that passes the automated tests to a pre-release environment.",
      reference: "Aws. (2023). What Is Continuous Delivery? Amazon. https://aws.amazon.com/devops/continuous-delivery/",
    },    {
      id: 8,
      name: "Continuous Deployment",
      description: "Continuous deployment is a strategy in software development. When the software passes the automated tests it is not just deployed in a pre-production environment.Continuous deployment releases the code into the production environment. When the code passes the tests it is pushed directly to the users.",
      reference: "Ibm. (2023). What Is Continuous Deployment? IBM. https://www.ibm.com/topics/continuous-deployment",
    },    {
      id: 9,
      name: "Agile software development",
      description: "Agile software development is a development framework that promotes cross-departmental collaboration across multiple departments.",
      reference: "Wiki. (2023). Agile Software Development. WIKI. https://en.wikipedia.org/wiki/Agile_software_development",
    },    {
      id: 10,
      name: "version control",
      description: "version control is a tool that helps DevOps teams manage source code. Teams can fix bugs in a timely manner through version control. It helps them to reduce development time and increase the success rate of deployments",
      reference: "Bitbucket. (2023). What Is Version Control? Atlassian. https://www.atlassian.com/git/tutorials/what-is-version-control",
    },    {
      id: 11,
      name: "Deployment frequency",
      description: "Deployment frequency refers to the rate at which code changes are deployed to production environments. It is a metric that measures how often an application or service is deployed to production.",
      reference: "Opsera. (2023). How to Measure and Increase Deployment Frequency in Your DevOps Practice. Opsera. https://www.opsera.io/blog/what-is-deployment-frequency",
    },    {
      id: 12,
      name: "Lead time for changes",
      description: "One of the critical DevOps metrics to track is lead time for changes. Not to be confused with cycle time (discussed below), lead time for changes is the length of time between when a code change is committed to the trunk branch and when it is in a deployable state. For example, when code passes all necessary pre-release tests.",
      reference: "Hall, T. (2023). DevOps Metrics. Atlassian. https://www.atlassian.com/devops/frameworks/devops-metrics",
    },    {
      id: 13,
      name: "Mean time to recovery",
      description: "Mean time to recovery (MTTR) measures how long it takes to recover from a partial service interruption or total failure. This is an important metric to track, regardless of whether the interruption is the result of a recent deployment or an isolated system failure. ",
      reference: "Hall, T. (2023). DevOps Metrics. Atlassian. https://www.atlassian.com/devops/frameworks/devops-metrics",
    },    {
      id: 14,
      name: "Change failure rate",
      description: "The change failure rate is the percentage of code changes that require hot fixes or other remediation after production. This does not measure failures caught by testing and fixed before code is deployed.",
      reference: "Hall, T. (2023). DevOps Metrics. Atlassian. https://www.atlassian.com/devops/frameworks/devops-metrics",
    },    {
      id: 15,
      name: "Reliability",
      description: "Reliability differs from the other four performances in that it is an operational performance. Reliability is how well your services meet user expectations, such as availability and performance.",
      reference: "Debellis, D. (2022). 2022 Accelerate State of DevOps Report. DORA. Page 10.",
    },    {
      id: 16,
      name: "software delivery and operational (SDO) performance",
      description: "That means faster software delivery and time to market (the period of time from when the idea is born to the moment it can be accomplished).",
      reference: "Kodjamanova, D. (2023). 4 DevOps Metrics To Maximize Success. Mentormate. https://mentormate.com/blog/how-devops-metrics-pave-the-way-to-better-performance/",
    },    {
      id: 17,
      name: "Monolithic",
      description: "A monolithic architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming.",
      reference: "Harris, C. (2023). Microservices vs. Monolithic Architecture. Atlassian. https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith",
    },    {
      id: 18,
      name: "Service-oriented architecture (SOA)",
      description: "SOA is an architectural pattern in computer software design. In this type of application, components provide services to other components via a communications protocol, typically over a network. The principles of service-orientation are independent of any product, vendor, or technology. The full form of SOA is service-oriented architecture",
      reference: "Walker, A. (2023). SOA vs Microservices – Difference Between Them. Guru99. https://www.guru99.com/microservices-vs-soa.html",
    },    {
      id: 19,
      name: "Cloud Tools",
      description: "A cloud-based tool is a software that uses cloud application technology to centrally store data and offer up-to-date information to all users. The data is frequently stored on faraway servers, and the program is frequently accessed online or through an app.",
      reference: "Dutta, B. (2022). 10 Best Cloud-Based Tools in 2022. Analyticssteps. https://www.analyticssteps.com/blogs/best-cloud-based-tools",
    },
    {
      id: 20,
      name: "Productivity in Software Development",
      description: "Simply put, developer productivity is a measure of a team’s ability to efficiently ship high-quality code that delivers business value. Developer productivity should be both a qualitative and quantitative dataset. ",
      reference: "Pedro, T. (2022). What Is Developer Productivity and How to Measure It. Linearb. https://linearb.io/blog/developer-productivity",
    },
  ];

  res.render('index', { title: 'Sit 722 DevOps Glossary', terms: terms });
});

module.exports = router;
