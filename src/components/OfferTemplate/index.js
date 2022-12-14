import React from 'react'
import Content from '../Content'
import OfferNav from '../OfferNav'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import ModalCall from '../ModalCall'
import ProgressiveImageContainer from '../ProgressiveImageContainer'

const OfferTemplate = (props) => {
  const { content, contentComponent, cover, tags, title, desc, subtitle, icon } = props
  const PostContent = contentComponent || Content

  function test(){
    console.log(cover.publicURL);
  }

  return (

    <>

    <div style={{backgroundImage:'url('+cover.publicURL+')',backgroundSize:'cover',backgroundAttachment:'fixed'}}
      className="offimg"
    >
    <Link to='#content' onClick={test}>
    <div className='ofintro'>

      <div style={{textAlign:'center'}}>
        <img src={icon} width='50px'
        style={{filter:'brightness(0) invert(1)'}}
        />

      <h1  className='title is-size-2 has-text-weight-bold is-bold-light'
      id="oftitle"
      style={{color:'white'}}
      >
        {title}
      </h1>
      </div>
      <br />
      <h2 className='subtitle'
      id='subtitle'
      style={{color:'white'}}
      >
        {desc}
      </h2>

      <div style={{textAlign:'center',marginBottom:'-20px'}}>

        <img src="/img/angle-down.svg" width='20px'
        style={{filter:'brightness(0) invert(1)'}}
        />

      </div>


    </div>
    </Link>
    </div>

      <br></br>
      <div id="content" style={{paddingTop:'100px',paddingTop:'50px',paddingBottom:'50px'}}>
        <h3 className='title is-size-3 has-text-weight-bold is-bold-light oftitle2'
        style={{color:'#00d1b2',marginLeft:'5%',marginRight:'5%',maxWidth:'70%'}}
        >
        {subtitle}
        </h3>
        <br />
        <br />
        <PostContent content={content} />

        <br />
        <br />
        <ModalCall />


        <br />
        <br />
        <br />

        <div className='bottomUi' style={{textAlign:'center',marginBottom:'30px',marginLeft:'20px'}}>
        <Link className='button-green' style={{fontSize:'15px'}} to='/portfolio/'> Zobacz nasze realizacje&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link className='button-green' style={{fontSize:'15px'}} to='/blog/'> Poczytaj bloga&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link className='button-green' style={{fontSize:'15px'}} to='/kontakt/'> Skontaktuj si?? z nami&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
        </div>

        <div style={{marginTop: `2rem`, marginLeft:'5%'}}>
          <h4><b>Tagi:</b></h4>
          <br /><br />
          <ul className='taglist columns' style={{marginLeft:'10px'}}>
            {(tags && tags.length)
              ? tags.map(tag => (
                <li className='tags1' key={tag + `tag`}>
                  <Link className="button-green" to={`/tagi/${kebabCase(tag)}/`}>{tag}</Link> &nbsp; &nbsp;
                </li>
              ))
              : null}
          </ul>
        </div>

      </div>
      <OfferNav />

    </>

  )
}



export default OfferTemplate
