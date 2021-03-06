import React, { Component } from 'react';

import CharacterCard from "./CharacterCard";
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attemt: 1,
        guess: [],
        completed: false
    }
}
export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
        let guess = [this.state.guess]+c
        this.setState({guess})
        if(guess.length === this.state.chars.length){
            if(guess === this.state.word){
                this.setState({guess: [], completed: true})
            }else{
                this.setState({guess: [], attemt: this.state.attemt + 1})
            }
        }
    }

    render(){
        return(
            <div className="App">
                {
                    Array.from(this.state.chars).map(
                        (c, i) => <CharacterCard value = {c} key = {i} attemt={this.state.attemt}
                        activationHandler = {this.activationHandler}/>
                    )
                }
                <p class="serif">The most dangerous city in the PUBG game.</p>
                <p class="serif">Round : {this.state.attemt}</p>
                <p class="serif" className = "winner">{this.state.completed? "you are winner!! refresh to play again." : ""}</p>
                <div class="image">
                    {this.state.completed? <img src="https://formatsplanet.com/wp-content/uploads/2015/03/congratulation.jpg" alt="WINNER" width='600' height='250'/> : ""}
                </div> 
            </div>
        )
    }
}