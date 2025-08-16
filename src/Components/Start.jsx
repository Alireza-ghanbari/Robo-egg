import Title from "./Title";

export default function Start({ handlePage }) {
  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
      <Title />
      <div className="flex flex-col items-center justify-center space-y-4 mt-10">
        <p className="text-xl">
          سلام به سایت ما خوش اومدی اینجا میتونی شانستو امتحان کنی تا به جاییزه
          بزرگ برسی.
        </p>
        <p className="text-xl">میخوای شانستو امتحان کنی؟</p>
        <button
          onClick={() => handlePage("random")}
          className="mt-4 px-6 py-2 text-xl w-full bg-blue-600 transition-colors cursor-pointer text-white rounded-lg hover:bg-blue-700"
        >
          بزن بریم!
        </button>
      </div>
    </div>
  );
}
