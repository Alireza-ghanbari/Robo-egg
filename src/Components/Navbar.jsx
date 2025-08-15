import robot from "../assets/robot.png";
export default function Navbar() {
  return (
    <nav className="container py-4 px-8">
      <div className="w-full flex items-center justify-between bg-sky-700 rounded-2xl px-3 py-1">
        <div className="w-2/3 lg:w-1/2 xl:w-1/3 flex items-center justify-between text-amber-50 text-lg">
          <p className="bg-sky-700 py-2 px-4 rounded-full border-black/50 border shadow-xs shadow-black hover:bg-sky-600 transition-colors cursor-pointer">
            <span className="text-yellow-400 ml-1">ثبت نام</span>/
            <span className="text-orange-500 mr-1"> ورود</span>
          </p>
          <p className="cursor-pointer">خانه</p>
          <p className="cursor-pointer">درباره ما</p>
          <p className="cursor-pointer">تماس با ما</p>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="flex flex-col items-center justify-center font-bold text-xl">
            <span className="text-orange-400 -rotate-45 translate-y-2">
              ROBO
            </span>
            <span className="text-pink-600 -rotate-45 translate-x-4">
              Egg!
            </span>
          </h1>
          <img src={robot} className="w-16" />
        </div>
      </div>
    </nav>
  );
}
