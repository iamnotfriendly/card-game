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
        completed: false,
        lose : false
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
                <p class="sansserif">The most dangerous city in the PUBG game.</p>
                <p class="sansserif">Round : {this.state.attemt}</p>
                <p class="sansserif" className = "winner">{this.state.completed? "you are winner!! refresh to play again." : ""}</p>
                <div class="image">
                    {this.state.completed? <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-1ff6e565176b38899fd667fd744a2668-emoticons.png" alt="WINNER" width='300' height='300'/> : ""}
                </div> 
            </div>
        )
    }
}