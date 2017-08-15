/**
 * Created by Home on 07-08-2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board'


class Game extends React.Component{
    constructor() {
        super();
        this.state = {
            history: [{
                boxes: Array(9).fill(null),
            }],
            nextPlayer : 'X',
            stepNumber: 0
        };
    }



    handleOnClick(i){
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length-1];

        const boxes = current.boxes.slice();
        if(calculateWinner(boxes) || boxes[i]){
            return;
        }

        const player = this.state.nextPlayer;
        boxes[i] = player;

        this.setState({
            history: history.concat([{
                boxes : boxes

            }]),
            nextPlayer : player==='X' ? 'O' : 'X',
            stepNumber : history.length
        });

    }

    jumpto(i){
        this.setState({
            nextPlayer: (i % 2)==0 ? 'X' : 'O' ,
            stepNumber: i
        });
    }

    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.boxes);

        const moves = history.map((move,index) => {
            const desc = index == 0 ? 'Game Started' : 'Move #'+index ;
            return (
                <li>
                    <a key={index}
                        href="#"
                        onClick={() => this.jumpto(index)}>{desc}
                    </a>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.nextPlayer);
        }

        return (
            <div>
                <div className="game-board">
                    <Board
                        boxes={current.boxes}
                        onClick={(i) => this.handleOnClick(i)}/>
                </div>
                <div className="game-info">
                    <h4>{status}</h4>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


export default Game;