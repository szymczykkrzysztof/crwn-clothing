import './directory.styles.scss'
import CategoryItem from "../category-item/category-item.component";
import React from "react";

const Directory=({categories}:any)=>{
    return (
        <div className="directory-container">
            {categories.map((category: { id?: any; title: string; imageUrl: string; }) => (
                <CategoryItem key={category.id} category={category}/>
            ))}


        </div>
    )
}
export default Directory;