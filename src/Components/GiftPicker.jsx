import { useState } from "react";
import Title from "./Title";
import gift from "../assets/gift.png";

export default function RandomBoxes({ handleCode, code, handlePage }) {
  const [spinning, setSpinning] = useState(false);
  const [openedIndex, setOpenedIndex] = useState(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [OpenModal, setOpenModal] = useState(false);

  const boxes = Array(6).fill(null);

  const handleStart = () => {
    if (hasStarted) return;

    setOpenedIndex(null);
    handleCode("");
    setSpinning(true);

    setTimeout(() => {
      setHasStarted(true);
      setSpinning(false);
      const randomIndex = Math.floor(Math.random() * boxes.length);
      setOpenedIndex(randomIndex);
      handleCode(Math.floor(1000 + Math.random() * 9000));
    }, 4000);
  };

  return (
    <div className="w-full flex flex-col items-center gap-12 py-8 relative">
      <Title />
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {boxes.map((_, index) => (
          <div
            key={index}
            className={`w-28 h-28 flex items-center justify-center rounded-xl text-2xl font-bold transition-transform
              ${spinning && "animate-pulse"}`}
          >
            {openedIndex === index ? (
              <span className="relative">
                <img src={gift} alt="Gift" className="opacity-30" />
                <span
                  className="absolute inset-0 top-14 text-4xl cursor-pointer"
                  onClick={() => navigator.clipboard.writeText(code)}
                  title="Click to copy"
                >
                  {code}
                </span>
              </span>
            ) : (
              <img src={gift} alt="Gift" />
            )}
          </div>
        ))}
      </div>
      {!hasStarted ? (
        <button
          onClick={handleStart}
          className="px-6 py-2 bg-blue-600 transition-colors cursor-pointer disabled:cursor-default disabled:pointer-events-none text-white rounded-lg hover:bg-blue-700 disabled:opacity-80"
          disabled={spinning || hasStarted}
        >
          {spinning ? "در حال انتخاب..." : "شروع!"}
        </button>
      ) : (
        <button
          onClick={() => setOpenModal(true)}
          className="px-6 py-2 bg-blue-600 transition-colors cursor-pointer disabled:cursor-default disabled:pointer-events-none text-white rounded-lg hover:bg-blue-700"
        >
          برو به مرحله بعد
        </button>
      )}
      {/* modal */}
      {OpenModal && (
        <div className="absolute flex items-center justify-center flex-col bg-white -bottom-10 drop-shadow-black shadow-xl border-2 border-black/10 px-6 py-4 rounded-3xl">
          <h3 className="text-2xl font-semibold mb-6">کد را یادداشت کردید؟</h3>
          <div className="flex items-center gap-4 text-amber-50 text-lg">
            <button
              onClick={() => handlePage("codeChecker")}
              className="px-5 py-2 bg-blue-600 rounded-2xl cursor-pointer hover:bg-blue-700 transition-colors"
            >
              آره, یادداشت کردم
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className="px-5 py-2 bg-rose-400 rounded-2xl cursor-pointer hover:bg-rose-500 transition-colors"
            >
              نه, فراموش کردم
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
