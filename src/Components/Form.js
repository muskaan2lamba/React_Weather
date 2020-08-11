import React from 'react'
import './Form.css'
class Form extends React.Component{
    state={
        city: "",
        statename: ""
    }
    render(){
        return(
        
            <div className="container center-align row">            
            <form className="col s12" onSubmit = {e=>{
                e.preventDefault();
                this.props.addCity(this.state.city,this.state.statename)
            }}
            >
            
            <div className="row">
                <div className="input-field col s6">
                <i className="material-icons prefix">location_city</i>
                <input
                id="icon_prefix"
                type="text"
                onChange={e => this.setState({city:e.target.value})}
                value={this.state.city}
                className="validate" 
                required
                />
                <label  for="icon_prefix">City</label>
                </div>
                <div className="input-field col s6">
                <i className="material-icons prefix">add_location</i>
                <input
                id="icon_telephone" 
                type="text"
                onChange={e => this.setState({statename:e.target.value})}
                value={this.state.statename}
                className="validate"
                required
                />
                <label for="icon_telephone">State</label>
                </div>
                <button className="waves-effect waves-light btn" type="submit">Submit</button>
            </div>
            </form>
        </div>
        );
    }
}
export default Form