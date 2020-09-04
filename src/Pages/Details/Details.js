import React from "react";
import s from './Details.module.css'
import {Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter, Container, Row, Col, CardSubtitle, CardLink, CardText, ButtonGroup, Button} from "shards-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

let d = [
    {
        id: 1,
        item: {
            title: "Title1",
            date: "03.09.2020",
            grade: 36,
            image: "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg",
            user: "@username1",
            description: "Desctiption1",
            language: "Language1, Language2, Language3",
            contributor: "Contributor1, Contributor2, Contributor3"
        }
    },
    {
        id: 2,
        item: {
            title: "Title2",
            date: "04.09.2020",
            grade: 76,
            image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
            user: "@username2",
            description: "Desctiption2",
            language: "Language1, Language2, Language3",
            contributor: "Contributor1, Contributor2, Contributor3"
        }
    },
    {
        id: 3,
        item: {
            title: "Title3",
            date: "05.09.2020",
            grade: 45,
            image: "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            user: "@username3",
            description: "Desctiption3",
            language: "Language1, Language2, Language3",
            contributor: "Contributor1, Contributor2, Contributor3"
        }
    },
]

let Data = d.map((content) =>
    <Row>
        <Col md={4} xs={12} className={s.fix}>
            <Card className={s.full}>
                <CardHeader>#{content.id}</CardHeader>
                <CardBody>
                    <CardTitle>{content.item.title}</CardTitle>
                    <CardSubtitle>{content.item.date}</CardSubtitle>
                    <CardText>
                        <ButtonGroup className={s.fix}>
                            <Button pill outline theme={"warning"}>
                                <i color={"gold"} className="far fa-star"></i>
                                Stars:
                            </Button>
                            <Button pill outline theme={"warning"}>
                                {content.item.grade}
                            </Button>
                        </ButtonGroup>
                    </CardText>
                </CardBody>
                <CardImg bottom src={content.item.image}></CardImg>
                <CardFooter>
                    <CardLink>{content.item.user}</CardLink>
                </CardFooter>
            </Card>
        </Col>
        <Col className={s.fix}>
            <Card className={s.full}>
                <CardHeader>Details:</CardHeader>
                <CardBody>
                    <CardTitle>Опис:</CardTitle>
                    <CardText>{content.item.description}</CardText>
                    <CardTitle>Використовувані мови програмуваня:</CardTitle>
                    <CardText>{content.item.language}</CardText>
                </CardBody>
                <CardFooter>{content.item.contributor}</CardFooter>
            </Card>
        </Col>
    </Row>
)

const Details = () => {
    return (
        <Container>
            {Data}
        </Container>
    )
}

export default Details