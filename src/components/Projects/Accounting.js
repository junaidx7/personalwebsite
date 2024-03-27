import Title from '../Projects/pieces/Title';
import TitlePara from '../Projects/pieces/Title-para';
import Imagegrid4 from '../Projects/pieces/imagegrid4';
import Title2col from '../Projects/pieces/Title-2col';
import Role from '../Projects/pieces/role';
import Image from '../Projects/pieces/image';
import BlockText from '../Projects/pieces/BlockText';
import ImageC from '../Projects/pieces/Image-constricted';
import Sidebar from '../Projects/pieces/sidebar';
import { useEffect } from 'react';
import HeaderBack from '../Home/header-back'
import { Link } from 'react-router-dom';
import HeaderProduct from '../Projects/header-product'
import { accountingContent } from '../Projects/content';


const Accounting = () => {

    useEffect(() => {


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, []);

    function handleScroll() {
        const wrapper = document.querySelector(".wrapper");
        if (window.scrollY + window.innerHeight > wrapper.offsetHeight) {
            document.body.classList.add("tight");
        } else {
            document.body.classList.remove("tight");
        }
    }



    return (


        <div>
            <div className='top-xl'></div>

            <HeaderProduct></HeaderProduct>

            <div className='product-title-container'>

                <h1 className='product-title  white w500 top-3xl bottom-2xl '>Simple online accounting for every business.</h1>

            </div>



            <Imagegrid4></Imagegrid4>

            <section >

                <div className='accounting-section'>

                    <Sidebar></Sidebar>

                    <div className='pieces-div'>

                       
                        <BlockText></BlockText>

                        <BlockText title={accountingContent.intro_title} content={accountingContent.intro_paragraph} />


                        <Role></Role>
                        <TitlePara></TitlePara>
                        <Title2col></Title2col>
                        <TitlePara></TitlePara>
                        <ImageC></ImageC>
                        <TitlePara></TitlePara>
                        <div className='bottom-3xl'></div>
                       

                    </div>

                </div>

            </section>


        </div>




    );

}

export default Accounting;