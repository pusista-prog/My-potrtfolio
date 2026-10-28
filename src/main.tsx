import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import "./styles.css";

const email = "alisavkorsak@gmail.com";
const image = (name: string, ext = "svg") => `/images/${name}.${ext}`;
function Graphic({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <img className={className} src={image(name)} alt="" aria-hidden="true" />
  );
}
function WorkspaceIllustration() {
  return (
    <div className="workspace-art" aria-hidden="true">
      <div className="workspace-screen">
        <Graphic name="imgVector234257596" />
        <span />
      </div>
      <div className="workspace-base">
        <Graphic name="imgVector234257597" />
      </div>
      <Graphic name="workspace-cup" className="workspace-cup" />
    </div>
  );
}
function Sidebar() {
  return (
    <aside className="sidebar" aria-label="About Alisa">
      <div className="sidebar-top">
        <WorkspaceIllustration />
        <Graphic name="img3" className="cat" />
      </div>
      <div className="sidebar-body">
        <div>
          <img
            className="avatar"
            src={image("profile-alisa", "png")}
            alt="Alisa Korsak"
          />
          <h1>Hello, I'm Alisa</h1>
          <p className="bio">
            Digital &amp; web designer, creating websites, interfaces and visual
            brand communication. I bring together thoughtful UX, distinctive
            visual concepts, and motion to create cohesive digital experiences.
          </p>
        </div>
        <div className="sidebar-details">
          <dl>
            <div>
              <dt>experience</dt>
              <dd>5+ years</dd>
            </div>
            <div>
              <dt>location</dt>
              <dd>portugal</dd>
            </div>
          </dl>
          <a className="contact-button" href={`mailto:${email}`}>
            contact
          </a>
        </div>
      </div>
      <Graphic name="sidebar-notch-left" className="sidebar-notch sidebar-notch-left" />
      <Graphic name="sidebar-notch-right" className="sidebar-notch sidebar-notch-right" />
    </aside>
  );
}
const projects = [
  {
    title: "MATCH POINT",
    categories: ["#sports", "#tennis"],
    tags: ["website", "ui/ux", "branding"],
    layers: [{ name: "project-match-point", x: 0, y: 0, w: 466, h: 264 }],
  },
  {
    title: "NUYUT",
    categories: ["#tech"],
    tags: ["website", "ux/ui"],
    layers: [
      {
        name: "project-nuyut",
        x: 0,
        y: 0,
        w: 466,
        h: 264,
      },
    ],
  },
  {
    title: "SEOUL language camp",
    categories: ["#education", "#languages"],
    tags: ["website", "ui/ux", "branding"],
    layers: [{ name: "project-seoul-language-camp", x: 0, y: 0, w: 466, h: 264 }],
  },
  {
    title: "PERFECTION LAB",
    categories: ["#beauty"],
    tags: ["website", "ui/ux"],
    layers: [{ name: "project-perfection-lab", x: 0, y: 0, w: 466, h: 264 }],
  },
];
function SectionHeading({
  number,
  children,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <header className={`section-heading heading-${number}`}>
      <span className="section-number"><span>[</span><span className="section-digit">{number}</span><span>]</span></span>
      <h2>{children}</h2>
    </header>
  );
}
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const followPointer = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === "mouse") {
      setCursor({ x: event.clientX, y: event.clientY });
    }
  };
  return (
    <article
      className="project"
      tabIndex={0}
      aria-label={`${project.title} project preview`}
      onPointerEnter={followPointer}
      onPointerMove={followPointer}
      onPointerLeave={() => setCursor(null)}
    >
      <div className="project-picture">
        <div className="project-layers">
          {project.layers.map((layer) => (
            <img
              key={layer.name}
              src={image(layer.name, "png")}
              alt=""
              style={{ left: 0, top: 0, width: "100%", height: "100%" }}
            />
          ))}
        </div>
        <span className="learn-more">
          learn more
          <Graphic name="imgVector234257606" />
        </span>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-caption">
        <h3>{project.title}</h3>
        <div>
          {project.categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </div>
      {cursor &&
        createPortal(
          <span
            className="learn-more project-cursor"
            aria-hidden="true"
            style={{ left: cursor.x, top: cursor.y }}
          >
            learn more
            <Graphic name="imgVector234257606" />
          </span>,
          document.body,
        )}
    </article>
  );
}
function Projects() {
  return (
    <section id="projects" className="projects">
      <SectionHeading number={1}>
        Projects
        <br />I worked on
      </SectionHeading>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
function StrengthsIcon() {
  return (
    <div className="strengths-icon" aria-hidden="true">
      <Graphic name="imgUnion" className="bulb" />
      <span className="bulb-base" />
      <span className="bulb-bottom" />
      <Graphic name="imgVector234257621" className="bulb-detail" />
    </div>
  );
}
const skills = [
  {
    title: "Experience",
    description:
      "5+ years across agency, in-house, and freelance roles, designing for brands and products in healthcare, education, and cybersecurity.",
    icon: <Graphic name="imgExperienceIcon" />,
  },
  {
    title: "End-to-end design",
    description:
      "From structure and user flows to visual concepts, responsive layouts, component libraries, developer collaboration and design QA.",
    icon: <Graphic name="imgDesignIcon" />,
  },
  {
    title: "Strengths",
    description:
      "Thoughtful UX and strong visual craft, with purposeful motion planned from the earliest stages to guide attention, and clarify interactions.",
    icon: <StrengthsIcon />,
  },
];
function Skills() {
  return (
    <section id="skills" className="skills">
      <SectionHeading number={2}>what i bring</SectionHeading>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill" key={skill.title}>
            <div className="skill-icon">{skill.icon}</div>
            <div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
const facts = [
  ["tennis", "I play tennis"],
  ["running", "ran a halfmarathon"],
  ["cats", "cats’ biggest fan"],
  ["travel", "travelling enthusiast"],
  ["books", "organised a book club"],
  ["spotify", "can’t live without my spotify playlists"],
];
function About() {
  return (
    <section id="about" className="about">
      <SectionHeading number={3}>
        facts
        <br />
        About me
      </SectionHeading>
      <div className="facts">
        <figure className="portrait">
          <div>
            <img
              src={image("imgImg65611", "jpg")}
              alt="Alisa travelling in the mountains"
            />
          </div>
        </figure>
        {facts.map(([key, text]) => (
          <p className={`fact fact-${key}`} key={key}>
            <Graphic name="imgDecorativeDot" />
            <span>{text}</span>
          </p>
        ))}
      </div>
    </section>
  );
}
const portugalTime = new Intl.DateTimeFormat("en-US", {
  timeZone: "Europe/Lisbon",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});
const portugalOffset = new Intl.DateTimeFormat("en-US", {
  timeZone: "Europe/Lisbon",
  timeZoneName: "shortOffset",
});
function PortugalClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const refresh = () => setNow(new Date());
    const interval = setInterval(refresh, 1000);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);
  const offset =
    portugalOffset
      .formatToParts(now)
      .find((part) => part.type === "timeZoneName")?.value ?? "GMT";
  return (
    <time dateTime={now.toISOString()} aria-label="Current time in Portugal">
      portugal · {portugalTime.format(now)} {offset}
    </time>
  );
}
function Contact() {
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setMessage("Email copied");
    } catch {
      setMessage("Couldn’t copy — please select the email");
    }
    timer.current = setTimeout(() => setMessage(""), 2500);
  }
  return (
    <footer id="contact" className="contact">
      <div className="contact-intro">
        <p className="muted">get in touch</p>
        <h2>
          Let’s do good work
          <br />
          together
        </h2>
      </div>
      <div className="reach">
        <p className="muted">reach me</p>
        <button className="email" onClick={copyEmail}>
          <span className="animated-link">{email}</span>
          <Graphic name="imgCopy" />
        </button>
        <span className="copy-status" role="status">
          {message}
        </span>
        <a
          className="telegram animated-link"
          href="https://t.me/a_cheers"
          target="_blank"
          rel="noopener noreferrer"
        >
          telegram
          <Graphic name="imgExternalLinkIcon" />
        </a>
      </div>
      <div className="contact-illustration">
        <Graphic name="contact-illustration" />
      </div>
      <p className="copyright">© 2026 alisa korsak</p>
      <p className="location-time">
        <PortugalClock />
      </p>
      <p className="credit">Built with react</p>
    </footer>
  );
}
function App() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const updateScale = () => {
      // Keep the 1200px Figma composition; mobile awaits its own design.
      const scale = Math.max(root.clientWidth, 768) / 1200;
      root.style.setProperty("--page-scale", String(scale));
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(root);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--page-scale");
    };
  }, []);
  return (
    <div className="page">
      <Sidebar />
      <main>
        <nav aria-label="Main navigation">
          {["Projects", "Skills", "About", "Contact"].map((item) => (
            <a className="animated-link" key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
