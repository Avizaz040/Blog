import {useContext} from 'react'
import SubscribeSection from "../Components/SubscribeSection";
import FeaturedSection from "../Components/FeaturedSection";
import TrendingPost from "../Components/TrendingPost";
import Catagories from "../Components/Catagories";
import NewsletterReminder from "../Components/NewsletterReminder";
import Footer from "../Components/Footer";
import { ThemeContext } from "../Context-Api/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    
    <div className={`min-h-screen  px-4 lg:px-[6rem] flex flex-col justify-center items-center gap-4 pt-8 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <SubscribeSection />
      <FeaturedSection />
      <TrendingPost />
      <Catagories />
      <NewsletterReminder />
      <Footer />
    </div>
    
  );
}

export default Home;
