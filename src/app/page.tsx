import { BookCover } from "@/components/BookCover";
import { FlippedContent } from "@/components/FlippedContent";
import { Preface } from "@/components/Preface";
import { recursive } from "@/app/layout";

export default function Home() {
  return (
    <div className="wrapper">
      <BookCover />
      <div className={`book ${recursive.className}`}>
        <Preface />
        <FlippedContent />
      </div>
    </div>
  );
}
