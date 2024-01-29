import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrency from './hooks/useCurrency'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currency = useCurrency(from)

  const options = Object.keys(currency)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currency[to].toFixed(4))
  }

  return (
    <div className='flex '>
        <div className='left w-1/2 h-screen bg-cover bg-no-repeat'
        style={{
            backgroundImage:`url('https://images.pexels.com/photos/17473023/pexels-photo-17473023/free-photo-of-indian-masala-tea.jpeg')`,
        }}>
            <div className='text-9xl font-bold font-sans text-yellow-600 pt-14'>
                Hello World!
                This is my Currency Converter App
            </div>
        </div>
        <div
        className="w-1/2 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3521353/pexels-photo-3521353.jpeg')`,
        }}
    >
        <div className="w-2/3 ">
            <div className="w-full p-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 ">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full my-8">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 pb-2 text-2xl"
                            onClick={swap}
                        >
                            Swap
                        </button>
                    </div>
                    <div className="w-full my-8">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-2xl">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
    </div>
);
}

export default App
