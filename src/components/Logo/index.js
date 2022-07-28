//Logo
import Image from 'next/image'
import Link from 'next/link';
import styles from '../Logo/logo.module.css';


export default function Logo() {

 


    return (<div className={styles.logoContainer}>

<div className={styles.logo}>
<Link href='/'>
<a>
<Image 
    src='/media/icons/LogoMain.svg'
    width={1133}
    height={339}
    layout='responsive'
/>


</a>
</Link>



</div>
















       
    </div>);
}