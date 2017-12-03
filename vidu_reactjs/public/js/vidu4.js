var Note = React.createClass({
  render(){
    return(
      <p>{this.props.children}</p>
      );
  }
});

var List = React.createClass({
  getInitialState(){
    return{mang: ["Nguyen Duy Vu", "1995", "Khanh Hoa"]}
  },

  add(){
    this.state.mang.push("NodeJS", "ReactJS");
    this.setState(this.state);
  },

  render(){
    return(
      <div>
      <button onClick={this.add}>Thêm</button>
      {
        this.state.mang.map(function(note, index) {
          return<Note key={index}> {note} </Note>
        })
      }
      </div>
      );
  }
});

ReactDOM.render(
  <List></List>
  , document.getElementById('root')
  );
