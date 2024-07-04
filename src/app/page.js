import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Profile from "@/components/Profile/Profile";
import Contact from "@/components/Contact/Contact";
import MiddleContent from "@/components/middleContent/MiddleContent";
import Footer from "@/components/Footer/Footer";
import HeaderMobile from "@/components/HeaderMobile/HeaderMobile";
import TopButton from "@/components/TopButton/TopButton";

export default function Home() {
  return (
    <main>
      <Header />
      <HeaderMobile />
      <Profile />
      <MiddleContent />
      <Contact />
      <TopButton />
      <Footer />
    </main>
  );
}
