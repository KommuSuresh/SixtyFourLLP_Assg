import './index.css'

import {FiBell} from 'react-icons/fi'
import {IoMdCalendar, IoIosTimer} from 'react-icons/io'

const Header = () => {
  return (
    <div className="HeaderPart">
      <div className="HeadingPart">
        <h3>Good Afternoon, Akshay</h3>
        <p>You are subscribed to Retail plan</p>
      </div>

      <div className="Calender-Timer">
        <div className="CalendarPart">
          <IoMdCalendar className="IoMdCalendar" />
          <p>Today, 14 February </p>
        </div>
        <div className="TimerPart">
          <IoIosTimer className="IoIosTimer" />
          <p>16:42</p>
          <FiBell className="FiBell" />
        </div>
      </div>
    </div>
  )
}

export default Header
