import styles from './TextInput.module.scss'

interface Props {
  message: string
  onChange: (value: string) => void
  onDelete: () => void
}
const TextInput: React.FC<Props> = ({ message, onChange, onDelete }) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Text</span>
        <button className={styles.deleteButton} type="button" onClick={onDelete}>
          X
        </button>
      </div>
      <p>
        <input className={styles.input} type="text" value={message} onChange={handleOnChange} />
      </p>
    </div>
  )
}
export default TextInput
