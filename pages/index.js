import BookNowCTA from "@/components/BookNowCTA";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import WhatsOctor from "@/components/WhatsOctor";

export default function Home() {
  return (
   <div className="overflow-hidden">
      <main>
        <Header />
        
        <Partners />
        <WhatsOctor/>
        <BookNowCTA/>

        <GetInTouch />
        
      </main>
      </div>
  );
}
