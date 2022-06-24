import React, { useState } from "react";
import "../src/App.css"
import Footer from "./componentes/JS/Footer";

function App() {
  const [valScreen, setValueScreen] = useState('')
  const [result, setResult] = useState(0)
  const [cont, setCont] = useState(0)
  const [operation, setOperation] = useState(false)

  //COMPONENTS -> Button and Screen

  const ScreenVal = (val = 0, res = 0) => { //Exibirá o valor na tela (operações e resultados)
    return (
      <>
        <div className="cssScreen">
          <span className="cssOperation">{val}</span>
          <span className="cssRes">{res}</span>
        </div>
      </>
    );
  }

  const Btn = (label, onClick) => {
    return (
      <button className="cssBtn" onClick={onClick}>{label}</button>
    )
  }

  // FUNCTION-> Interative

  const addDigScreen = (dig) => {
    if ((dig === '+' || dig === '-' || dig === '*' || dig === '/') && operation === true) {
      setOperation(false) // A Operação foi executada!!!
      setValueScreen(result + dig)
      return
    } if (operation) {
      setValueScreen(dig)
      setOperation(false)
      return
    }
    const digitatedValueOnScreen = valScreen + dig
    setValueScreen(digitatedValueOnScreen)
  }

  const cleanMemoryCalc = () => {
    setValueScreen('')
    setResult(0)
    setCont(0)
    setOperation(false)
    return
  }

  const operationCalc = (ope) => {
    if (ope === 'bs') {  //Apaga o Ultimo Digito
      let vScreen = valScreen
      vScreen = vScreen.substring(0, (vScreen.length - 1))
      setValueScreen(vScreen)
      console.log(cont)
      setOperation(false)
      return
    } try { // Operação Critica para filtragem de erros!
      let res = eval(valScreen) // Avalia uma expressão e retorna seu valor
      setResult(res)
      setCont(res)
      setOperation(true)
    } catch {
      setResult('Erro')
    }
    return
  }

  return (
    <>
      <main className="cssContainer">
        <h3>Calculadora Matemática Simples</h3>
        {ScreenVal(valScreen, result)}
        <div className="cssButtons">
          {Btn('AC', cleanMemoryCalc)}
          {Btn('(', () => addDigScreen('('))}
          {Btn(')', () => addDigScreen(')'))}
          {Btn('/', () => addDigScreen('/'))}
          {Btn('7', () => addDigScreen('7'))}
          {Btn('8', () => addDigScreen('8'))}
          {Btn('9', () => addDigScreen('9'))}
          {Btn('*', () => addDigScreen('*'))}
          {Btn('4', () => addDigScreen('4'))}
          {Btn('5', () => addDigScreen('5'))}
          {Btn('6', () => addDigScreen('6'))}
          {Btn('-', () => addDigScreen('-'))}
          {Btn('1', () => addDigScreen('1'))}
          {Btn('2', () => addDigScreen('2'))}
          {Btn('3', () => addDigScreen('3'))}
          {Btn('+', () => addDigScreen('+'))}
          {Btn('0', () => addDigScreen('0'))}
          {Btn('.', () => addDigScreen('.'))}
          {Btn('<-', () => operationCalc('bs'))}
          {Btn('=', () => operationCalc('='))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
