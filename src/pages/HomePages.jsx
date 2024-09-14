import { Header, Main, Footer } from "../layout";
import {
  SectionComingSon,
  SectionNews,
  SectionNotice,
  SectionAccessories,
  SectionAdvertising,
  
 
 
} from "../components";
const HomePages = () => {
  return (
    <>
      <div className="h-screen">
        <Header />
      </div>
    
        <SectionComingSon />
        <SectionNews />
        <SectionAdvertising />
        <SectionAccessories />
        <SectionNotice />

      
      <Footer />
    </>
  );
};

export default HomePages;
