import useSWR from 'swr'
import { CategoryType } from '../../../types/CategoryType'
import styles from './Categories.module.scss'

type CategoriesApiResponseType = {
  categories: CategoryType[]
}

const Categories: React.FC = () => {
  const { data, isValidating } = useSWR<CategoriesApiResponseType>('/categories')

  if (isValidating) {
    return <p>Chargement...</p>
  }

  return (
    <section className={styles.container}>
      {data
        ? data.categories.map((category) => <p key={category.title}>{category.title}</p>)
        : null}
    </section>
  )
}
export default Categories
