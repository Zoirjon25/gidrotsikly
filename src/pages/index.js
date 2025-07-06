import AboutPage from "@/components/AboutPage/AboutPage";
import ChosePage from "@/components/ChosePage/ChosePage";
import LoginPage from "@/components/LoginPage/LoginPage";
import ShoppingPage from "@/components/ShopingPage/ShoppingPage";
import ShoppingPage2 from "@/components/ShopingPage2/ShoppingPage2";
import TitlePage from "@/components/TitlePage/TitlePage";
import HeaderPage from "@/Home/HeaderPage";
import HeaderPage2 from "@/Home/HeaderPage2/HeaderPage2";
import HomePage from "@/Home/HomePage/HomePage";


export default function Home() {
  return ( <>
  <HeaderPage />
  {/*HeaderPAge2 */}
  <HeaderPage2 />
  {/*home page */}
  <HomePage />
  {/*chose page */}
  <ChosePage />
  {/*titlePage */}
  <TitlePage />
  {/*shopping page */}
  <ShoppingPage />
  {/*AboutPAge */}
  <AboutPage />
  {/*shopping page2 */}
  <ShoppingPage2 />
  {/*Login Page */}
  <LoginPage />
  </>
  );
}
