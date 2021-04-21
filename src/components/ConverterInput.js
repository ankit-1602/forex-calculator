import React from 'react'

function ConverterInput({currencyOptions}) {
    return (
        <div>
            <input type="number" className="input" />
            <select>
                <option value="hi">Currency</option>
            </select>
        </div>
    )
}

export default ConverterInput
