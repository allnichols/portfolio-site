import Container from "./ui/Container";
import { signika, poppins, oxygen } from "./ui/fonts";

export default function Home() {
  return (
    <Container>
      <main className="pt-[24px]">
        <section>
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
              I am a front-end engineer with a passion for building beautiful
              and functional user interfaces. I have experience with React,
              Next.js, and Tailwind CSS.
            </p>
          </div>
        </section>
        <section id="about" className="mt-[4rem]">
          <h2 className={`${signika.className} font-medium text-[24px]`}>
            About
          </h2>
          <p
            className={`${oxygen.className} font-medium text-[16px] mt-[16px]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique, urna at tincidunt vehicula, justo erat tincidunt eros,
            nec tincidunt sapien justo non nisi. Integer vel libero nec nulla
            facilisis tincidunt.
          </p>
          <p
            className={`${oxygen.className} font-medium text-[16px] mt-[16px]`}
          >
            Curabitur eget velit nec nulla fermentum tincidunt. Proin
            scelerisque, sapien nec tincidunt tincidunt, lorem ipsum tincidunt
            sapien, nec tincidunt sapien lorem nec sapien. Donec tincidunt
            tincidunt sapien nec tincidunt.
          </p>
          <p
            className={`${oxygen.className} font-medium text-[16px] mt-[16px]`}
          >
            Fusce tincidunt sapien nec tincidunt tincidunt. Sed tincidunt sapien
            nec tincidunt tincidunt. Integer tincidunt sapien nec tincidunt
            tincidunt. Vestibulum tincidunt sapien nec tincidunt tincidunt
            tincidunt tincidunt sapien.
          </p>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </Container>
  );
}
