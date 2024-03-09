import { BookCover } from "@/components/BookCover";
import { Right } from "@/components/Right";
import { Left } from "@/components/Left";
import { recursive } from "@/app/layout";

export default function Home() {
  return (
    <div className="wrapper">
      <BookCover />
      <div className={`book ${recursive.className}`}>
        <Left />
        <Right />
      </div>
    </div>
  );
}
