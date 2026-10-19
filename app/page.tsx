import Header from './components/Header';
import Nav from './components/Nav';
import Hero from './components/Hero';
import BranchCard from './components/BranchCard';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <main style={{ backgroundColor: "#FAF3E3", minHeight: "100vh", padding: "1.5rem 1rem" }}>
  <div style={{ maxWidth: "900px", margin: "0 auto" }}></div>
      <Header />
      <Nav />
      <Hero />
      <BranchCard />
      <Footer />
      </div>
      
    
    </main>
  );
}