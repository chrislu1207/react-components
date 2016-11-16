var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems = {['Kale', 'Tomatoes', 'Cucumbers', 'PS4', 'Xbox', 'Texas']}/>
  </div>
);

var GroceryList = (props) => {
  return (
    <ul>
      {props.groceryItems.map(name => 
        <GroceryListItem name = {name} />
      )}
    </ul>
  );
}

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return <li style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.name}</li>
  }
};

ReactDOM.render(<App />, document.getElementById('app'));