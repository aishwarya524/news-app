import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import '../NewsList/NewsList.css'
import imageNotFound from '../../assets/image-not-found.png'

const NewsList = ({newsList}) => {
  return (
    <Container>
      <Row>
        { newsList && newsList.map((singleNews, index) => (
          <Col md={4} key={index} className="single-news">
            <Card style={{width: "18rem"}}>           
                <Card.Img variant="top" src={singleNews.urlToImage ? singleNews.urlToImage : imageNotFound} />
                <Card.Body className="btn-wrapper">
                <Card.Title>
                  {
                  singleNews.title && singleNews.title.length > 100 ? 
                  `${singleNews.title.slice(0, 100)}...` 
                  : singleNews.title
                  }
                  </Card.Title>
                <Card.Text>
                  {
                  singleNews.description && singleNews.description.length > 100 ? 
                  `${singleNews.description.slice(0, 180)}...` 
                  : singleNews.description
                  }
                  </Card.Text>
                <Link className="btn btn-dark" to={`/news/${singleNews.id}`}>Read more</Link>
                </Card.Body>
              </Card>
          </Col>
        ))
        }
      </Row>
    </Container>
  )
}

export default NewsList
