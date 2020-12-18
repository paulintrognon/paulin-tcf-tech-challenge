import styles from './RoundedContainerBox.module.scss'

const RoundedContainerBox: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
export default RoundedContainerBox
