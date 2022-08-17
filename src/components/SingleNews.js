import React from 'react'
import { Container} from 'react-bootstrap'
import './NewsList/NewsList.css'
import { useParams } from 'react-router-dom'

const SingleNews = ({newsList}) => {
    const { id } = useParams()
    let singleNews = newsList && id && newsList[id]
  return (
    <Container>
        {singleNews && (singleNews.url)}
    </Container>
  )
}

export default SingleNews
