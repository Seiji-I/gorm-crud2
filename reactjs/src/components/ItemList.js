import React from "react";
import axios from "axios";
import Item from "./Item";

class ItemList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items:[]}
    this.getItems = this.getItems.bind(this)
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:3333/api/")
    .then(result => {
      this.setState({items:result.data.items});
    })
    .catch(err => console.log(err))
  }

  render() {
    return(
      <>
        <table>
          <tbody>
          <tr>
            <th> ID </th>
            <th> NAME </th>
            <th> STOCK </th>
            <th> CREATED AT </th>
            <th> UPDATED AT </th>
            <th> CHANGE / DELETE</th>
          </tr>
          {this.getItems()}
          </tbody>
        </table>
      </>
    )
  }

  getItems(){
    // console.log(this.state.items)
    return this.state.items.map((item => {
      return <Item key={item.Name} value={item}/>
    }))
  }
}

export default ItemList;