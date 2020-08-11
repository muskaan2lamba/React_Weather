import React from 'react'
import Form from './Components/Form'
import axios from 'axios'
import Particles from './Components/ParticleComponent'
import FeatureDisc from './Components/FeatureDisc'
import './App.css'

class App extends React.Component{
    state={
        city: "mumbai",
        statename: "maharashtra",
        displayWeather : [],
        weatherIcon: ""
    }
    componentDidMount(){
        const getWeather = async ()=>{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.statename}&appid=e97db88d61bd0f7f11731de2aaca8cd6&units=metric`);
            this.setState({displayWeather:response.data.main.temp})
            let desc = response.data.weather[0].main
            this.setState({weatherIcon: desc})
        }
        getWeather()        
    }

    componentDidUpdate(prevProps,prevState,snapShot){
        if(this.state.city===prevState.city) return;
        else{
            const getWeather = async ()=>{
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.statename}&appid=e97db88d61bd0f7f11731de2aaca8cd6&units=metric`);
                this.setState({displayWeather:response.data.main.temp})
                let desc = response.data.weather[0].main
                this.setState({weatherIcon: desc})
            }
            getWeather()
        }
    }

    addCity = (name,statename) =>{
        this.setState({city:name,statename:statename,...this.state.displayWeather})
    }
    render(){
        return(
            <div>
                <div className="center-align"
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
                }}
            >
                <Particles/>
                
                
                <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
                >
                <div id="shadowBox">
                    <h1 className="rainbow rainbow_text_animated">Know weather of any place!</h1>
                </div>    
                
                <Form addCity = {this.addCity}/>
                <h1>{this.state.displayWeather}°C</h1>
                {this.state.weatherIcon==="Clouds"
                 ? 
                (<i className="large material-icons">wb_cloudy</i>) : 
                this.state.weatherIcon === "Summer"
                ?
                (<i className="large material-icons">wb_sunny</i>) :
                this.state.weatherIcon === "Winter"
                ?
                (<i className="large material-icons">ac_unit</i>) :
                (<h1>{this.state.weatherIcon}</h1>)}
            </div>
            </div>
                {/* <FeatureDisc/> */}
            </div>
        );
    }
}
export default App