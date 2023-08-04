import './style.css'
import logo from '../../assets/logo.jpeg'

const Loading = () => {
    return (
        <div className='spinner-container'>
            <div className='loading-spinner'><img src={logo} alt="logo" className='loadingIMG'/></div>
        </div>
    )
}

export default Loading