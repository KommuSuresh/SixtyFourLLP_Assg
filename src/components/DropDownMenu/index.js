import React, {Component} from 'react'
import './index.css'

const matters = [
  {
    id: 'IND',
    country: 'India',
    date: 'February 15, 2024',
    topic1: 'Industrial Production',
    description1: `India's Industrial Production grew by 3.8% YoY in December. This growth was driven by increased manufacturing activity.`,
    topic2: 'Inflation',
    description2: `India's Inflation eased to 5.1% in Jan. The decrease in inflation was primarily due to lower food prices.`,
  },
  {
    id: 'CHN',
    country: 'China',
    date: 'March 10, 2024',
    topic1: 'GDP Growth',
    description1: `China's GDP growth for Q4 2023 was 6.8%. The growth rate was supported by strong exports and domestic consumption.`,
    topic2: 'Trade Balance',
    description2: `China's trade surplus widened to $75.4 billion in February. This surplus was driven by robust exports and reduced imports.`,
  },
  {
    id: 'USA',
    country: 'United States',
    date: 'April 5, 2024',
    topic1: 'Employment',
    description1: `United States added 330,000 jobs in March. Job gains were widespread, with notable increases in the leisure and hospitality sector.`,
    topic2: 'Consumer Confidence',
    description2: `Consumer confidence in the United States rose to 115.2 in March. The increase in confidence was driven by optimism about the economy and job market.`,
  },
]

class DropDownMenu extends Component {
  state = {
    countryCode: 'IND', // Default country code
  }

  handleChangeCountry = event => {
    this.setState({countryCode: event.target.value})
  }

  render() {
    const {countryCode} = this.state
    const selectedCountry = matters.find(matter => matter.id === countryCode)

    return (
      <div className="DropDownMenu">
        <div className="heading-country">
          <p>Recent Releases</p>
          <select
            className="selectror"
            value={countryCode}
            onChange={this.handleChangeCountry}
          >
            {matters.map(matter => (
              <option key={matter.id} value={matter.id}>
                {matter.country}
              </option>
            ))}
          </select>
        </div>
        <div className="line1"></div>
        <div>
          <div className="part1">
            <div className="line2"></div>
            <div className="part1SubPart">
              <h3>{selectedCountry.date}</h3>
              <h4>{selectedCountry.topic1}</h4>
              <p>{selectedCountry.description1}</p>
            </div>
          </div>

          <div className="part1">
            <div className="line2"></div>
            <div className="part1SubPart">
              <h3>{selectedCountry.date}</h3>
              <h4>{selectedCountry.topic2}</h4>
              <p>{selectedCountry.description2}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DropDownMenu
