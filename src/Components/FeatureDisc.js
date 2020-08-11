import React from 'react'
import M from 'materialize-css'
import $ from 'jquery'

class FeatureDisc extends React.Component{
    
    componentDidMount(){
       M.AutoInit();
        // $(document).ready(function(){
        //     $('.tap-target').tapTarget();
        //   });
    }
    render(){
        return(
        <>
        <a id="menu" className="waves-effect waves-light btn btn-floating" ><i className="material-icons">menu</i></a>


        <div className="tap-target" data-target="menu">
            <div className="tap-target-content">
            <h5>Title</h5>
            <p>A bunch of text</p>
            </div>
        </div>
        </>
        );
    }
    
}
export default FeatureDisc