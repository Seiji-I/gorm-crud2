import axios from "axios";
import React from "react";
import { useParams } from "react-router";


class ItemDetailPage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {item: {}}
    this.changeItemHandler = this.changeItemHandler.bind(this)
    this.changeStockHandler = this.changeStockHandler.bind(this)
    this.postItemHandler = this.postItemHandler.bind(this)
  }
  componentDidMount(){
    const { id } = this.props.params;
    axios.get(`http://localhost:3333/api/item/${id}`)
    .then(result => {
      this.setState({item: result.data.item})
      console.log(this.state.item)
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <>
      <h1>Item Edit Page</h1>
      <form onSubmit={this.postItemHandler}>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{this.state.item.ID}</td>
          </tr>
          <tr>
            <th>NAME</th>
            <td><input onChange={this.changeItemHandler} type="text" value={this.state.item.Name} /></td>
          </tr>
          <tr>
            <th>STOCK</th>
            <td><input  onChange={this.changeStockHandler} type="number" value={this.state.item.Stock} /></td>
          </tr>
          <tr>
            <th>CREATED AT</th>
            <td>{this.state.item.CreatedAt}</td>
          </tr>
          <tr>
            <th>UPDATED AT</th>
            <td>{this.state.item.UpdatedAt}</td>
          </tr>
          <tr>
            <td><button>UPDATE</button></td>
          </tr>
        </tbody>
      </table>
      </form>
      </>
    )
  }
  changeItemHandler(e) {
    const item = this.state.item
    item.Name = e.target.value
    this.setState({ item : item })
  }
  changeStockHandler(e) {
    const item = this.state.item
    item.Stock = e.target.value
    this.setState({ item : item })
  }
  postItemHandler(e){
    e.preventDefault();
    const formData = new FormData()
    formData.set("itemID", this.state.item.ID)
    formData.set("itemName", this.state.item.Name)
    formData.set("itemStock", this.state.item.Stock)
    return axios.post("http://localhost:3333/api/update",formData)
    .then(result => {
      console.log(result)
      // this.setState({message: result.data.message})
    })
    .catch(err => console.log(err))
  }
}

export default (props) => (
  <ItemDetailPage
    {...props}
    params={useParams()}
  />
);