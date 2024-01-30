import Title from "./Title";

export default function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/5e504171-a973-44a0-96c0-7cb5eea37c70"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contactame</Title>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            rows={10}
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />
          <button
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-violet-500 drop-shadow-md hover:from-purple-600 hover:to-violet-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
