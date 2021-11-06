import './calculator.sass'
import Button from '../button/Button'
import { logicMain } from '../../logic'
import { useState } from 'react'

const Calculator = () => {
    const sybArr= ['C', '(', ')', '/', '7', '8', '9','*', '4', '5', '6', '-', '1',
                '2', '3', '+', '<', '0', '.', '=']
    const [value, setValue] = useState('')

    const handleClick = e => {
        const char = e.target.innerText

        if (char !== 'C' && char !== '<' && char !== '=')
            setValue(value + char)
        else if (char === '<')
            setValue(value.slice(0, -1))
        else if (char === 'C')
            setValue('')
        else if (char === '=' && value !== '')
            setValue(() => logicMain(value) + '')
    }

    return (
        <div className="calculator">
            <input className='calculator__input' type="text" defaultValue={value}/>
            {
                sybArr.map((syb, i) => <Button handleClick={handleClick} key={i} syb={syb} />)
            }
        </div>
    )
}

export default Calculator
