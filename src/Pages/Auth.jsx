import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Components/Title";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email != null && password != null) {
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center px-4 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          <Title />
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">نام کاربری</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none"
              placeholder="نام کاربری خود را وارد کنید"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">رمز عبور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none"
              placeholder="رمز عبور"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="h-4 w-4" />
              مرا به خاطر بسپار
            </label>
            <a className="text-blue-600 text-sm hover:underline">
              فراموشی رمز عبور؟
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ورود
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          حساب ندارید؟{" "}
          <a className="text-blue-600 font-medium hover:underline">
            ثبت‌نام کنید
          </a>
        </p>
      </div>
    </div>
  );
}
