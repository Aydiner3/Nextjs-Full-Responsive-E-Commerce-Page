import BrandCard from "./components/brandCard";
import CommentSeciton from "./components/commentSeciton";
import Header from "./components/header";
import HeroSection from "./components/hero";
import ShoeSection from "./components/shoeSection";
import Footer from "./components/footer";


export default function Home() {
  return (
    <main>
      <div className="bg-primary-black w-full h-[42px] text-white flex justify-center items-center">
        Free US shipping on order $80+
      </div>
      <div className="max-w-[1170px] px-0 flex flex-col mx-auto gap-8 md:gap-20">
        <Header />
        <HeroSection />
        <BrandCard />
        <ShoeSection />
        <CommentSeciton />
        
      </div>
    </main>
  );
}
