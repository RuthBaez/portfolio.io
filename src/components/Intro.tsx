import SocialIcons from "./SocialIcons";

export default function Intro() {

  return (
    <section className="relative pt-10 flex justify-center items-center">
      <div className="z-10 text-center px-8 drop-shadow-lg shadow-black">
        <div className="text-4xl font-medium">
        ¡Bienvenido/a a: Mi mundo digital!{" "}
        </div>
        <div className="mt-3 max-w-xl mb-6 font-bold text-xl">
          <p>
            ¡Hola, soy{" "}
            <span className="text-purple-500 animate-underline"> <a href="https://www.linkedin.com/in/ruth-b%C3%A1ez/">
            Ruth Báez
            </a>
             
            </span>
            !
          </p>
          <p>
          Desarrolladora con más de 3 años de experiencia en el fascinante mundo de la creación web. Apasionada a la tecnología.
          </p>
        </div>
        <SocialIcons
        linkedinLink="https://www.linkedin.com/in/ruth-b%C3%A1ez/"
        githubLink="https://github.com/RuthBaez"
        gmailLink="mailto:baezruth.m@gmail.com"
        googleDeveloperLink="https://g.dev/ruthbaezdeveloper"
      />
      </div>
    </section>
  );
}
