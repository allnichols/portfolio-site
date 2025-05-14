import Container from "@/app/ui/Container";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const Projects: Project[] = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    link: "https://example.com/project1",
    image: "https://fakeimg.pl/300x200",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    link: "https://example.com/project2",
    image: "https://fakeimg.pl/300x200",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    link: "https://example.com/project3",
    image: "https://fakeimg.pl/300x200",
  },
];
export default function Page() {
  return (
    <Container>
      <h2>Projects</h2>
      <div className="hero rounded-lg bg-gray-50">
        <div className="hero-content text-left">
          <div>
            {Projects.map((project) => (
              <div key={project.title} className="mb-4 p-4 shadow-xs">
                <div>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-gray-500">{project.description}</p>
                </div>

                <div className="flex items-center gap-4 mb-2 mt-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={250}
                    height={200}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
