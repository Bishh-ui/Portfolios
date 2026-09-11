import WorkImage from "./WorkImage";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./styles/Work.css";

gsap.registerPlugin(useGSAP);

export interface Project {
  title: string;
  category: string;
  tools: string;
  image: string;
  link?: string;
  video?: string;
}

const defaultProjects: Project[] = [
  {
    title: "Organizational AI",
    category: "Generative AI & LLMs",
    tools: "Python, PyTorch, RAG, Transformers, RL, Gradio",
    image: "/images/organizational-ai.webp",
    link: "https://github.com/Bishh-ui/Organizational_ai",
  },
  {
    title: "YouTube Data Pipeline",
    category: "Data Engineering",
    tools: "AWS (S3, Glue, Athena, Lambda), Python, QuickSight",
    image: "/images/youtube-pipeline.webp",
    link: "https://github.com/Bishh-ui/End_to_End-_Pipelining",
  },
  {
    title: "GitHub Analytics Pro",
    category: "Web App & Analytics",
    tools: "React, TypeScript, GitHub REST API, Chart.js",
    image: "/images/github-analyzer.webp",
    link: "https://github.com/Bishh-ui/Github_analyzer",
  },
  {
    title: "BishhQuest",
    category: "Full Stack & EdTech",
    tools: "PHP, MySQL, HTML5, CSS3, JavaScript",
    image: "/images/bishhquest.webp",
    link: "https://github.com/Bishh-ui/Bishhquest",
  },
  {
    title: "StarBoss Coffee",
    category: "Frontend & E-Commerce",
    tools: "React, Next.js, Interactive UI, Vercel",
    image: "/images/starboss-coffee.webp",
    link: "https://starboss-cafe.vercel.app/",
  },
  {
    title: "BAM BAM! Drinks",
    category: "Brand Web Experience",
    tools: "React, Modern UI/UX, Animations, Vercel",
    image: "/images/bambam-drinks.webp",
    link: "https://bam-bam-pearl.vercel.app/",
  },
];

const Work = () => {
  useGSAP(() => {
    // Check if screen is wide enough for horizontal scroll
    const isDesktop = window.innerWidth > 1024;

    if (!isDesktop) {
      // On mobile/tablet, don't apply horizontal scroll animation
      return;
    }

    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {defaultProjects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
                video={project.video}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
