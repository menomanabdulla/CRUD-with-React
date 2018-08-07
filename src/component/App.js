import React, { Component } from 'react';
import './App.css';
import View from './view/view'
class App extends Component {
  constructor (){
    super()
    this.state = {
      movie: [
        {
          name: 'Ligting Baby',
          catagorie: 'Horror',
          director: 'Cristoper Liam',
          ratting: 4,
          thumb: 'https://i.pinimg.com/originals/4a/fc/6f/4afc6f3d14881f4c67370033d3146aed.jpg',
          id: 0
        },{
          name: 'Star War',
          catagorie: 'Action',
          director: 'Nolan Liam',
          ratting: 5,
          thumb: 'https://i.pinimg.com/originals/a0/3c/4b/a03c4b4d6c8702586f2aa67aecc744e1.jpg',
          id: 1
        },{
          name: 'False Stem',
          catagorie: 'Action',
          director: 'Nolan Liam',
          ratting: 4,
          thumb: 'https://i.pinimg.com/originals/bb/e3/73/bbe3736ca3522ff81849d90ad89b7031.jpg',
          id: 2
        },{
          name: 'Man of Steel',
          catagorie: 'Comics',
          director: 'Zack Snyder',
          ratting: 5,
          thumb: 'https://i.pinimg.com/originals/b0/2e/e9/b02ee90794c0552f911532afac147300.jpg',
          id: 3
        },{
          name: 'Out Lander',
          catagorie: 'Milatary',
          director: 'Zim Cavizel',
          ratting: 4,
          thumb: 'https://i.pinimg.com/originals/a4/51/18/a451189f12689545ffb5141d606903f8.jpg',
          id: 4
        },{
          name: 'Beauty Kid',
          catagorie: 'Horror',
          director: 'Cristoper Liam',
          ratting: 5,
          thumb: 'https://i.pinimg.com/originals/0e/75/a5/0e75a5bcadec9c3463db9ae450012bcc.jpg',
          id: 5
        }
      ],
      canInput: false,
      formBtnText: 'Add movie',
      search: ' ',
      searchItem: []
    }
  }
  fromValueObject = {}
  handleChange(e) {
      this.fromValueObject[e.target.name] = e.target.value
      console.log(this.fromValueObject)
  }
  addMovie(e){
    e.preventDefault();
   
    if(this.state.movie.length===0){
      this.fromValueObject['id'] = 0
    }else{
      this.fromValueObject['id'] = this.state.movie.length
    }
    console.log(this.fromValueObject)
    let withNewMovie = this.state.movie.concat(this.fromValueObject)
    this.setState({
      canInput: false,
      formBtnText: 'Add movie',
      movie: withNewMovie
    })
    console.log(this.state.movie)
    this.fromValueObject={}
  }

  UpdateMoveList = (updateMovie)=>{
    let movieInState = [...this.state.movie]
    movieInState[updateMovie.id] = updateMovie
    this.setState({
      movie : movieInState
    })
  }
  deleteMovie = (deleteMovie)=>{
    let movieInState = [...this.state.movie]
    movieInState.splice(deleteMovie.id,1)
    this.setState({
      movie : movieInState
    })
  }
  inputHendeler = ()=>{
    if(this.state.canInput){
      this.setState({
        ...this.state,
        canInput: false,
        formBtnText: 'Add movie'
      })
    }else{
    this.setState({
      ...this.state,
      canInput: true,
      formBtnText: 'Close'
    })
    }
  } 

  inputFormState(){
    let output = null
    if(this.state.canInput){
      output = (
        <div>
          <hr/>
          <form ref="form" onSubmit={this.addMovie.bind(this)}>
              <div className="row">
                  <div className="col-6">
                      <div className="form-group">
                          <label htmlFor="formField1">Movie Name</label>
                          <input type="text" className="form-control" id="formField1" name="name"  onChange={this.handleChange.bind(this)}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="formField2">Movie Catagorie</label>
                          <input type="text" className="form-control" id="formField2" name="catagorie" onChange={this.handleChange.bind(this)}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="formField3">Movie Director</label>
                          <input type="text" className="form-control" id="formField3" name="director"  onChange={this.handleChange.bind(this)}/>
                      </div>
                  </div>
                  <div className="col-6">
                      <div className="form-group">
                          <label htmlFor="formField4">Movie Rattting</label>
                          <input type="text" className="form-control" id="formField4" name="ratting" onChange={this.handleChange.bind(this)}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="formField5">Movie Thumb</label>
                          <input type="text" className="form-control" id="formField5" name="thumb" onChange={this.handleChange.bind(this)}/>
                      </div>
                      <div className="form-group">
                          <label></label>
                          <button className="btn btn-info btn-lg btn-block" type="submit">Save</button>
                      </div>
                  </div>
              </div>
          </form>
        </div>
      )
    }else{
      output = (
        <div>
        </div>
      )
    }
    return output
  }

  searchHendel(e) {
    this.setState({
      ...this.state,
      search: e.target.value,
      movie: this.state.movie.filter(
        (toFilteredMovie) => {
          let movieInfo = toFilteredMovie.name.toLowerCase() +' '+ toFilteredMovie.catagorie.toLowerCase()
          return movieInfo.indexOf(this.state.search.toLowerCase()) !== -1;
        }
      )
    })
  }
  ascenSortHendeler(){
    this.setState({
      ...this.state,
      bookes: this.state.movie.sort((a,b)=>{
        if(a.name<b.name){
          return -1;
        }else if(a.name>b.name){
          return 1;
        }else{
          return 0;
        }
      })
    })
  }

  desceSortHendeler(){
    this.setState({
      ...this.state,
      bookes: this.state.movie.sort((a,b)=>{
        if(a.name<b.name){
          return 1;
        }else if(a.name>b.name){
          return -1;
        }else{
          return 0;
        }
      })
    })
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
              <div className="movie-entry-block">
                <div>
                  <input className="search-input" type='text' 
                    value = {this.state.search}
                    onChange={this.searchHendel.bind(this)}
                    placeholder="Search Here"
                  />
                  <button className="btn btn-primary" onClick ={()=>this.inputHendeler()} >
                    {this.state.formBtnText}
                  </button>
                  <button className="btn btn-primary" onClick = {()=>this.ascenSortHendeler()}>
                    Ascen Sort
                  </button>
                  <button className="btn btn-primary" onClick = {()=>this.desceSortHendeler()}>
                    Descen Sort
                  </button>
                </div>
                {this.inputFormState()}
              </div>
              <div className="movie-view-block">
                <View EditHandeler = {this.UpdateMoveList.bind(this)} 
                  DeliteHendeler = {this.deleteMovie.bind(this)} 
                  movie = {this.state.movie} />
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App
