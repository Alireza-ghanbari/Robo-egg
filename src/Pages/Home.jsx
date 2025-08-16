import { useState } from "react";
import RandomBoxes from "../Components/GiftPicker";
import CodeChecker from "../Components/CodeChecker";
import Score from "../Components/Score";
import Start from "../Components/Start";

export default function Home() {
  const [page, setPage] = useState("start");
  const [code, setCode] = useState("");

  const handlePage = (e) => {
    setPage(e);
  };

  const handleCode = (e) => {
    setCode(e);
  };

  return (
    <div>
      {page == "random" ? (
        <RandomBoxes
          handlePage={handlePage}
          handleCode={handleCode}
          code={code}
        />
      ) : page == "codeChecker" ? (
        <CodeChecker code={code} handlePage={handlePage} />
      ) : page == "score" ? (
        <Score handlePage={handlePage} />
      ) : <Start handlePage={handlePage} />}
    </div>
  );
}
