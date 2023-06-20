import './Partenairs.css'
import logo  from '../../img/logo_wommate.png'

const Partenairs = () => {
     return (
          <div className="partenairs">
               <div className="partenairs__title">
                    <h1 className='h1'>Partenaires</h1>
               </div>
               <div className="partenairs__content">
                   <img src={logo}   alt='wommate'/>
                   <img src={logo}   alt='wommate'/>
                   <img src={logo}   alt='wommate'/>
                   <img src={logo}   alt='wommate'/>
                   <img src={logo}   alt='wommate'/>
                   <img src={logo}   alt='wommate'/>
                   <img src={logo}   alt='wommate'/>
                   <img src={logo}   alt='wommate'/>
               </div>
          </div>
     )
}

export default Partenairs