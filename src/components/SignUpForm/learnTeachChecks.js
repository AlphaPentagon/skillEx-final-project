import styles from './signUpForm.module.css';


export default function LearnTeachChecks() {

    const categories = [    'Cooking','DIY','Languages',
                            'Business', 'Gardening','Construction',
                            'Craft','IT','Martial Arts' ]



    return (<div className={styles.containerChecks}>




        {categories.map((item)=> {
            let learn = `learn${item}}`;
            let teach = `teach${item}}`;
            return (


    <div className={styles.checks}>

        <label className={styles.containerCheckbox1}>
            <input type="checkbox" name="learn" value={learn} />
            <span />
        </label>


        <p>{item}</p>


        <label>
        <input type="checkbox" name="teach" value={teach} />
        </label>





            </div>
            
            
            );
        })}




    </div>);
}