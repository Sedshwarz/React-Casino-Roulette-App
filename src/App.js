import './App.css';
import Context from './components/Context'
import BetBoard from './components/BetBoard'
import LastNumbers from './components/LastNumbers'
import Chips from './components/Chips'
import Balance from './components/Balance'
import Faucet from './components/FaucetModal';
import Board from './components/Board';
import Confetti from './components/Confetti'

function App() {
  return (
    <div className="App">
      <Context>
        <Balance />
        <Faucet />

        <div className='upper-container'>
          <Board />
          <Confetti />
        </div>

        <div className='bottom-conteiner'>
          <LastNumbers />
          <BetBoard />
          <Chips />
        </div>
      </Context>
    </div>
  );
}

export default App;
