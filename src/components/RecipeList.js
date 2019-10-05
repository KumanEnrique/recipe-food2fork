import React from 'react'
import RecipeSearch from './RecipeSearch'
import Recipe from './Recipe'


class RecipeList extends React.Component{
    render(){
        return(
            <>
            <RecipeSearch handleInput={this.props.handleInput} handleSubmit={this.props.handleSubmit} value={this.props.value}></RecipeSearch>
            <div className="container my-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                        <h2 className="text-slanted">Recipe list</h2>
                    </div>
                </div>
                <div className="row">
                    {this.props.error?<h1 className="text-danger text-center">{this.props.error}</h1>:this.props.recipes.map(recipe=>{
                            return (
                                <Recipe key={recipe.recipe_id} recipe={recipe} handleDetails={()=>this.props.handleDetails(0,recipe.recipe_id)}></Recipe>
                            )
                        })}
                </div>
            </div>
            </>
        )
    }
}
export default RecipeList