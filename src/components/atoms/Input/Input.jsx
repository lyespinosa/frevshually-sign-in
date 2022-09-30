import './style.css'

function Input({type, value, placeholder = ""}) {
    return (
      <>
          <input className="input" type={type} value={value} placeholder={placeholder} required/>
      </>
    )
  }
  
  export default Input