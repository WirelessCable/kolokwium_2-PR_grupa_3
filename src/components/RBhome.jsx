import React, {Component} from 'react';

class RBhome extends Component {

    state = {
        valuenow: 0
    };

    setNewValueNow = () => {
        this.setNewValueNow({valuenow: 100});
    }

    render() {

        return (
          <div>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div>
              <button onClick={this.setNewValueNow}>Załaduj</button>
            </div>
          </div>
        )
    }
}

export default RBhome;