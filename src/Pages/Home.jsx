import { useState } from "react";
import RandomBoxes from "../Components/GiftPicker";

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
        "codeChecker"
      ) : (
        "else"
      )}
    </div>
  );
}
