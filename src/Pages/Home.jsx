
import SubscribeSection from "../Components/SubscribeSection";
import FeaturedSection from "../Components/FeaturedSection";
import TrendingPost from "../Components/TrendingPost";
import Catagories from "../Components/Catagories";
import NewsletterReminder from "../Components/NewsletterReminder";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="min-h-screen  px-4 lg:px-[6rem] flex flex-col justify-center items-center gap-4 pt-8">
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
