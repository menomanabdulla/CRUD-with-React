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
      canInput: false
    }
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
        canInput: false
      })
   }else{
    this.setState({
      ...this.state,
      canInput: true
    })
   }
  }

  inputFormState(){
    let output = null
    if(this.state.canInput){
      output = (
        <div>
            <form ref="form">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="formField1">Movie Name</label>
                            <input type="text" className="form-control" id="formField1" name="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formField2">Movie Catagorie</label>
                            <input type="text" className="form-control" id="formField2" name="catagorie"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formField3">Movie Director</label>
                            <input type="text" className="form-control" id="formField3" name="director"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="formField4">Movie Rattting</label>
                            <input type="text" className="form-control" id="formField4" name="ratting" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formField5">Movie Thumb</label>
                            <input type="text" className="form-control" id="formField5" name="thumb"  />
                        </div>
                        <div className="form-group">
                            <label></label>
                            <button className="btn btn-info btn-lg btn-block" type="submit">Update</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
      )
    }else{
      output = (
        <div>
          <h1>Hello there form output mood</h1>
        </div>
      )
    }
    return output
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
              <div className="movie-entry-block">
                <button className="btn btn-default" onClick ={()=>this.inputHendeler()} >
                  Add Movie
                </button>
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

export default App;