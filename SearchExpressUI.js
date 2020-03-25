import React, { Component, Fragment } from 'react'
import '../SearchExpressUI.css'
import axios from 'axios';
import Loader from '../loader.gif';
import { Select } from 'react-select'
import SearchSuggestionList from '../SearchSuggestionList';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataListInput from 'react-datalist-input';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";


 class SearchExpressUI extends Component {

    constructor(props)
    {
        super(props); 
            this.state=
            {
                searchquery:'',
                selected:'',
                results:{},
                loading:false,
                message:'',
                selectedtitle:''
            };
            this.cancel=''; 
     };


     fetchSearchResults=(searchquery)=>{
        const searchUrl='http://localhost:9000/api/home';
         if(this.cancel){  //if there is something in the current request then cancel the previous request
             this.cancel.cancel();
         }
         this.cancel=axios.CancelToken.source();//if not then we will create the token and store it

         axios.get(searchUrl,{cancelToken:this.cancel.token,})
        //  .then(res=>{
        //      console.warn(res.data);//gives us only the data saved in the database..other useless data goes away
        .then(res=>{
            const resultNotFoundMsg=!res.data?
            'There is no such search result. Please add a page':'';

            this.setState({
                results:res.data,
                message:resultNotFoundMsg,
                loading:false
            })
        })      
         .catch(error=>{
             if(axios.isCancel(error)||error){
                    this.setState({
                        loading:false,
                        message:'Failed to fetch the data. Please check the network'
                    })
             }
            })
     };

     handleOnInputChange=(event)=>{
         const searchquery=event.target.value;
         if(!searchquery){
                 this.setState({loading:false,searchquery,results:{},message:''});
         }
         else{
         this.setState({searchquery:searchquery, loading:true,message:''},()=>{
             this.fetchSearchResults(searchquery);//callbackfunction
         
         });      
        }
      
     };
   
handleOnSelectChange=(event)=>{
     const {selected}=event.target.value;
     const searchquery=this.state
     if(!searchquery){
    this.setState({searchquery:selected})
     }
     else{
         this.setState({searchquery:this.cancel.searchquery})
     }
}

//      renderSearchList=()=>
//      {
//          const {results,selected}=this.state;//pulling data out of state..results is an object
//          if(Object.keys(results).length && results.length){
            
//             return(
//                 <div className="results-container">
//                 {
                    
//                     // results.map(result=>{
                                               
//                     //      <a key={result.title} 
//                     //      className="result-item" >          
//                     //   {/* <h6 className="image-username">{result.title}</h6> */}
//                     //     </a>
//                     // return(  
//                         <div>
//                          <select
//                           name="selected"         
//                       //   onChange={(value) => this.handleOnSelectChange(value)} 
//                          onClick={this.handleOnSelectChange.bind(this)} 
//                          value={this.state.searchquery}                                
//                          >      
//                            <option selected ="selected">select..</option>      
//                         { results.map(result=>(
                          
//                          <  option key={result.title}
//                             value={result.title}>
//                             {result.title}
//                             </option>
//                         ) )
//                         }
//                           </select>  
//                           </div>                        
//                }                
//                 </div>
//             )        
//         }      
//  }
     handleSubmit = (event)=>{
       
     } 
render()
{
     const {searchquery,message,loading,results}=this.state; //  pulling state out of constructor
    return(
        <form onSubmit={this.handleSubmit}>
            <div class="container">
      <div className="input-group">
      <input type="text" 
      name="searchquery"
      class="form-control" 
      placeholder="Search"
      value={searchquery} 
      id="search-input"
     placeholder="Search.."
       onChange={this.handleOnInputChange}>
           {/* <datalist id="browsers">
        <option value="Internet Explorer"></option> */}
       </input>
      <div className="input-group-btn">
      <button className="btn btn-default" type="submit">Search  
       <i className="glyphicon glyphicon-search"></i>
      </button>
       </div>     
       </div>   
       </div> 
      </form>

        /* // <form  onSubmit={this.handleSubmit}>
        // <div className="container">
		// 	{/*Heading*/
		/* // 	<h2 className="heading">SEARCH EXPRESS</h2>
        //     <i class="dropdown icon"></i>
        //       <label className="search-label" htmlFor="search-input">
        //         <input   */

        /* //        name="searchquery"
        //        type="hidden"
        //        type="text"
        //        value={searchquery} 
        //        id="search-input"
        //        placeholder="Search.."
        //        onChange={this.handleOnInputChange}   
        //        >              
        //            </input> 
                    */
               /* <i className="fa fa-search search-icon"/> */
               
               /* </label> */
            
        /* //   {message && <p className="message">{message}</p>}
        //   <img src={ Loader } className={`search-loading ${ loading ? 'show' : 'hide' }`} alt="loader"/>   
        //    {/* {this.renderSearchList()}   */

        /* /* <button className="ui button" type ="submit">Search</button>
        </div>                           
                              */
               
    /* //   </form> */ 
    )
  }
}


export default SearchExpressUI