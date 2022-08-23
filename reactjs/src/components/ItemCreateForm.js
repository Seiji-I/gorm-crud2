import React from "react";
import axios from "axios";

class ItemCreateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {itemName:"", itemStock:0, message:""}
    this.postItemsHandler = this.postItemsHandler.bind(this)
    this.changeItemHandler = this.changeItemHandler.bind(this)
    this.changeStockHandler = this.changeStockHandler.bind(this)
  }

  render() {
    return(
      <form onSubmit={this.postItemsHandler}>
        <div>
        <label>
          Item Name:
          <input onChange={this.changeItemHandler} type="text" name="item" value={this.state.itemName}/>
        </label>
        </div>
        <div>
        <label>
          Item Name:
          <input onChange={this.changeStockHandler} type="number" name="stock" value={this.state.itemStock}/>
        </label>
        </div>
        <button>CREATE</button>
        <p>{this.state.message}</p>
      </form>
    )
  }
  postItemsHandler(e){
    e.preventDefault();
    const formData = new FormData()
    formData.set("itemName", this.state.itemName)
    formData.set("itemStock", this.state.itemStock)
    return axios.post("http://localhost:3333/api/create",formData)
    .then(result => {
      console.log(result)
      this.setState({message: result.data.message})
    })
    .catch(err => console.log(err))
  }
  changeItemHandler(e) {
    this.setState({ itemName: e.target.value, itemStock: this.state.itemStock })
  }
  changeStockHandler(e) {
    this.setState({ itemName: this.state.itemName, itemStock: e.target.value })
  }
  
}

export default ItemCreateForm;