import Image from "next/image"
import coffeeImg from "../public/coffee.webp"

import { useEffect, useState, useContext, createContext } from "react"
import { getItems } from "./services/api"

import { MyContext } from "../components/Layout"

const Home = () => {
  const [items, setItems] = useState([])
  const myContext = useContext(MyContext)

  useEffect(() => {
    getItems(10, 1, myContext).then((res) => {
      setItems([res.data])
      console.log(res.data)
    })
  }, [myContext])

  return (
    <div className="itemsContainer">
      {items[0]?.resources.map(
        ({ id, description, imageUrl, name, portion, portionUnit, price }) => {
          return (
            <div className="itemBlock" key={id}>
              <Image
                src={coffeeImg}
                width={200}
                height={200}
                alt={"logo"}
                id="image"
              />
              <span id="name">{name}</span>
              <span id="description">{description}</span>
              <span id="portion">{portion + portionUnit}</span>
              <span id="price">{price}₴</span>
            </div>
          )
        }
      )}
    </div>
  )
}

export default Home
