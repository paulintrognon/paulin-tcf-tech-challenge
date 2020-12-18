import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Question from '../../components/Organisms/Question/Question'

const IndexPage: NextPage = () => {
  const router = useRouter()
  return (
    <main>
      <Question questionId={router.query.id as string} />
    </main>
  )
}
export default IndexPage
