import { useState, useCallback, createContext } from "react"
import Header from "./Header"

export const MyContext = createContext()

const Layout = ({ children }) => {
  const [page, setPage] = useState("DRINK")

  const handleCategory = (category) => {
    return setPage(category)
  }
  return (
    <main>
      <Header handleCategory={handleCategory} />
      <MyContext.Provider value={page}>{children}</MyContext.Provider>
    </main>
  )
}

export default Layout
