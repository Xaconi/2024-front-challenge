import styles from './button.module.scss'

export default function Button(props: { text: string, click: () => void }) {
    return (
        <button className={styles.khuiBtn} onClick={props.click}>
            {props.text}
        </button>
    )
}
