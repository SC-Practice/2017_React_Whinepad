import React, { Component } from 'react';

class Excel extends Component {
    render() {
        return (
            <div className="Excel">
                {this._renderToolbar()}
                {this._renderTable()}
            </div>
        );
    }
}

export default Excel;