import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import CreatePage from './components/CreatePage';
import Header from './components/Header';
import IndexPage from './components/IndexPage';
import ItemDetailPage from './components/ItemDetailPage';
import ItemEditForm from './components/ItemEditForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<IndexPage />} />
          <Route path="/item/:id" element={<ItemDetailPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/item/edit/:id" element={<ItemEditForm />} />
        </Routes>
      </BrowserRouter>
      </>
    )
  }
}

export default App;
