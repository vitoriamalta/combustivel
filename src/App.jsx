import logo from './assets/bomba-de-gasolina.png';
import './App.css';
export default function App() {
  return( 
  <>
  <div className='Container'>
    <header> 
      <img src={logo} alt="Logo"/>
    </header>

      
    <main>
          <h1>Qual a melhor opção?</h1>

          <label htmlFor="alcool">Álcool(preço por litro); </label>
          <input type="text" name="alcool" id="alcool"/>

          <label htmlFor="gasolina">Gasolina(preço por litro); </label>
          <input type="text" name="gasolina" id="gasolina"/>

          <button>calcular</button>
        </main>
      </div>
    </>
  );
}