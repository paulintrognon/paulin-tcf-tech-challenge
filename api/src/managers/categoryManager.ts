import { CategoryType } from '../types/CategoryType'
import { categories } from '../db'

/**
 * Return all categories from the database, including their questions and answers
 */
export function getCategories(): CategoryType[] {
  return categories
}
