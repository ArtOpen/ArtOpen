import React from 'react';

function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}

function quitModal(){
  document.getElementById('Ekologia').style.display = 'none';
  document.getElementById('EkologiaX').style.display = 'block';
  setTimeout(() => {document.getElementById('EkologiaX').style.display = 'none';
  document.getElementsByClassName('ofnav1')[1].style.backgroundColor ='white';
  document.getElementsByClassName('ofnav1')[1].style.color ='#00d1b2';
  document.getElementsByClassName('ofnav1')[1].firstChild.style.filter = 'brightness(1) invert(0)';

  },1500);
}

class EkoLogia extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {

    e.preventDefault()
    const form = e.target;

    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(quitModal())
      .catch(error => alert(error))

  }

  render() {
    return (
      <>
      <form
        name="Ekologia"
        id = "Ecoform"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
      <input name='Ekologia' id='ekologia' className='subtitle' placeholder='Ekologia:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px'}} />



      <div className='field' style={{marginLeft:'18px'}}>
        <div className='columns'>

          <div className='column'>
            <label className='label main' htmlFor="notes bambus" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='notes bambus' id='notes bambus'
            onInput={(event) => {

              if(document.getElementById('ic1').style.display == 'none'){
              document.getElementById('ic1').style.display = 'block';

              } else {
              document.getElementById('ic1').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/notes-bambus.png" width='100px' />
            <br />
            Notes<br/>z bambusa
            </label>
              <div id='ic1' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilo????:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilo???? notes bambus' id='ie1' />
              </div>
          </div>

          <div className='column'>
            <label className='label main' htmlFor="lad indukc" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='??adowarka indukcyjna' id='lad indukc'
            onInput={(event) => {

              if(document.getElementById('ic2').style.display == 'none'){
              document.getElementById('ic2').style.display = 'block';

              } else {
              document.getElementById('ic2').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/ladowarka-indukcyjna.png" width='100px' />
            <br />
            ??adowarka<br/> indukcyjna
            </label>
              <div id='ic2' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilo????:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilo???? ??adowarka indukcyjna' id='iec' />
              </div>
          </div>

          <div className='column'>
            <label className='label main' htmlFor="stonebook" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='stonebook' id='stonebook'
            onInput={(event) => {

              if(document.getElementById('ic3').style.display == 'none'){
              document.getElementById('ic3').style.display = 'block';

              } else {
              document.getElementById('ic3').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/stonebook.png" width='100px' />
            <br />
            Stonebook<br/> z papieru z kamienia
            </label>
              <div id='ic3' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilo????:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilo???? stonebook' id='ieco' />
              </div>
          </div>

          <div className='column'>
            <label className='label main' htmlFor="powerbank" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='powerbank' id='powerbank'
            onInput={(event) => {

              if(document.getElementById('ic4').style.display == 'none'){
              document.getElementById('ic4').style.display = 'block';

              } else {
              document.getElementById('ic4').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/powerbank-sloma-pszeniczna.png" width='100px' />
            <br />
            Powerbank<br/> ze s??omy pszenicznej
            </label>
              <div id='ic4' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilo????:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilo???? powerbank' id='ieco0' />
              </div>
          </div>

          <div className='column'>
            <label className='label main' htmlFor="pendrive" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='pendrive' id='pendrive'
            onInput={(event) => {

              if(document.getElementById('ic5').style.display == 'none'){
              document.getElementById('ic5').style.display = 'block';

              } else {
              document.getElementById('ic5').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/pendrive.png" width='100px' />
            <br />
            Pendrive<br/> z bambusa
            </label>
              <div id='ic5' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilo????:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilo???? pendrive' id='ieco1' />
              </div>
          </div>

        </div>
        <br />
        <div className='columns'>

          <div className='column'>
            <label className='label main' htmlFor="notes duo" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='notes duo' id='notes duo'
            onInput={(event) => {

              if(document.getElementById('id1').style.display == 'none'){
              document.getElementById('id1').style.display = 'block';

              } else {
              document.getElementById('id1').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/duo-wlokna-trawy.png" width='100px' />
            <br />
            Notes Duo<br/> z w????kien trawy
            </label>
              <div id='id1' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilo????:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilo???? notes duo' id='ieco2' />
              </div>
          </div>

          <div className='column'>
            <label className='label main' htmlFor="kubek kuku" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='kubek z kukurydzy' id='kubek kuku'
            onInput={(event) => {

              if(document.getElementById('id2').style.display == 'none'){
              document.getElementById('id2').style.display = 'block';

              } else {
              document.getElementById('id2').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/kubek-kuku.png" width='100px' />
            <br />
            Kubek<br/> z kukurydzianego PLA
            </label>
              <div id='id2' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilo????:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilo???? kubek z kukurydzy' id='ieco3' />
              </div>
          </div>

          <div className='column'>
            <label className='label main' htmlFor="kubek kawa" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Kubek z ??usek kawy' id='kubek kawa'
            onInput={(event) => {

              if(document.getElementById('id3').style.display == 'none'){
              document.getElementById('id3').style.display = 'block';

              } else {
              document.getElementById('id3').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/kubek-luski-kawy.png" width='100px' />
            <br />
            Kubek<br/> z ??usek kawy
            </label>
              <div id='id3' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilo????:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilo???? kubek z ??usek kawy' id='ieco4' />
              </div>
          </div>

          <div className='column'>
            <label className='label main' htmlFor="kubek szklo" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Kubek szklany' id='kubek szklo'
            onInput={(event) => {

              if(document.getElementById('id4').style.display == 'none'){
              document.getElementById('id4').style.display = 'block';

              } else {
              document.getElementById('id4').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/kubek-szklo.png" width='100px' />
            <br />
            Kubek<br/> szklany
            </label>
              <div id='id4' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilo????:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilo???? kubek szklany' id='ieco5' />
              </div>
          </div>

          <div className='column'>
            <label className='label main' htmlFor="glosnik" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='G??o??nik z bambusa' id='glosnik'
            onInput={(event) => {

              if(document.getElementById('id5').style.display == 'none'){
              document.getElementById('id5').style.display = 'block';

              } else {
              document.getElementById('id5').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/glosnik.png" width='100px' />
            <br />
            G??o??nik<br/> z bambusa
            </label>
              <div id='id5' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilo????:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilo???? g??o??nik z bambusa' id='ieco6' />
              </div>
          </div>

        </div>





      </div>



          <hr />


            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="Ekologia" />
            <div hidden>
              <label>
                Don???t fill this out:{' '}
                <input name="bot-field"
                onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="columns">
            <div className='column' style={{marginLeft:'15px'}}>
            <div className="field">
              <label className="label" htmlFor={'name'}>
                Imi?? i Nazwisko<sup>*</sup>:
              </label>
              <div className="control">
                <input
                  className="input"
                  type={'text'}
                  name={'imi?? i nazwisko'}
                  onChange={this.handleChange}
                  id={'imi?? i nazwiskoXb'}
                  required={true}
                />
              </div>
              </div>

              <div className="field">
                <label className="label" htmlFor={'email'}>
                  Adres E-mail<sup>*</sup>:
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={'email'}
                    name={'adres email'}
                    onChange={this.handleChange}
                    id={'adres emailXb'}
                    required={true}
                  />
                </div>
              </div>

              <div className="field ">
                <label className="label" htmlFor={'phone'}>
                  Numer telefonu:
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={'number'}
                    name={'numer telefonu'}
                    onChange={this.handleChange}
                    id={'nrtelXb'}
                  />
                </div>
              </div>


            </div>

            <div className="field column" style={{marginLeft:'15px'}}>
              <label className="label" htmlFor={'message'}>
                Wiadomo????<sup>*</sup>:
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  type={'text'}
                  name={'wiadomo????'}
                  onChange={this.handleChange}
                  id={'wiadomo????Xb'}
                  required={true}
                  rows = "7"
                ></textarea>
              </div>



              <br />
              <div className="control">

              <label style={{fontSize: '12px'}} className='main'  htmlFor="privacyXb">   <input required={true} onChange={this.handleChange} type="checkbox" id="privacyXb" name="privacy" defaultChecked="true" value="true"/>Wyra??am zgod?? na przetwarzanie moich danych zgodnie z nasz?? <a className='link-green' href="/polityka-prywatnosci/">polityk?? prywatno??ci</a><sup>*</sup>.<span className="check"></span></label>            </div>

              <div className="field" style={{textAlign:'right'}}>



                <button className="button is-primary" type="submit" onSubmit={this.handleSubmit}>
                  Wy??lij
                </button>



              </div>


            </div>



            </div>

  </form>













      </>
    )
  }
}

export default EkoLogia;
