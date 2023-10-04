import Hero from "../components/home/Hero";
import FeaturedTournament from "../components/home/FeaturedTournament";
import FeaturedBlogs from "../components/home/FeaturedBlogs";

export default function Home() {
  return (
    <div className="bg-white">
      {/* <!-- Hero section --> */}
      <Hero></Hero>
      {/* <!-- Featured tournament --> */}
      <FeaturedTournament></FeaturedTournament>
      {/* <!-- Featured posts --> */}
      <FeaturedBlogs></FeaturedBlogs>
    </div>
  );
}
