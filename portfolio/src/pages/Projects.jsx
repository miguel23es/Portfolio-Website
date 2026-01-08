import { Link } from "react-router-dom";

function ProjectCard({ title, description, codeUrl, demoUrl, website }) {
  return (
    <article className="projectCard">
      <h3 className="projectTitle">{title}</h3>
      <p className="projectDesc">{description}</p>

      <div className="projectLinks">
        <a className="btn" href={codeUrl} target="_blank" rel="noreferrer">
          Code
        </a>

        <a className="btn primary" href={demoUrl} target="_blank" rel="noreferrer">
          Live Demo
        </a>

        {/* Only render Website if it exists */}
        {website && (
          <a className="btn third" href={website} target="_blank" rel="noreferrer">
            Website
          </a>
        )}
      </div>
    </article>
  );
}


export default function Projects() {
  const projects = [
    {
      title: "Task Manager",
      description: "A simple and efficient full-stack task manager web application that lets users create, update, and delete tasks in a clean and intuitive interface. Built with HTML, CSS, JavaScript, Node.js, Express, and MongoDB, this app supports user authentication and persistent task storage. It also integrates third-party APIs such as FullCalendar and Flatpickr to enhance scheduling and date management. Perfect for staying organized and boosting productivity!",
      codeUrl: "https://github.com/miguel23es/Task-Manager-App",
      demoUrl: "https://YOUR_LIVE_DEMO_1",
      website: "https://Miluz.onrender.com",
    },
    {
      title: "AI Ad Analyzer",
      description: "AI Ad Analyzer is a full-stack web application that evaluates the effectiveness of digital advertisements using OCR text extraction and the OpenAI API. Users upload ad images, which are processed with OCR to detect text content. The extracted data is then analyzed by AI to generate performance insights, improvement suggestions, and optimized ad copy. The system provides scoring, feedback, and actionable recommendations to help marketers improve ad quality and conversion potential.",
      codeUrl: "https://github.com/miguel23es/AI-Ad-Analyzer",
      demoUrl: "https://YOUR_LIVE_DEMO_2",
      website:"google.com",
    },
    {
      title: "E-commerce Website",
      description: "An e-commerce website for clothing, leveraging HTML, CSS, and JavaScript for the frontend. The checkout process is powered by Node.js and integrated with the Stripe API to handle secure payments.",
      codeUrl: "https://github.com/miguel23es/E-commerce-Website",
      demoUrl: "https://YOUR_LIVE_DEMO_3",
     website:"google.com",
    },
    {
      title: "Tonguefu Videogame",
      description: "3D platformer game using Unity and C#, featuring a frog protagonist that navigates through various levels to reach the top of a tree while battling different enemies.",
      codeUrl: "https://github.com/miguel23es/Tonguefu",
      demoUrl: "https://YOUR_LIVE_DEMO_4", // if no live demo, you can link to a video or repo
    },
  ];

  return (
    <main className="page pageTop">
      <header className="projectsHeader">
        <div>
          <h1 className="name">Projects</h1>
          <p className="tagline">Code + live demos. Click through.</p>
        </div>

        <Link className="backbtn" to="/">
          ← Back
        </Link>
      </header>

      <section className="projectsGrid">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </section>
    </main>
  );
}
