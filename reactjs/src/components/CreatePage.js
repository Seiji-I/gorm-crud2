import React from "react";
import ItemCreateForm from "./ItemCreateForm";

class CreatePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <>
        <ItemCreateForm />
      </>
    )
  }

}

export default CreatePage;