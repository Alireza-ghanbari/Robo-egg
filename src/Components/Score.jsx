import Title from "./Title";

export default function Score({handlePage}) {
  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
        <Title />
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex w-full justify-between items-center text-xl font-semibold ">
          <h2>امتیاز شما : </h2>
          <span className="bg-amber-100 p-4 rounded-full text-2xl">47%</span>
        </div>
        <p className="text-xl">
          شما تا جاییزه بزرگ 53% فاصله دارید اگر میخواهید به جاییزه بزرگ یرسید
          میتوانید ادامه دهید.
        </p>
        <button onClick={()=>handlePage("start")} className="mt-4 px-6 py-2 text-xl bg-blue-600 transition-colors cursor-pointer text-white rounded-lg hover:bg-blue-700">
          ادامه میدم
        </button>
      </div>
    </div>
  );
}
