import React from 'react';
import Square from './square';

export default class Board extends React.Component {
    renderSquare(i) {
        return(
            <Square
                class={this.props.lines?.includes(i) ? 'square square-winner' : 'square'}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}    
            />
        );
    }

    render() {
        const rows = [];
        for(let i=0; i<3; i++) {
            const cols = [];
            const val = (i*3);
            for(let j=val; j<(val+3); j++) {
                cols.push(
                    this.renderSquare(j)
                )
            }
            rows.push(
                <div className='board-row'>
                    {cols}
                </div>
            )
        }
        return(
            <div>
                {rows}
            </div>
        )
    }
}