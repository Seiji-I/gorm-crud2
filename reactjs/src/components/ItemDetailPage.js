import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


class ItemDetailPage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {item: {}}
  }
  componentDidMount(){
    const { id } = this.props.params;
    axios.get(`http://localhost:3333/api/item/${id}`)
    .then(result => this.setState({item: result.data.item}))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <>
      <h1>ItemDetailPage</h1>
      <Link to={`/item/edit/${this.state.item.ID}`}>edit</Link>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{this.state.item.ID}</td>
          </tr>
          <tr>
            <th>NAME</th>
            <td>{this.state.item.Name}</td>
          </tr>
          <tr>
            <th>STOCK</th>
            <td>{this.state.item.Stock}</td>
          </tr>
          <tr>
            <th>CREATED AT</th>
            <td>{this.state.item.CreatedAt}</td>
          </tr>
          <tr>
            <th>UPDATED AT</th>
            <td>{this.state.item.UpdatedAt}</td>
          </tr>
        </tbody>
      </table>
      </>
    )
  }
}
export default (props) => (
  <ItemDetailPage
    {...props}
    params={useParams()}
  />
);