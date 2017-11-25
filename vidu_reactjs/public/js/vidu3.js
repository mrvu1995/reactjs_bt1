var Image = React.createClass({
  changeImg(){
    this.setState({hinh: (this.state.hinh%20) + 1});
  },

  getInitialState(){
    return({hinh: 1});
  },

  render(){
    return(
      <img src={"Premier League/PL" + this.state.hinh + ".ico"}/>
      );
  },

  componentDidMount(){
    setInterval(this.changeImg, 1000);
  }
});

ReactDOM.render(
  <Image/>
  ,document.getElementById('root')
  );
