import React from 'react'
import CustomImages from './CustomImages'

const RecipeCard = ({recipe}) => {
  return (
    <div className='recipe-card'>
      <CustomImages src={recipe.image} paddingTop="65%"/>
      <div className="recipe-card-info">
        <img  className='author-img' src={process.env.PUBLIC_URL+recipe.authorImg} alt="my" />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat autem, dolor quibusdam dolorem neque dolorum? Ipsa enim libero maiores ut amet nostrum ad ab? Nisi omnis ducimus enim. Eaque.</p>
        <a href="#!" className="view-btn">View Recipe </a>
      </div>
    </div>
  )
}

export default RecipeCard
