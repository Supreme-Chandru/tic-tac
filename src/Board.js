/**
 * Created by Home on 07-08-2017.
 */
import React from 'react';
import './index.css';
import Box from './Box';


class Board extends React.Component{

    constructor() {
        super();

    }

    renderBox(i){
        return(
            <Box
                value={this.props.boxes[i]}
                onClick={() => this.props.onClick(i)}/>
        );
    }

    render(){
        for(let row=0; row<3;row++){
            for(let column=0;column<3;column++){

            }
        }
        return (
            <div>

                <div className="Board-row">
                    {this.renderBox(0)}
                    {this.renderBox(1)}
                    {this.renderBox(2)}
                </div>
                <div className="Board-row">
                    {this.renderBox(3)}
                    {this.renderBox(4)}
                    {this.renderBox(5)}
                </div>
                <div className="Board-row">
                    {this.renderBox(6)}
                    {this.renderBox(7)}
                    {this.renderBox(8)}
                </div>
            </div>
        );
    }
}



export default Board;