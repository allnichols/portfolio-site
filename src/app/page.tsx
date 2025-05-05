import Container from "./ui/Container";
import { signika, poppins, oxygen } from "./ui/fonts";

export default function Home() {
  return (
    <Container>
      <header>
        <div>
          <h1 className={`${poppins.className} font-semibold text-[38px]`}>
            Max Nichols
          </h1>
          <h2 className={`${signika.className} font-medium text-[24px]`}>
            Front End Engineer
          </h2>
          <p
            className={`${oxygen.className} font-medium text-[16px] mt-[16px]`}
          >
            I am a front-end engineer with a passion for building beautiful and
            functional user interfaces. I have experience with React, Next.js,
            and Tailwind CSS.
          </p>
        </div>
      </header>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </Container>
  );
}
