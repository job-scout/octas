import BookNowCTA from "@/components/common/BookNowCTA";
import GetInTouch from "@/components/common/GetInTouch";
import HomeCarousel from "@/components/HomePage/HomeCarousel";
import Partners from "@/components/HomePage/Partners";
import WhatsOctor from "@/components/HomePage/WhatsOctor";


export default function Home() {
  return (
   <div className="overflow-hidden">
      <main>
        <div id="home-carousel">
						<HomeCarousel />
					</div>
        
        <Partners />
        <WhatsOctor/>
        <BookNowCTA/>

        <GetInTouch />
        
      </main>
      </div>
  );
}
