import Title from '../../atoms/Title/Title'
import './style.css'

function Footer() {

    return (
        <div className='footer-container'>
             <Title level={"h1"} text={"Frevshually"}/>
             <div className="icons">
                <i class="bi bi-instagram"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>   
                <i class="bi bi-github"></i>
             </div>
        </div>
    )

}


export default Footer