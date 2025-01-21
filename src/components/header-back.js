import Head from '../Home/head';
import Head2 from '../Head2';
import Precision from '../Home/precision';
import ProjectGrid from '../Home/projectGrid'
import Aboutme from '../Home/aboutme'
import { useEffect } from 'react';
import Skillsnew from "../Home/Skillnew"
import Projectstack from "../Home/Projectstack"
import Du from './Projects/Du';

import { Link } from 'react-router-dom';

const HeaderBack = () => {
  return (


    <header className=''>

      <div className='backcontainer bottom-2xl top-2xl'>

        <Link to='/Home' className='backarr'>  </Link>


      </div>

      <h1 className='proj-title bottom-2xl top-2xl white'>Accounting Software</h1>


    </header>


  );
}

export default HeaderBack;