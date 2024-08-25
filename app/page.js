import Image from "next/image";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Products from "./components/Products";
import Header2 from "./components/Header2";

export default function Home() {
  return (
    <>
    <NavBar/>
    <Header2/>
    <Header/>
    
    <div className=" flex gap-10">
      <SideBar/>
      <Products/>
    </div>
    <Footer/>
    </>
  );
}
