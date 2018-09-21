import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFormWord = (given_word) => {
    let word = given_word.toUppercase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attemp: 1,
        guess: [],
        completed: false
    }
}

export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFormWord(this.props.value)
    }

    activationHandler = (c) => {
        let guess = [...this.state.guess, c]
        this.setState({guess})
            if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], completed: true})
            }else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
        }
    }
}
    render() {
        return(
            <div>
              { Array.from(this.props.value).map((c,i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>)}  
            </div>    
        );
    }
}

