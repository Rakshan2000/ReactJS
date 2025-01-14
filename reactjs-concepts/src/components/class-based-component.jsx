import { Component } from "react";

class ClassBasedComponent extends Component {

    //state -->in react we use useState

    state = {
        showText : false,
        changeColor : false,
        count : 0,
        changeCountStyle : false
    };

    handleClick = () => {
        console.log("Button Clicked");
        //this is not recommened    
        //this.state.showText = !this.state.showText
        const {showText, changeColor} = this.state;

        this.setState({
            showText : !showText,
            changeColor : !changeColor
        });
    };

    handleCount = () => {
        this.setState({
            ...this.state,
            count : this.state.count + 1,
        })

        console.log(this.state.count)
    }

//componentDidMount
// If any changes and effects needs to be given during Screen Load. Te utilize this function
//componenntDidUpdate
//componentWillUnmount


componentDidMount(){
    console.log('this is called first time on page load');

    this.setState({
        showText : !this.state.showText,
        changeColor: !this.state.changeColor,
    });
}

componentDidUpdate(prevProps, prevState){

    if(prevState && 
       prevState.count !== this.state.count &&
       this.state.count === 10    
    ){
        //destructure the State
        this.setState({
            ...this.state,
            changeCountStyle : true,
        });
        console.log(`Count has changed to: ${this.state.count} with style status as ${this.state.changeCountStyle}`);
    }
}

    render(){
                //console.log(this.state.showText);

                const {showText,changeColor,count,changeCountStyle} = this.state;
                
                console.log(changeCountStyle);

            return (
                <div>
                    {
                        showText ? <h4 style={{color: changeColor ? 'blue' : 'red'}}> Class Based Componnent </h4> : null
                    }

                    <button onClick={this.handleClick}>Toggle Text</button>
                    <button onClick={this.handleCount}>Increase Count</button>
                    <h3 style={{color : changeCountStyle ? 'blue' : 'red'}}>Count is {count}</h3>
                </div>
            );
    }
}

export default ClassBasedComponent;