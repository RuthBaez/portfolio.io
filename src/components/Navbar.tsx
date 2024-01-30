import ThemeToggle from "./ThemeToggleButton";

export default function Navbar() {
  const logoImageUrl = "https://res.cloudinary.com/de5c9p8wb/image/upload/f_auto,q_auto/profile_ii08ki"; 

  return (
    <header className="w-full p-2 z-20 backdrop-blur-md">
      <div className="mx-auto max-w-3xl">
        <nav className="flex flex-col sm:flex-row items-center gap-3 text-base">
          <img src={logoImageUrl} alt="Logo" className="w-40 h-40 rounded-full" /> 
          <h1 className="font-semibold tracking-tighter p-2 text-3xl cursor-pointer sm:mt-0 lg:mt-2">
            Frontend Developer
          </h1>
          <div className="flex-1"></div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
