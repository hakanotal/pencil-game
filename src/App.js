import React from 'react';
import './App.css';
import Game from './Game';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.game = new Game()
  }

  componentDidMount = () => {
    setInterval(() => {
      this.game.update();
      this.setState({});
    }, 100)
  }

  update = () => {
    this.game.update();
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          KALEM DİYARI
        </header>
        
        <div style={{marginTop: "12px"}}>
          <div>Üretim</div>  <hr />        
          <div>
            <table>
              <tr>
                <td style={{width: "150px"}}>Kalem / Saniye: </td> {this.game.lastProduceRate}
              </tr> 
              <tr>
                <td>Toplam Odun: </td> 
                <td>{this.game.material}</td>
                <button style={{marginLeft: "12px"}}
                disabled={this.game.money<this.game.materialCost} 
                onClick={this.game.buyMaterial}>
                <div> <img width="64px" src='./wood.ico' alt=""/></div>
                Odun Satın Al ({this.game.materialCost} ₺)
                </button>
              </tr>
              <tr>
                <td>Üretilen Kalem: </td>
                <td>{this.game.producedKalem}</td>
                <button style={{marginLeft: "12px"}} 
                disabled={this.game.material<this.game.unitCost} 
                onClick={this.game.makeKalem}>
                <div> <img width="64px" src='./pencil.ico' alt=""/></div>
                Kalem Üret ({this.game.unitCost} odun)     
                </button>
              </tr>
              <tr>
                <td>Toplam Makine: </td>
                <td>{this.game.totalMachines}</td>
                <button style={{marginLeft: "12px"}}
                disabled={this.game.money<this.game.machineCost || this.game.totalMachines > 9} 
                onClick={this.game.buyMachine}>
                <div> <img width="64px" src='./machine.ico' alt=""/></div>
                Makine Satın Al ({this.game.machineCost} ₺)
                </button>
              </tr>
            </table>
          </div>
        </div>

        <div style={{marginTop: "48px", marginBottom: "12px"}}>
          <div>Satış</div><hr />
          <div>
            <table>
              <tr>
                <td style={{width: "150px"}}>Kasadaki Para: </td> {this.game.money} ₺
              </tr> 
              <tr>
                <td>Depodaki Kalem:</td> {this.game.currentKalem} adet
              </tr> 
              <tr>
                <td>Talep: </td> % {this.game.demandRate}
              </tr>
              <tr>
                <td>Satış Fiyatı: </td> {this.game.price} ₺
                <button style={{marginLeft: "12px"}}
                onClick={this.game.increasePrice}>
                Arttır
                </button>
                <button style={{marginLeft: "12px"}}
                disabled={this.game.price <= 1} 
                onClick={this.game.decreasePrice}>
                Azalt
                </button>
              </tr>
            </table>
          </div>
        </div>        

      </div>
    );
  }
}

export default App;
