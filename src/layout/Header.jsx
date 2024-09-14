import { Logo, Nav,  Search, ShoppingCart, Location,Authentication} from "../components";
const Header = () => {
  return (
   
    
      <header className=" m-auto   px-10  flex  justify-between items-center rounded-lg bg-[#1c232be9]  ">
        <Logo />
        <Nav />
        <div className="flex items-center justify-between gap-2 w-[450px]">
          <Search />
          <Authentication />
          <Location />
          <ShoppingCart />
        </div>
      
      </header>
   
  );
};

export default Header;
