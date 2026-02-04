import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="page">
      <section className="card">
        <img className="avatar" src="/me.jpg" alt="Miguel Espinosa" />

        <h1 className="name">Miguel Espinosa</h1>
        <p className="tagline">Software Engineer • Full-Stack </p>

        <div className="linksRow">
          <Link className="btn primary" to="/projects">
            Projects
          </Link>

          <a
            className="btn"
            href="/Miguel_Espinosa_Software_Engineer_Resume"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>

          <a className="btn" href="https://github.com/miguel23es" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a className="btn" href="https://www.linkedin.com/in/miguel-espinosa-cs" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
