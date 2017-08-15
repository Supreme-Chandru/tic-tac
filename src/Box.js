/**
 * Created by Home on 07-08-2017.
 */
import React from 'react';
import './index.css';



// class Box extends React.Component{
//     constructor() {
//         super();
//     }
//
//     render(){
//         return (
//             <button
//                 className="box"
//                 onClick = {this.props.onClick}>{this.props.value}</button>
//         );
//     }
// }

function Box(props){
    return (
        <button className="box" onClick={props.onClick}>{props.value}</button>
    );
}

export default Box;