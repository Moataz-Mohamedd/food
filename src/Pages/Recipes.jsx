import React from 'react'
import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {
    const recipes = [
        {
            title: "chicken pan pizze",
            image: "/images/gallery/img_1.jpg",
            authorImg: "/images/top-chiefs/img_1.jpg"
        },
        {
            title: "chicken pan pizze",
            image: "/images/gallery/img_2.jpg",
            authorImg: "/images/top-chiefs/img_2.jpg"
        },
        {
            title: "chicken pan pizze",
            image: "/images/gallery/img_3.jpg",
            authorImg: "/images/top-chiefs/img_3.jpg"
        },
        {
            title: "chicken pan pizze",
            image: "/images/gallery/img_4.jpg",
            authorImg: "/images/top-chiefs/img_4.jpg"
        },
        {
            title: "chicken pan pizze",
            image: "/images/gallery/img_5.jpg",
            authorImg: "/images/top-chiefs/img_5.jpg"
        },
        {
            title: "chicken pan pizze",
            image: "/images/gallery/img_6.jpg",
            authorImg: "/images/top-chiefs/img_6.jpg"
        }
    ]
    return (
        <div>
            <PreviousSearches/>
            <div className="recipes-container">
                {
                    recipes.map((recipe,index)=>{
                        return(
                            <RecipeCard key={index} recipe={recipe}/>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Recipes
