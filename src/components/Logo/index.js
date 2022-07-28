//Logo
import Image from 'next/image'
import styles from '../Logo/logo.module.css';


export default function Logo() {



    return (<div className={styles.logoContainer}>

<div className={styles.logoText}>

        <p className="logo">SkillEx</p>
        <p className='tagLine'>The Knowhow Exchange</p>

</div>



<div className={styles.logoImage}>

        <Image 
            src='/media/icons/LightBulbFAVICON.svg'
            // src='../../../public/media/icons/LightBulbFAVICON.svg'
            width={100}
            height={100}
            
            
            
            />
            </div>
        


       
    </div>);
}