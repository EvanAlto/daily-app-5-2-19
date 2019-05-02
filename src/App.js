import React, { Component } from 'react'
import './App.css'
import { FiHome, FiHeart, FiSearch, FiUser } from 'react-icons/fi'
import NavItem from './NavItem'

const home = {
  color: '#5b37b7',
  text: 'home'
}

const likes = {
  color: '#c9379d',
  text: 'likes'
}

const search = {
  color: '#e6a919',
  text: 'search'
}

const user = {
  color: '#1094aa',
  text: 'user'
}

class App extends Component {

  state = {
    backgroundColor: '#5b37b7',
    active: 'home'
  }

  handleClick = (active, backgroundColor) => {
    if (this.state.active !== active) {
      this.setState({
        backgroundColor,
        active
      })
    }
  }
  
  render() {
    const { active, backgroundColor } = this.state

    return (
      <div className="App flex-cc" style={{backgroundColor}}>
        <div className="navigation">
          <NavItem color={home.color} text={home.text} active={active} handleClick={this.handleClick}>
            <FiHome style={active === home.text && { stroke: home.color }} />
          </NavItem>
          <NavItem color={likes.color} text={likes.text} active={active} handleClick={this.handleClick}>
            <FiHeart style={active === likes.text && { stroke: likes.color }} />
          </NavItem>
          <NavItem color={search.color} text={search.text} active={active} handleClick={this.handleClick}>
            <FiSearch style={active === search.text && { stroke: search.color }} />
          </NavItem>
          <NavItem color={user.color} text={user.text} active={active} handleClick={this.handleClick}>
            <FiUser style={active === user.text && { stroke: user.color }} />
          </NavItem>
        </div>
      </div>
    )
  }
}

export default App
