import useSWR from 'swr'
import { CategoryType } from '../../../types/CategoryType'
import styles from './Categories.module.scss'
import Category from './Category/Category'

type CategoriesApiResponseType = {
  categories: CategoryType[]
}

const Categories: React.FC = () => {
  const { data } = useSWR<CategoriesApiResponseType>('/categories')

  if (!data) {
    return null
  }

  const categories = data.categories

  return (
    <section className={styles.container}>
      {categories.length ? (
        categories.map((category) => <Category key={category.title} category={category} />)
      ) : (
        <p>No categories found.</p>
      )}
    </section>
  )
}
export default Categories
