import React from 'react';
import fetch from 'isomorphic-fetch';

export default class App extends React.Component{
    constructor(){
      super();
      this.state = {
        user: {
          name: '',
          pwd: ''
        }
      };
    }
    componentDidMount(){
      fetch('/user')
        .then(x => x.json())
        .then(json => {
          this.setState({
            user: {
              name: json.name,
              pwd: json.pwd
            }
          });
        });
    }
    render() {
        return <div>
          {this.state.user.name} <br />
          {this.state.user.pwd}
        </div>;
    }
}
