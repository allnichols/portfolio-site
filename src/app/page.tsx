import Container from "./ui/Container";
import { signika, poppins, oxygen } from "./ui/fonts";

export default function Home() {
  return (
    <Container>
      <main className="pt-[4rem]">
        <section>
          <div>
            <h2>Hello, I'm</h2>
            <h1
              className={`${poppins.className} font-semibold text-[64px] leading-15`}
            >
              Max Nichols
            </h1>
            <h2
              className={`${signika.className} font-medium text-[24px] mt-[6px]`}
            >
              Front End Engineer
            </h2>
            <p
              className={`${oxygen.className} font-medium text-[16px] mt-[16px]`}
            >
              I am a front-end engineer with a passion for building beautiful
              and functional user interfaces. I have experience with React,
              Next.js, and Tailwind CSS.
            </p>
            <button className="mt-[24px] bg-blue-500 text-white font-semibold py-2 px-4 rounded flex items-center gap-[8px]">
              Download Resume{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </button>
          </div>
        </section>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer> */}
    </Container>
  );
}
