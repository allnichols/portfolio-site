import Container from "./ui/Container";
import { signika, poppins, oxygen } from "./ui/fonts";

export default function Home() {
  return (
    <Container>
      <main className="">
        <section>
          <div className="hero min-h-[90vh] bg-gray-50 rounded-lg">
            <div className="hero-content lg:w-[60%] text-center">
              <div>
                <h1
                  className={`${signika.className} text-[24px] lg:mb-5 lg:text-[42px]`}
                >
                  Hello, I'm Max
                </h1>
                <h1
                  className={`${poppins.className} font-bold text-[48px] leading-[56px] lg:text-[85px] lg:font-bold lg:mb-10`}
                >
                  Front End Engineer
                </h1>
                <h3
                  className={`${signika.className} text-lg font-medium mt-[16px] lg:text-[24px] lg:font-normal lg:leading-[36px] lg:mb-10`}
                >
                  I'm a front-end engineer with a passion for building beautiful
                  and functional user interfaces. I have experience with React,
                  Next.js, and Tailwind CSS.
                </h3>
                <div className="mt-[2rem]">
                  <button className="cursor-pointer btn btn-lg btn-primary mr-[2rem]">
                    Resume{" "}
                  </button>
                  <button className="cursor-pointer btn btn-lg btn-outline">
                    Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer> */}
    </Container>
  );
}
