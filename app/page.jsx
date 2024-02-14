import HomesCategory from "./ui/data display/homes-category";
import Hero from "./ui/hero";
import Header from "./ui/layouts/header";
import { homesList } from "./lib/data/placeholder-data";
import Footer from "./ui/layouts/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <HomesCategory title="Recently added" items={homesList} />
      </main>
      <Footer />
    </div>
  );
}
