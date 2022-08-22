import React, { useEffect, useState } from 'react'

const Popular = () => {

  const [popular, setPopular] = useState([])
  useEffect(() => {
      popularRecipe();
  }, [])

  const popularRecipe = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await res.json();
    setPopular(data.recipes)
  }

  return (
    <>
      {popular.map((recipe) => (
          <div>{recipe.title}</div>
      ))}
    </>
  )
}

export default Popular