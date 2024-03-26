import backarrow from '../Home/back-arrow.svg'
import { Link } from 'react-router-dom';

const HeaderBack = () => {
  return (


    <header className=''>

      <div className='backcontainer bottom-2xl top-2xl'>

        <Link to='/' className='backarr'> <img src={backarrow} alt="" /></Link>


      </div>

      <h1 className='proj-title bottom-2xl top-2xl white'>Accounting Software</h1>


    </header>


  );
}

export default HeaderBack;