import React from "react";
import ItemList from "./ItemList";

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <>
        <ItemList />
      </>
    )
  }

}

export default IndexPage;