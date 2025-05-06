import Container from "@/app/ui/Container";
import React from "react";

type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
  techUsed?: string[];
};

const Experiences = [
  {
    title: "Front End Engineer",
    company: "Acuity Inc",
    date: "Jan 2023 - Present",
    description: `Spearheaded front-end development for a secure file management app aiding criminal investigations, reducing cartel case timelines by 3–6 months. Built responsive UI with Storybook, GraphQL, and Apollo Client, collaborating with cross-functional teams in an agile environment.`,
    techUsed: [
      "React",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "Storybook",
      "Spring Boot",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Capgemini",
    date: "Jan 2022 - Dec 2022",
    description: `Built a serverless email notification system with Node.js and Amazon SES for scalable automation. 
    Improved the password reset experience and migrated a legacy Angular app to React, enhancing performance and maintainability.`,
    techUsed: [
      "React",
      "Node.js",
      "AWS",
      "Amazon SES",
      "Serverless",
      "TypeScript",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Industrial Info Resources",
    date: "Jun 2019 - Jan 2022",
    description: `Built internal tools to streamline updates to client-facing products. Independently developed a MERN-based CMS, empowering analysts to manage content and products efficiently.`,
    techUsed: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "MERN Stack",
      "TypeScript",
      "Java",
      "CSS",
    ],
  },
];

export default function Page() {
  return (
    <Container>
      <h2>Experience</h2>
      <div className="hero bg-gray-50 rounded-lg">
        <div className="hero-content text-left">
          <div>
            {Experiences.map((experience, index) => (
              <div key={index} className="mb-4 p-4 shadow-xs">
                <div>
                  <p>{experience.date}</p>
                </div>
                <div className="">
                  <h3 className="text-lg font-bold">
                    {experience.title}, {experience.company}
                  </h3>

                  <p className="text-gray-500">{experience.description}</p>
                  {/* {experience.description.map((desc: string, index: number) => (
                    <p key={index} className="text-gray-500">
                      {desc}
                    </p>
                  ))} */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {experience.techUsed?.map((tech, index) => (
                      <span
                        key={index}
                        className="badge badge-outline badge-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
