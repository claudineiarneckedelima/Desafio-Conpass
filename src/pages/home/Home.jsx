import React, { Component } from 'react';
import './Home.css'

const Home = class App extends Component {
    render() {
        return (
            <div>
                <div id="bemvindo" className="display-6">Bem-vindo <strong>Claudinei</strong>!</div>
                <hr/>

                <div className="row">
                    <div className="col">
                    <div className="card text-white bg-primary mb-3 text-center" style={{maxWidth: '18rem'}}>
                        <div id="card-header1" className="card-header">Uauários</div>
                        <div className="card-body">
                        <h5 id="card-title1" className="card-title">300</h5>
                        <p className="card-text"></p>
                        </div>
                    </div>

                    </div>
                    <div className="col">
                    <div className="card text-white bg-secondary mb-3 text-center" style={{maxWidth: '18rem'}}>
                    <div id="card-header2" className="card-header">Serciços</div>
                    <div className="card-body">
                        <h5 id="card-title2" className="card-title">100</h5>
                        <p className="card-text"></p>
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card text-white bg-danger mb-3 text-center" style={{maxWidth: '18rem'}}>
                    <div id="card-header3" className="card-header">Clientes</div>
                    <div className="card-body">
                        <h5 id="card-title3" className="card-title">1010</h5>
                        <p className="card-text"></p>
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card text-white bg-info mb-3 text-center" style={{maxWidth: '18rem'}}>
                    <div id="card-header4" className="card-header">Financeiro</div>
                    <div className="card-body">
                        <h5 id="card-title4" className="card-title">10</h5>
                        <p className="card-text"></p>
                    </div>
                    </div>
                    </div>



                    <div className="col">
                    <div className="card text-white bg-success mb-3 text-center" style={{maxWidth: '18rem'}}>
                    <div id="card-header5" className="card-header">Cartões</div>
                    <div className="card-body">
                        <h5 id="card-title5" className="card-title">10</h5>
                        <p className="card-text"></p>
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card text-white bg-warning mb-3 text-center" style={{maxWidth: '18rem'}}>
                    <div id="card-header6" className="card-header">Notas</div>
                    <div className="card-body">
                        <h5 id="card-title6" className="card-title">10</h5>
                        <p className="card-text"></p>
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card text-white bg-dark mb-3 text-center" style={{maxWidth: '18rem'}}>
                    <div id="card-header7" className="card-header">Paticipações</div>
                    <div className="card-body">
                        <h5 id="card-title7" className="card-title">210</h5>
                        <p className="card-text"></p>
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card text-white bg-dark mb-3 text-center" style={{maxWidth: '18rem'}}>
                    <div id="card-header8" className="card-header">Desligamentos</div>
                    <div className="card-body">
                        <h5 id="card-title8" className="card-title">20</h5>
                        <p className="card-text"></p>
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card text-white bg-info mb-3 text-center" style={{maxWidth: '18rem'}}>
                    <div id="card-header9" className="card-header">Ligamentos</div>
                    <div className="card-body">
                        <h5 id="card-title9" className="card-title">30</h5>
                        <p className="card-text"></p>
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card text-white bg-info mb-3 text-center" style={{maxWidth: '18rem'}}>
                    <div id="card-header10" className="card-header">Homens</div>
                    <div className="card-body">
                        <h5 id="card-title10" className="card-title">200</h5>
                        <p className="card-text"></p>
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card text-white bg-info mb-3 text-center" style={{maxWidth: '18rem'}}>
                    <div id="card-header11" className="card-header">Mulheres</div>
                    <div className="card-body">
                        <h5 id="card-title11" className="card-title">100</h5>
                        <p className="card-text"></p>
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card text-white bg-info mb-3 text-center" style={{maxWidth: '18rem'}}>
                    <div id="card-header12" className="card-header">Atestados</div>
                    <div className="card-body">
                        <h5 id="card-title12" className="card-title">15</h5>
                        <p className="card-text"></p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home