import React from 'react'

// import {recipe1} from '../tempRecipe1'
import {recipem} from '../tempRecipem'

// const key_copiado_del_video = "b6fb5d86fb9419eeec1129a9e77a1ada"
import {keys} from '../key'

const {key2} = keys

class RecipeDetails extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            recipe: recipem,
            url: `${key2}rId=${this.props.id}`
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch(this.state.url)
            const resultado = await response.json()
            this.setState({
                recipe: resultado.recipe
            })
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        const {
            title,
            image_url,
            source_url,
            publisher_url,
            publisher,
            ingredients
        } = this.state.recipe
        const {handleIndex} =this.props
        if (!ingredients){
            return(
                <>
                <div className="container">
                    <div className="row mt-3">
                        <button type="button" className="btn btn-warning" onClick={()=>handleIndex(1)}>Back to the Recipe list</button>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10 mx-auto col-md-5 my-3">
                            <img src={image_url} alt={title} className="img-thumbnail"/>
                        </div>
                        <div className="col-10 mx-auto col-md-5 my-3">
                            <h3>{title}</h3>
                            <h5 className="text-slanted text-success">Provided by {publisher}</h5>
                            <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-warning">Publisher Webpage</a>
                            <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success">Recipe url</a>
                            <h2>Ingredients</h2>
                            <h4>Not found....Sorry</h4>
                        </div>
                    </div>
                </div>
                </>
            )
        }else{
            return(
                <>
                <div className="container">
                    <div className="row mt-3">
                        <button type="button" className="btn btn-warning" onClick={()=>handleIndex(1)}>Back to the Recipe list</button>
                    </div>
                    <div className="row mt-3">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <img src={image_url} alt={title} className="img-thumbnail"/>
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h3>{title}</h3>
                            <h5 className="text-slanted text-success">Provided by {publisher}</h5>
                            <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-warning">Publisher Webpage</a>
                            <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success">Recipe url</a>
                            <h2>Ingredients</h2>
                            <ul className="list-group mt-3">
                                {
                                    ingredients.map((element,index)=>{
                                        return(
                                            <li key={index} className="list-group-item">{element}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                </>
            )
        }
    }
}
export default RecipeDetails