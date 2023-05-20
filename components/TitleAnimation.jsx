import styles from './TitleAnimation.module.css';

export default function TitleAnimation({ title, boxStyle={}}){
    return (
    <div className={styles.box} style={{...boxStyle, width: '100%'}}>
        {title.split("").map((letter,i) => {
            if(letter === letter.toUpperCase() && letter !== " "){
                if(letter === "F"){
                    return <span className={styles.normalSmall} key={i+10}>{letter}</span>
                }
                return <span className={styles.normal} key={i+10}>{letter}</span>
            }
            if(letter === "e" || letter === "r" || letter === "t"){
                return <span className={styles.smallLetters} key={i+10}>{letter}</span>
            }
            return <span className={styles.hidden} key={i+10}>{letter}</span>
        })}
    </div>
    );
}
