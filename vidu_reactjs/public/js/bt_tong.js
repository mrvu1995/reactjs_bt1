var list;

function addDiv() {
  ReactDOM.render(<InputDiv/>, document.getElementById('div-add'));
}

var Note = React.createClass({
  render() {
    return <div className="div-note">
      {this.props.children}
    </div>
  }
});

var List = React.createClass({
  getInitialState(){
    list = this;
    return {mang: ['Nguyễn Duy Vũ', '1995', 'Khánh Hòa']}
  },
  render(){
    return <div className="div-list">
      <div id='div-add'> </div>
      <button onClick={addDiv}>Thêm</button>
      {
        this.state.mang.map(function (note, index) {
          return <Note key={index}>{note}</Note>
        })
      }
    </div>
  }
});

var InputDiv = React.createClass({
  send(){
    list.setState({mang: list.state.mang.concat(this.refs.txt.value)});
    ReactDOM.unmoutComponentAtNode(document.getElementById('div-add'));
  },

  render(){
    return  <div>
    <input  type='text' ref='txt' placeholder='Enter your note!'/>
    <button onClick={this.send}> Gửi </button>
    </div>
  }
});

ReactDOM.render(
  <div>
    <List/>
  </div>
  , document.getElementById('root')
  );
