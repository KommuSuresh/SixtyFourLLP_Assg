import './App.css'

import {Component} from 'react'

import SideBar from './components/SideBar'
import Header from './components/Header'
import LibraryCard from './components/LibraryCard'
import ReactSlick from './components/ReactSlick'

class App extends Component {
  render() {
    return (
      <>
        <SideBar />
        <Header />
        <LibraryCard />
        <ReactSlick />
      </>
    )
  }
}

export default App
