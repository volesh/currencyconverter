import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {CurrencyInput, Header} from "./components";
import {currencyActions} from "./redux";
import css from './App.module.css'


function App() {

    const {rates} = useSelector(state => state.currencyReduce)
    const dispatch = useDispatch()

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('UAH');
    const [currency2, setCurrency2] = useState('USD');

    useEffect(()=>{
        dispatch(currencyActions.getCurrency())
    },[])

    useEffect(() => {
        if (!!rates) {
            function init() {
                handleAmount1Change(1);
            }
            init();
        }
    }, [rates]);



    function format(number) {
        return number.toFixed(2);
    }

    function handleAmount1Change(amount1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setAmount1(amount1);
    }

    function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setCurrency1(currency1);
    }

    function handleAmount2Change(amount2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setAmount2(amount2);
    }

    function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setCurrency2(currency2);
    }


    return (
        <div className={css.box}>
            {rates?
                <div className={css.innerBox}>
                    <Header/>
                    <CurrencyInput
                        onAmountChange={handleAmount1Change}
                        onCurrencyChange={handleCurrency1Change}
                        currencies={Object.keys(rates)}
                        amount={amount1}
                        currency={currency1} />
                    <CurrencyInput
                        onAmountChange={handleAmount2Change}
                        onCurrencyChange={handleCurrency2Change}
                        currencies={Object.keys(rates)}
                        amount={amount2}
                        currency={currency2} />
                </div>:
                <div className={css.innerBox}>...Loading</div>
            }
        </div>
  );
}

export default App;
