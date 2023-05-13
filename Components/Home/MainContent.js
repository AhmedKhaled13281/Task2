import React from 'react'
import classes from '../../styles/Components/Home/maincontent.module.css'

const MainContent = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content1}>
        <h1 className={classes.content1_header}>
          Looking for Plants!
          <span style={{display : 'block' , padding : '0'}}>We Got It</span>
        </h1>
        <p className={classes.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Cras adipiscing enim eu turpis egestas pretium aenean. Accumsan sit 
        </p>
        <div className={classes.button_container}>
          <button className={classes.button}>Know More</button>
          <button className={classes.button}>Start Buying</button>
        </div>
      </div>
      <div className={classes.content2}>
        <div className={classes.content2_header}>
          <h3 className={classes.content2_header1}>Best Selling</h3>
          <h5 style={{color : 'grey'}}>View All</h5>
        </div>
        <div className={classes.content2_paragraph}>
          <div>
              <h2 className={classes.content2_paragraph_title}>Aloe Vera</h2>
              <p className={classes.p}>
              Facilisi nullam vehicula ipsum a arcu cursus. Morbi enim nunc faucibus a pellentesque sit amet. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. 
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel
              </p>
          </div>
          <div>
              <h2 className={classes.content2_paragraph_title}>Vinca</h2>
              <p className={classes.p}>
              Facilisi nullam vehicula ipsum a arcu cursus. Morbi enim nunc faucibus a pellentesque sit amet. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Rhoncus dolor purus non enim praesent elementum facilisis leo vel
              </p>
          </div>
        </div>
      </div>
      <div className={classes.pagenumber}>
        <h2 style={{fontWeight : '100'}}>
          <span style={{fontSize : '40px' , color : '#00984E'}}>01</span>/02
        </h2>
      </div>
    </div>
  )
}

export default MainContent