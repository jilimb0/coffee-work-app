const pagesData = [
  { id: 1, title: "Coffee", category: "DRINK" },
  { id: 2, title: "Desserts", category: "DESSERT" },
  { id: 3, title: "Food", category: "FOOD" },
  // { id: 4, title: "About", category: "about" },
]

const Navigation = ({ handleCategory }) => {
  return (
    <nav>
      {pagesData.map(({ id, title, category }) => {
        return (
          <li key={id} onClick={() => handleCategory(category)}>
            {title}
          </li>
        )
      })}
    </nav>
  )
}

export default Navigation
