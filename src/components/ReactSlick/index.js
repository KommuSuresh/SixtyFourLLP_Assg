import DropDownMenu from '../DropDownMenu'
import Slider from 'react-slick'
import React from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const myslider = [
  {
    id: 1,
    imgUrl: 'https://etimg.etb2bimg.com/photo/94032876.cms',
    altText: 'Banking Monitor',
    heading: 'Banking Monitor',
    para: 'Credit growth has remained broadly stable in recent weeks ot just...',
  },
  {
    id: 2,
    imgUrl: 'https://www.learnquest.com/assets/images/business-analysis-2.jpg',
    altText: 'Business Architecture',
    heading: 'Business Architecture',
    para: 'Business analysts collaborate with stakeholders to uncover and business...',
  },
  {
    id: 3,
    imgUrl: 'https://www.learnquest.com/assets/images/business-analysis-1.jpg',
    altText: 'State of Markets',
    heading: 'State of Markets',
    para: 'Credit growth has remained broadly stable in recent weeks ot just...',
  },
  {
    id: 4,
    imgUrl: 'https://www.learnquest.com/assets/images/business-analysis-3.jpg',
    altText: 'Business analysis',
    heading: 'Business analysis',
    para: 'Business analysts collaborate with stakeholders to uncover and business...',
  },
  {
    id: 5,
    imgUrl: 'https://www.learnquest.com/assets/images/business-analysis-1.jpg',
    altText: 'State of Markets',
    heading: 'State of Markets',
    para: 'Credit growth has remained broadly stable in recent weeks ot just...',
  },
  {
    id: 6,
    imgUrl: 'https://etimg.etb2bimg.com/photo/94032876.cms',
    altText: 'Banking Monitor',
    heading: 'Banking Monitor',
    para: 'Business analysts collaborate with stakeholders to uncover and business...',
  },
  {
    id: 7,
    imgUrl: 'https://www.learnquest.com/assets/images/business-analysis-3.jpg',
    altText: 'Business analysis',
    heading: 'Business analysis',
    para: 'Credit growth has remained broadly stable in recent weeks ot just...',
  },
  {
    id: 8,
    imgUrl: 'https://www.learnquest.com/assets/images/business-analysis-2.jpg',
    altText: 'Business Architecture',
    heading: 'Business Architecture',
    para: 'Business analysts collaborate with stakeholders to uncover and business...',
  },
  {
    id: 9,
    imgUrl: 'https://etimg.etb2bimg.com/photo/94032876.cms',
    altText: 'Banking Monitor',
    heading: 'Banking Monitor',
    para: 'Credit growth has remained broadly stable in recent weeks ot just...',
  },
  {
    id: 10,
    imgUrl: 'https://www.learnquest.com/assets/images/business-analysis-1.jpg',
    altText: 'State of Markets',
    heading: 'State of Markets',
    para: 'Business analysts collaborate with stakeholders to uncover and business...',
  },
  {
    id: 11,
    imgUrl: 'https://www.learnquest.com/assets/images/business-analysis-2.jpg',
    altText: 'Business Architecture',
    heading: 'Business Architecture',
    para: 'Credit growth has remained broadly stable in recent weeks ot just...',
  },
  {
    id: 12,
    imgUrl: 'https://etimg.etb2bimg.com/photo/94032876.cms',
    altText: 'Banking Monitor',
    heading: 'Banking Monitor',
    para: 'Business analysts collaborate with stakeholders to uncover and business...',
  },
  {
    id: 13,
    imgUrl: 'https://www.learnquest.com/assets/images/business-analysis-3.jpg',
    altText: 'Business analysis',
    heading: 'Business analysis',
    para: 'Credit growth has remained broadly stable in recent weeks ot just...',
  },
  {
    id: 14,
    imgUrl: 'https://etimg.etb2bimg.com/photo/94032876.cms',
    altText: 'Banking Monitor',
    heading: 'Banking Monitor',
    para: 'Business analysts collaborate with stakeholders to uncover and business...',
  },
  {
    id: 15,
    imgUrl: 'https://www.learnquest.com/assets/images/business-analysis-1.jpg',
    altText: 'State of Markets',
    heading: 'State of Markets',
    para: 'Credit growth has remained broadly stable in recent weeks ot just...',
  },
  {
    id: 16,
    imgUrl: 'https://www.learnquest.com/assets/images/business-analysis-2.jpg',
    altText: 'Business Architecture',
    heading: 'Business Architecture',
    para: 'Business analysts collaborate with stakeholders to uncover and business...',
  },
]

class ReactSlick extends React.Component {
  state = {showMoreSlider: false}

  toggleShowMoreSlider = () => {
    this.setState(prevState => ({showMoreSlider: !prevState.showMoreSlider}))
  }

  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    const chunkArray = (arr, size) => {
      const chunkedArr = []
      for (let i = 0; i < arr.length; i += size) {
        chunkedArr.push(arr.slice(i, i + size))
      }
      return chunkedArr
    }

    const chunkedSlides = chunkArray(myslider, 4)

    return (
      <div className="subCard">
        <div className="slider-container">
          <Slider {...settings} className="slider">
            {chunkedSlides.map((slideItems, index) => (
              <div key={index}>
                <div className="slide">
                  {slideItems.map(item => (
                    <div key={item.id} className="eachSlideItem">
                      <div className="eachSlideContent">
                        <img src={item.imgUrl} alt={item.altText} />
                        <h3>{item.heading}</h3>
                        <p>{item.para}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
          {this.state.showMoreSlider && (
            <Slider {...settings} className="slider">
              {chunkedSlides.map((slideItems, index) => (
                <div key={index}>
                  <div className="slide">
                    {slideItems.map(item => (
                      <div key={item.id} className="eachSlideItem">
                        <div className="eachSlideContent">
                          <img src={item.imgUrl} alt={item.altText} />
                          <h3>{item.heading}</h3>
                          <p>{item.para}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          )}
          <div>
            {this.state.showMoreSlider ? (
              <button
                className="view-more-container"
                onClick={this.toggleShowMoreSlider}
              >
                View Less
              </button>
            ) : (
              <button
                className="view-more-container"
                onClick={this.toggleShowMoreSlider}
              >
                View More
              </button>
            )}
          </div>
        </div>

        <div>
          <DropDownMenu className="DropDownMenu" />
        </div>
      </div>
    )
  }
}

export default ReactSlick
