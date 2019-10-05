import React from 'react';
import './App.css';

import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

import {recipem} from './tempRecipem'
import {keys} from './key'

const {key} = keys

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      recipes:recipem,
      url:key,
      details_id:35380,
      pageIndex:1,
      search:"",
      query:"&q=",
      base_url:key,
      error:""
    }
  }

  getrecipes = async()=>{
    try{
      const response = await fetch(this.state.url)
      const resultado = await response.json()
      this.setState({
        recipes: resultado.recipes
      })
      if(resultado.recipes.length === 0){
        this.setState(()=>{
          return {error:"sorry ,but your search did not any results"}
        })
      }else{
        this.setState(()=>{
          return {recipes:resultado.recipes,error:""}
        })
      }
    }catch(error){
      console.log(error)
    }
  }

  /* componentDidMount(){
    this.getrecipes()
  } */

  displayPage = (index)=>{
    switch(index){
      case 1:
        return (<RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails} handleInput={this.handleInput} handleSubmit={this.handleSubmit} value={this.state.search} error={this.state.error}></RecipeList>)
      case 0: 
        return (<RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex}></RecipeDetails>)
      default:
    }
  }

  handleIndex = (index)=>{
    this.setState({
      pageIndex:index
    })
  }

  handleDetails = (index,id)=>{
    this.setState({
      pageIndex:index,
      details_id:id
    })
  }

  handleInput = (e)=>{/*change*/
    this.setState({
      search:e.target.value
    },
    ()=>{
      console.log(this.state.search)
    }
    )
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    /* this.setState({
      search:""
    }) */
    const {query,base_url,search} = this.state
    this.setState(()=>{
      return {url:`${base_url}${query}${search}`,search:""}
    },()=>{
      this.getrecipes()
    })
  }
  render() {
    return (
      <div className="App">
        {this.displayPage(this.state.pageIndex)}
        
      </div>
    )
  }
}

export default App;
