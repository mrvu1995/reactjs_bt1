var Note = React.createClass({
  render(){
    return(
      <div>
      <img src={this.props.src}/>
      <p>{this.props.children}</p>
      </div>
      );
  }
});

var List = React.createClass({
  add(){
    this.state.mang.unshift({srcHinh: 'Premier League/PL4.ico', noidung: 'Lap trinh vien'});
    this.setState(this.state);
  },

  getInitialState(){
    return{mang: [
      {srcHinh: 'Premier League/PL1.ico', noidung: 'mrvu.vnn'},
      {srcHinh: 'Premier League/PL2.ico', noidung: '1995'},
      {srcHinh: 'Premier League/PL3.ico', noidung: 'Khanh Hoa'}
      ]};
    },
  render(){
    return(
      <div>
        <button onClick={this.add}>Thêm</button>
        {
          this.state.mang.map(function (note, index) {
            return <Note key={index} src={note.srcHinh}>{note.noidung}</Note>
          })
        }
      </div>
      );
  }
});

ReactDOM.render(
  <div>
  <List/>
  </div>
  ,document.getElementById('root')
  );
