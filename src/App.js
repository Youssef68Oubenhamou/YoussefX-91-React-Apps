import { React , Component } from "react" ;
import "./App.css"

class App extends Component {

    constructor() {
        super() ;
        this.state = {
            answer: 0 ,
            input1: 0 ,
            input2: 0
        } ;
    }

    addition() {
        this.setState({answer: parseInt(this.state.input1) + parseInt(this.state.input2)})
    }
    subtraction() {
        this.setState({answer: parseInt(this.state.input1) - parseInt(this.state.input2)})
    }
    multiplication() {
        this.setState({answer: parseInt(this.state.input1) * parseInt(this.state.input2)})
    }
    division() {
        this.setState({answer: parseInt(this.state.input1) / parseInt(this.state.input2)})
    }

    render () {
        return (
            <>
                <div className="container">
                    <input type="number" className="numb1" onChange={(evnt) => this.setState({input1: evnt.target.value})} value={this.state.input1} />
                    <input type="number" className="numb2" onChange={(evnt) => this.setState({input2: evnt.target.value})} value={this.state.input2} />
                    <h3 className="answer">Answer: {this.state.answer}</h3>
                    <button className="btn" onClick={() => this.addition()}> + </button>
                    <button className="btn" onClick={() => this.subtraction()}> - </button>
                    <button className="btn" onClick={() => this.multiplication()}> x </button>
                    <button className="btn" onClick={() => this.division()}> / </button>
                </div>
            </>
        ) ;
    }
}

export default App;
