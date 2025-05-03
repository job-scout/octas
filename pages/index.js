import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import Partners from "@/components/Partners";

export default function Home() {
  return (
   <div className="overflow-hidden">
      <main>
        <Header/>
        <Partners />
        <GetInTouch/>
      </main>
      </div>
  );
}
