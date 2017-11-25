var Album = React.createClass({
  next(){
    this.setState({hinh: this.state.hinh == 20?20:(this.state.hinh + 1)});
  },

  prev(){
    this.setState({hinh: this.state.hinh == 1?1:(this.state.hinh - 1)});
  },

  getInitialState(){
    return({hinh: 1});
  },

  render(){
    return(
      <div>
      <img src={"Premier League/PL" + this.state.hinh + ".ico"}/>
      <hr/>
      <button onClick={this.prev}>Quay lại</button>
      <button onClick={this.next}>Tiếp theo</button>
      </div>
      );
  }
});

ReactDOM.render(
  <Album/>
  , document.getElementById('root')
  );
