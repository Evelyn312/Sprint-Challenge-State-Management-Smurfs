import React, { useEffect} from "react";
import "./App.css";
import { connect } from 'react-redux';
import { fetchSmurfVillage} from '../actions'


const App = (props) => {

  useEffect( () => {
    props.fetchSmurfVillage();
  }, [])

  return (
      <div className="App">
        <h1>Welcome To Our Smurf Village</h1>
        <div>
          {console.log("smuf", props.smurfs)}
          {props.smurfs?.map( (smurf, index) => { 
              console.log(smurf)
              return(
                <div key={index}>
                  <p>My name is {smurf.name}.</p>  
                  <p>I am {smurf.age} years old.</p>
                  <p>I am {smurf.height} tall.</p>
                </div>
              )
          })}
        </div>
      </div>
    );
  }



const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

const mapDispatchToProps = {
  fetchSmurfVillage
}

export default connect (mapStateToProps, mapDispatchToProps )(App);
