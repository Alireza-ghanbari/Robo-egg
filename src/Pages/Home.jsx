import { useState } from "react";
import RandomBoxes from "../Components/GiftPicker";
import CodeChecker from "../Components/CodeChecker";
import Score from "../Components/Score";

export default function Home() {
  const [page, setPage] = useState("random");
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
      ) : "else"}
    </div>
  );
}
