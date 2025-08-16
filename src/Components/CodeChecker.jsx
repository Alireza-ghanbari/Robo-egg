import { useState } from "react";

export default function CodeChecker({ code,handlePage }) {
  const [userCode, setUserCode] = useState("");
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(null);
  const [questionData, setQuestionData] = useState(null);
  const [error, setError] = useState("");

const codeQuestions = [
  { question: "تعداد قاره‌های جهان چند است؟", answer: "7" },
  { question: "چند درجه در یک دایره کامل وجود دارد؟", answer: "360" },
  { question: "حاصل ضرب ۸ در ۷ چند است؟", answer: "56" },
  { question: "سال میلادی فعلی چیست؟", answer: "2025" },
  { question: "یک ساعت چند دقیقه دارد؟", answer: "60" },
  { question: "تعداد روزهای یک سال عادی چند است؟", answer: "365" },
  { question: "عدد پی تا دو رقم اعشار چند است؟", answer: "3.14" },
];

  const handleCheckCode = () => {
    if (userCode == code) {
      const randomNum = Math.floor(Math.random() * 8);
      setQuestionData(codeQuestions[randomNum]);
      setError("");
    } else {
      setError("کد وارد شده صحیح نیست");
      setQuestionData(null);
    }
  };

  const handleSubmitAnswer = () => {
    if (!questionData) return;
    const isCorrect =
      answer.trim().toLowerCase() === questionData.answer.trim().toLowerCase();
    setScore(isCorrect ? 1 : 0);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
      <h2 className="text-xl font-bold mb-4">بررسی کد</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          onChange={(e) => setUserCode(e.target.value)}
          onKeyUp={handleCheckCode}
          className="flex-1 border rounded-lg px-3 py-2"
          placeholder="کد خود را وارد کنید..."
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {questionData && (
        <div>
          <p className="mb-3 font-semibold text-lg">{questionData.question}</p>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mb-4"
            placeholder="پاسخ خود را وارد کنید..."
          />
          <button
            onClick={handleSubmitAnswer}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
          >
            ثبت پاسخ
          </button>
          {score !== null && (
            <div className="mt-4 text-lg font-bold text-center">
              {score === 1 ? (
                <span className="text-green-700"> درست جواب دادید!</span>
              ) : (
                <span className="text-red-500 ">پاسخ اشتباه بود</span>
              )}
            </div>
          )}
          {score === 1 && (
            <button onClick={()=>handlePage("score")} className="mt-4 px-6 py-2 bg-blue-600 transition-colors cursor-pointer disabled:cursor-default disabled:pointer-events-none text-white rounded-lg hover:bg-blue-700">
              نمایش امتیاز
            </button>
          )}
        </div>
      )}
    </div>
  );
}
