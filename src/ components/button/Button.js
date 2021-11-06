import './button.sass'

const Button = ({syb, handleClick}) => {
    return (
        <button onClick={handleClick} className="button">
            {syb}
        </button>
    )
}

export default Button
