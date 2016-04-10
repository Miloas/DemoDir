import React from 'react';

export default class App extends React.Component {
  render() {
      return <PromptList />;
  }
}

class PromptList extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [1],
      isMounted: false
    };
  }
  componentDidMount() {
    this.setState({isMounted: true});
  }
  componentWillUnmount() {
    this.setState({isMounted:false});
  }
  cb() {
    if(this.state.isMounted)
    this.setState({arr:[...this.state.arr,1]});
  }
  render() {
    let that = this;
    return <div>
    {this.state.arr.map(function(item,i){
      return <Prompt key={i} cb={that.cb.bind(that)} />;
    })}
    </div>;
  }
}

class Prompt extends React.Component {
  constructor() {
    super();
    this.state = {
      readOnly: '',
      result: '',
      isMounted: false
    };
  }
  componentDidMount() {
    this.setState({isMounted:true});
  }
  componentWillUnmount() {
    this.setState({isMounted:false});
  }
  onReturn(e) {
      if(e.keyCode === 13) {
        var cmd = e.target.value;
        if(this.state.isMounted) {
          switch(cmd) {
            case 'ls':
              this.setState({result: 'info.txt'});
              break;
            case 'cat info.txt':
              this.setState({result: 'this is info.txt'});
              break;
            default:
              this.setState({result: '不是内部也不是外部命令'});
          }
          this.setState({readOnly: 'readOnly'});
          this.props.cb();
        }
      }
  }
  render() {
    return <div>
      <p style={promptStyle}>root@miloas:~# </p>
    <input type="text" style={cmdStyle} onKeyDown={this.onReturn.bind(this)} readOnly={this.state.readOnly} autoFocus />
      <p>{this.state.result}</p>
    </div>;
  }
}

var promptStyle = {
  display: 'inline'
};

var cmdStyle = {
  display: 'inline',
  border: 'none',
  outline: 'none'
};
