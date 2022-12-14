import React from 'react';

function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}

function quitModal(){
  document.getElementById('Projektowaniegraficzne').style.display = 'none';
  document.getElementById('ProjektowaniegraficzneX').style.display = 'block';

  setTimeout(() => {
  document.getElementById('ProjektowaniegraficzneX').style.display = 'none';
  document.getElementsByClassName('ofnav1')[3].style.backgroundColor ='white';
  document.getElementsByClassName('ofnav1')[3].style.color ='#00d1b2';
  document.getElementsByClassName('ofnav1')[3].firstChild.style.filter = 'brightness(1) invert(0)';
  },1500);

}


class ProjGraf extends React.Component {

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
        name="Projektowanie graficzne"
        id = "Projektowaniegraficzneform"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
      <input name='Projektowanie Graficzne' id='projgraf' className='subtitle' placeholder='Projektowanie graficzne:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px',minWidth:'100%'}} />


              <label  className='label is-size-10' style={{marginLeft:'15px'}}>Rodzaj projektu:</label>

          <br />

      <div className='field columns' style={{marginLeft:'15px'}}>

          <br />



          <div className='control column' style={{display:'block',marginLeft:'3%',flexWrap:'wrap'}}>
            <label htmlFor="logo" className='label main' style={{fontSize:'14px'}}>Logo
              <input className='checkbox' type='checkbox' name='Logo' id='logo'
              onChange={this.handleChange} />
              <span className="check"></span>
              </label>

              <label htmlFor="ksiegaznaku" className='label main' style={{fontSize:'14px'}}>Ksi??ga znaku
                <input className='checkbox' type='checkbox' name='Ksi??ga znaku' id='ksiegaznaku'
                onChange={this.handleChange} />
                <span className="check"></span>
                </label>

                <label htmlFor="wizytowki" className='label main' style={{fontSize:'14px'}}>Wizyt??wki
                  <input className='checkbox' type='checkbox' name='Wizyt??wki' id='wizytowki'
                  onChange={this.handleChange} />
                  <span className="check"></span>
                  </label>

                  <label htmlFor="papierfirmowy" className='label main' style={{fontSize:'14px'}}>Papier firmowy
                    <input className='checkbox' type='checkbox' name='Papier firmowy' id='papierfirmowy'
                    onChange={this.handleChange} />
                    <span className="check"></span>
                    </label>

                    <label htmlFor="teczka firmowa" className='label main' style={{fontSize:'14px'}}>Teczka firmowa
                      <input className='checkbox' type='checkbox' name='Teczka' id='teczka firmowa'
                      onChange={this.handleChange} />
                      <span className="check"></span>
                      </label>

          </div>


          <div className='control column' style={{display:'block',marginLeft:'3%',flexWrap:'wrap'}}>
                      <label htmlFor="kalendarze" className='label main' style={{fontSize:'14px'}}>Kalendarze
                        <input className='checkbox' type='checkbox' name='Kalendarze' id='kalendarze'
                        onChange={this.handleChange} />
                        <span className="check"></span>
                        </label>
                        <label htmlFor="ulotki" className='label main' style={{fontSize:'14px'}}>Ulotki
                          <input className='checkbox' type='checkbox' name='Ulotki' id='ulotki'
                          onChange={this.handleChange} />
                          <span className="check"></span>
                          </label>
                          <label htmlFor="katalogi" className='label main' style={{fontSize:'14px'}}>Katalogi
                            <input className='checkbox' type='checkbox' name='Katalogi' id='katalogi'
                            onChange={this.handleChange} />
                            <span className="check"></span>
                            </label>
                            <label htmlFor="banery" className='label main' style={{fontSize:'14px'}}>Bannery reklamowe
                              <input className='checkbox' type='checkbox' name='Banery reklamowe' id='banery'
                              onChange={this.handleChange} />
                              <span className="check"></span>
                              </label>
                              <label htmlFor="okleinasamochodu" className='label main' style={{fontSize:'14px'}}>Okleina samochodu
                                <input className='checkbox' type='checkbox' name='Okleina samochodu' id='okleinasamochodu'
                                onChange={this.handleChange} />
                                <span className="check"></span>
                                </label>


              </div>
              <div className='control column' style={{display:'block',marginLeft:'3%',flexWrap:'wrap'}}>
                                <label htmlFor="okleinabiura" className='label main' style={{fontSize:'14px'}}>Okleina biura
                                  <input className='checkbox' type='checkbox' name='Okleina biura' id='okleinabiura'
                                  onChange={this.handleChange} />
                                  <span className="check"></span>
                                  </label>
                                  <label htmlFor="systemy wystawiennicze" className='label main' style={{fontSize:'14px'}}>Systemy wystawiennicze
                                    <input className='checkbox' type='checkbox' name='Systemy wystawiennicze' id='systemy wystawiennicze'
                                    onChange={this.handleChange} />
                                    <span className="check"></span>
                                    </label>
                                    <label htmlFor="infografiki" className='label main' style={{fontSize:'14px'}}>Infografiki
                                      <input className='checkbox' type='checkbox' name='infografiki' id='infografiki'
                                      onChange={this.handleChange} />
                                      <span className="check"></span>
                                      </label>
                                      <label htmlFor="Newsletter" className='label main' style={{fontSize:'14px'}}>Newsletter
                                        <input className='checkbox' type='checkbox' name='Newsletter' id='Newsletter'
                                        onChange={this.handleChange} />
                                        <span className="check"></span>
                                        </label>
                                        <label htmlFor="strona www" className='label main' style={{fontSize:'14px'}}>Strona internetowa
                                          <input className='checkbox' type='checkbox' name='Strona www' id='strona www'
                                          onChange={this.handleChange} />
                                          <span className="check"></span>
                                          </label>

            </div>


        </div>






                <div className='field' style={{marginLeft:'15px'}}>



                <div className='columns'>


                <div className='column'>
                <label className='label is-size-10'>Cel projektu:</label>
                <input className='input' onChange={this.handleChange} placeholder='kampania reklamowa, rebranding, identyfikacja wizualna... ' type='text' name='Cel projektu' id='cel projekt??w' />
                </div>

                <div className='column'>
                <label className='label'>Termin realizacji:</label>
                  <input className='button-green date' type='date' name='deadline' id='deadline'
                  onChange={this.handleChange}
                   />
                   </div>






                  </div>
                  <div className=''>
                    <div className='control'>
                    <label className='label is-size-10'>Bud??et:</label>
                    <input style={{width:'100%'}} min='1500' placeholder='25000' max='50000' id="range1" className='range' name="bud??et" type="range"
                    onInput={(event) => {console.log(document.getElementById('range1').value);
                    document.getElementById('rvalueid1').innerText = document.getElementById('range1').value + ' z??';
                  }} onChange={this.handleChange}
                    />
                    <output style={{color:'#00d1b2',textAlign:'center'}} name="rvalueid1" id="rvalueid1">25000 z??</output>

                    </div>
                  </div>

                </div>
                <br />

                {/* file input fields */}


          <hr />
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Projektowanie graficzne" />
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
                id={'imi?? i nazwiskoVII'}
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
                  id={'adres emailVII'}
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
                  id={'nrtelVII'}
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
                id={'wiadomo????VII'}
                required={true}
                rows = "7"
              ></textarea>
            </div>



            <br />
            <div className="control">

            <label style={{fontSize: '12px'}} className='main'  htmlFor="privacyVII">   <input required={true} onChange={this.handleChange} type="checkbox" id="privacyVII" name="privacy" defaultChecked="true" value="true"/>Wyra??am zgod?? na przetwarzanie moich danych zgodnie z nasz?? <a className='link-green' href="/polityka-prywatnosci/">polityk?? prywatno??ci</a><sup>*</sup>.<span className="check"></span></label>

            </div>

            <div className="field" style={{textAlign:'right'}}>


              <button className="button is-primary" type="submit" onSubmit={this.handleSubmit} >
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

export default ProjGraf;
