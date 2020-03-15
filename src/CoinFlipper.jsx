import React, {Component} from 'react'
import {choice} from './helpers'
import Coin from './Coin';
import './CoinFlipper.css';
class CoinFlipper extends Component{
  static defaultProps = {
    coins : [
      {side: 'heads', imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg" },
      {side: 'tails', imgSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"}
    ]
  }
  constructor(props){
    super(props);
    this.state = {
     currCoin: null,
     nFlips: 0,
     nHeads: 0,
     nTails: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // flipCoin(){
  //   const newCoin = choice(this.props.coins)
      
  //   this.setState(prevState =>{ 
  //     let newState = {
  //               ...prevState,
  //               currCoin: newCoin,
  //               nFlips: prevState.nFlips + 1
  //           };
  //         if(newCoin.side === 'heads'){
  //           newState.nHeads +=  1
  //         } else {
  //           newState.nTails += 1
  //         }
  //       return newState
  //     })
  //   }

  flipCoin(){
    const newCoin = choice(this.props.coins);
    this.setState(prevState => ({
      currCoin: newCoin,
      nFlips: prevState.nFlips + 1,
      nHeads: prevState.nHeads + (newCoin.side === 'heads' ? 1: 0),
      nTails: prevState.nTails + (newCoin.side === 'tails' ? 1: 0)
    }))
  }

  handleClick() {
    this.flipCoin()
  }
  render(){
    return(
      <div>
        <h1>Let's Flip the Coin</h1>
        <button onClick={this.handleClick} className="CoinFlipper-btn">Flip me</button>
        {this.state.currCoin && <Coin info={this.state.currCoin}/>}
        <p className="CoinFlipper-text">Out of {this.state.nFlips} flips there are {this.state.nHeads} heads and {this.state.nTails} tails</p>
      </div>
    )
  }
}
export default CoinFlipper;