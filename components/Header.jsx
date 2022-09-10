import Image from "next/image"
import Navigation from "./Navigation"
import Basket from "./Basket"
import logo from "../public/icon.webp"

const Header = ({ handleCategory }) => {
  return (
    <header>
      <Image src={logo} width={30} height={30} alt={"logo"} />
      <Navigation handleCategory={handleCategory} />
      <Basket />
    </header>
  )
}

export default Header
