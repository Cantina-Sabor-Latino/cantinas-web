import Header from "./components/Header";
import Nav from "./components/Nav";
import BranchCard from "./components/BranchCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Nav />
      <BranchCard />
      <Footer />
    </main>
  );
}