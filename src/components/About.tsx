
export default function About() {

  return (
    <section className="relative pt-10 flex justify-center items-center">
        <div className="text-4xl font-medium text-center mb-20">
        Sobre mi:
        </div>
      <div className="z-10 text-justify px-8 drop-shadow-lg shadow-black">
        
        <div className="mt-3 max-w-xl mb-6 font-bold text-xl">
          <p>
            ¡Hola, soy{" "}
            <span className="text-purple-500 animate-underline"> <a href="https://www.linkedin.com/in/ruth-b%C3%A1ez/">
            Ruth Báez
            </a>
             
            </span>
            !.  He adquirido experiencia en metodologías ágiles. Habilidades para formar parte de equipos interdisciplinarios de investigación con capacidad de resolver problemas complejos de diferentes áreas del conocimiento.
          </p>
          </div>  
          <div className="mt-10 flex justify-end mb-10">
            <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                Disponible para trabajar
            </span>
            </div>
          </div>
    </section>
  );
}
