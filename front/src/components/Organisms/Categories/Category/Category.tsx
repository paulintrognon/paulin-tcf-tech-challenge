import Link from 'next/link'
import { CategoryType } from '../../../../types/CategoryType'
import RoundedContainerBox from '../../../Atoms/RoundedContainerBox/RoundedContainerBox'
import styles from './Category.module.scss'

interface Props {
  category: CategoryType
}
const Category: React.FC<Props> = ({ category }) => {
  return (
    <div className={styles.container}>
      <RoundedContainerBox>
        <h2 className={styles.title}>{category.title}</h2>
        {category.questions.map((question) => (
          <Link href={`/question/${question.id}`} key={question.id}>
            <a className={styles.question}>{question.question}</a>
          </Link>
        ))}
      </RoundedContainerBox>
    </div>
  )
}
export default Category
