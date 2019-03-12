import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Routes from './Routers';
import Logo from './layout/logo/Logo';
import Header from './layout/header/Header';
import Nav from './layout/nav/Nav';
import Main from './layout/main/Main';
import Footer from './layout/footer/Footer';
import Hotspot from './components/hotspot/Hotspot';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      status: 0,
      actionMarker: false,
      displayForm: 'none',
      modeView: 'blobk',
      y: 0,
      x: 0,
      lastId: null,
      lastElementId: null,
      elementsMarkers: [],
      elementPopover : []
    }

    this.mouseAction = this.mouseAction.bind(this);
    this.mouseEvent = this.mouseEvent.bind(this);
    this.modeView = this.modeView.bind(this);
    this.widthHeight = this.widthHeight.bind(this);
    this.random = this.random.bind(this);
    this.formRegister = this.formRegister.bind(this);
    this.idGenerate = this.idGenerate.bind(this);
    this.markerAction = this.markerAction.bind(this);
    this.formExit = this.formExit.bind(this);
  }

  widthHeight = () => { //pegao tamanho da tela
    return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    }
  }

  mouseAction = () => this.setState({ actionMarker: true }); //evento dobotão adicionar

  mouseEvent = (e) => { //evento executado após evento do dotão mais, pega posição de tela item earmazena no state
    if(this.state.actionMarker === false || e.target.id === 'addMarker')
        return

        const status = this.random();
        const x = e.clientX - 19;
        const y = e.clientY - 19;

        
        this.setState({ status: status, x: x, y: y, lastElementId: e.target.id });
        this.setState({ actionMarker: false, displayForm: 'block' });

  }

  
  modeView = () => { //cria uma categoria para os marcadores
    const wh = this.widthHeight();

    if(wh.width > 768)
      return 'PC';
    else if(wh.width < 768)
      return 'MOBILE';
  }

  random = () => (Math.floor(Math.random() * 100) + 1); //gera número randomico

  idGenerate = () => this.random(); //geraida randomico

  markerAction = (e) => { //ação do marcador para se auto remover
    this.setState({elementsMarkers: this.state.elementsMarkers.filter((t, i) => t.key != e )})
  }

  formRegister = (event) => { //registra um novo marcador
    let arr = this.state.elementsMarkers.slice()

    arr.push(<div alt={document.querySelector(".title").value+" - "+document.querySelector(".description").value} id={'marker'+arr.length} key={arr.length} style={{top: this.state.y+'px', left: this.state.x+'px' }} 
    className={"text-center marker "+this.modeView()} onClick={() => this.markerAction(arr.length -1)}>
    <i className="fa fa-question fa-2x"></i></div>);

    
    this.setState({ elementsMarkers: arr }, function(){//após add elementos no state, os campos do formúlario são limpos
      document.querySelector(".title").value = "";
      document.querySelector(".description").value = "";
      this.setState({displayForm: 'none'})
    });
  }

  formExit = () => this.setState({displayForm: 'none'})
  

  render() {
    const { elementsMarkers, displayForm, lastElementId } = this.state; //destrructor

    
    return (
        <BrowserRouter>
            <div className="app" onMouseUp={(e) => this.mouseEvent(e)}>

                {/*layouts*/}
                <Logo />
                <Header icon="home" title="Início" subtitle="Subtítulo da página" />
                <Nav />
                <Main>
                <Routes />
                </Main>
                <Footer />
                <Hotspot tagSelected={lastElementId} />

                <button id="addMarker" className="addMarker btn btn-primary" onClick={this.mouseAction}><i className="fa fa-plus fa-2x"></i></button>

                {/*Formulário para inerir marcadores*/}
                <div className="hotspot"  style={{display: displayForm}} >
                <button onClick={this.formExit} className="btn btn-danger pull-right close"><i className="fa fa-close fa-1x"></i></button><br/><br/>
                  <div className="text-center"><br/><br/><br/>
                    Title:<br/>
                    <input className="title form-control" type="text" /><br/>
                    Descrição:<br/>
                    <textarea className="description form-control"/><br />
                    <label>
                      Tipo de Dispositivo: <br/>
                      <select className="device form-control">
                        <option value="pc">PC</option>
                        <option value="mobile">Mobile</option>
                      </select>
                    </label><br/><br/>
                    <button onClick={this.formRegister} className="btn btn-danger pull-primary">Cadastrar</button>
                    <br/><br/>
                    Tag Selecionada: <strong>{lastElementId}</strong>
                  </div>
              
              </div>
                {elementsMarkers}{/*mostrar marcadores*/}
            </div>
        </BrowserRouter>
    )
  }
}

export default App
