import React from 'react'

class Recipe extends React.Component{
    render(){
        const {
            title,
            image_url,
            source_url,
            publisher
        } =this.props.recipe
        const {handleDetails} = this.props
        return(
            <>
            <div className="col-10 mx-auto col-md-4 col-col-lg-4 my-3">
                <div className="card" >
                    <img src={image_url} className="card-img-top" alt={title}/>
                    <div className="card-body ">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text text-slanted text-success">Provided by {publisher}</p>
                    </div>
                    <div className="card-footer">
                        <button type="button" onClick={handleDetails} className="btn btn-primary" >Details</button>
                        <a href={source_url} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Source_url</a>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Recipe