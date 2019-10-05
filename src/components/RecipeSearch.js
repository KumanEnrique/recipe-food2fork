import React from 'react'

class RecipeSearch extends React.Component{
    render(){
        return(
            <>
            <div className="container">
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.props.value} placeholder="Product" onChange={this.props.handleInput}/>
                    </div>
                    <button type="submit" className="btn btn-primary"><span className="fas fa-search"></span></button>
                </form>
            </div>
            </>
        )
    }
}
export default RecipeSearch