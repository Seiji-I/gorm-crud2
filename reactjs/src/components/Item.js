import React from "react";
import { Link } from "react-router-dom";

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {item: {}}
  }
  componentDidMount() {
    this.setState({item: this.props.value})
  }
  render(){
    return (
      <tr>
        <td> {this.state.item.ID} </td>
        <td><Link to={`/item/${this.state.item.ID}`}> {this.state.item.Name} </Link> </td>
        <td> {this.state.item.Stock} </td>
        <td> {this.state.item.CreatedAt} </td>
        <td> {this.state.item.UpdatedAt} </td>
        <td>
          <Link to={`/item/edit/${this.state.item.ID}`}>edit</Link>
          <input type="button" value="delete" />
        </td>
      </tr>
    )
  }
}

export default Item;