import React, {Component} from 'react'
import {FaSearch, FaCalculator} from 'react-icons/fa'
import {MdComputer} from 'react-icons/md'
import {AiOutlineQuestionCircle, AiFillDollarCircle} from 'react-icons/ai'
import {IoMdCalendar, IoIosSettings} from 'react-icons/io'
import {IoHeadset} from 'react-icons/io5'

import './index.css'

class SideBar extends Component {
  state = {expand: false}

  handleClick = () => {
    const sidebar = document.querySelector('nav')
    sidebar.classList.toggle('expanded')
    this.setState({expand: !this.state.expand})
  }

  render() {
    const {expand} = this.state
    return (
      <>
        <nav>
          <div onClick={this.handleClick}>
            <img
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRAUDPrKd6ecAkNzlyAmaeiyetU_567RnICWnEaVMwfGXmfk6"
              alt="logo"
            />
          </div>
          <div>
            <div className="icon-Heading">
              <FaSearch className="middelIcons" onClick={this.handleClick} />
              <p
                className={
                  expand ? `icon-HeadingPara1` : `icon-HeadingPara2 show`
                }
              >
                Search
              </p>
            </div>
            <div className="icon-Heading">
              <MdComputer className="middelIcons" onClick={this.handleClick} />
              <p
                className={
                  expand ? `icon-HeadingPara1` : `icon-HeadingPara2 show`
                }
              >
                Dashboard
              </p>
            </div>
            <div className="icon-Heading">
              <AiOutlineQuestionCircle
                className="middelIcons"
                onClick={this.handleClick}
              />
              <p
                className={
                  expand ? `icon-HeadingPara1` : `icon-HeadingPara2 show`
                }
              >
                Help
              </p>
            </div>
            <div className="icon-Heading">
              <IoMdCalendar
                className="middelIcons"
                onClick={this.handleClick}
              />
              <p
                className={
                  expand ? `icon-HeadingPara1` : `icon-HeadingPara2 show`
                }
              >
                Calendar
              </p>
            </div>
            <div className="icon-Heading">
              <FaCalculator
                className="middelIcons"
                onClick={this.handleClick}
              />
              <p
                className={
                  expand ? `icon-HeadingPara1` : `icon-HeadingPara2 show`
                }
              >
                Calculator
              </p>
            </div>
            <div className="icon-Heading">
              <AiFillDollarCircle
                className="middelIcons"
                onClick={this.handleClick}
              />
              <p
                className={
                  expand ? `icon-HeadingPara1` : `icon-HeadingPara2 show`
                }
              >
                Finance
              </p>
            </div>
            <div className="icon-Heading">
              <IoHeadset className="middelIcons" onClick={this.handleClick} />
              <p
                className={
                  expand ? `icon-HeadingPara1` : `icon-HeadingPara2 show`
                }
              >
                Support
              </p>
            </div>
          </div>
          <div>
            <div className="icon-Heading">
              <IoIosSettings
                className="middelIcons"
                onClick={this.handleClick}
              />
              <p
                className={
                  expand ? `icon-HeadingPara1` : `icon-HeadingPara2 show`
                }
              >
                Settings
              </p>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default SideBar
