
import { Component } from 'react';
import './App.css';

import axios from 'axios';


const URL = 'https://api.github.com/users'
class App extends Component{
   
  state = {
     
    user: 'kmahidul17',
    info: '',
    repo: []

  };

   componentDidMount(){
    

        this.fetchData();
        // this.repolist();

   }
   componentDidUpdate(){

    this.fetchData();
    // this.repolist();

   }
   
    fetchData = () =>
   {
      axios.get(`${URL}/${this.state.user}`)
      .then(res =>{
           this.setState({
             info:res.data
           })

      })
      .catch(err => {

        console.log(err)


      })
   } 



  //  repolist = async () => {
        
  //     let res = await axios.get(`https://api.github.com/users/${this.state.user}/repos`);
      
  //     this.setState({
  //       repo: res.data
  //     })

  //  }
  render(){
    return (
      <div className="App">
         <div className="container">
           <div className="row search">

             <div className="col-sm-12">
                <div>
                  <form>
                  <input type='text'
                  className="form-control" 
                  valuue={this.state.user}  
                  onChange = {(e) => this.setState({user: e.target.value}) }
                  placeholder="write your Github username"
                  />
                 
                   </form>
                </div>
               
             </div>
           </div>
           <div className="row  pic_row">
             <div className="col-sm-4">
               <img className="img-fluid" src={this.state.info.avatar_url} alt={this.state.info.name}/>
             </div>
             <div className="col-sm-6">
               <h1>Bio: {this.state.info.bio}</h1>
               <h1>Followers: {this.state.info.followers}</h1>
               <h1>Following: {this.state.info.following}</h1>
               <h1>Type: {this.state.info.type}</h1>
               
             </div>

           </div>
           {/* <div className="row">
             {this.state.repo.map((singleRepo, index) => {
            return(
              <div className="col-sm-4">
               <h2>{singleRepo.name}</h2>
             
             </div>
                ) 
              })}
           </div> */}
         
         </div>
         
      </div>
    );
  }

  }
  
  
  

export default App;
