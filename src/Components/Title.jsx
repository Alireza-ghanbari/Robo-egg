import robotHead from "../assets/robot-head.png";

export default function Title() {
  return (
    <div className="flex items-center justify-center gap-2">
      <img src={robotHead} className="h-14 -translate-y-1" />
      <h1 className="text-5xl font-extrabold">!ROBO Egg</h1>
    </div>
  );
}
