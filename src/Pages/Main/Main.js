import React from "react";
import s from './Main.module.css'
import {
    Button, ButtonGroup,
    Card, CardBody, CardFooter,
    CardHeader, CardSubtitle, CardText,
    CardTitle,
    Col,
    Container,
    FormInput,
    InputGroup,
    InputGroupAddon,
    Row
} from "shards-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleRight, faChevronRight, faHourglass, faSearch} from "@fortawesome/free-solid-svg-icons";

let data = [
    {
        id: 1,
        item: {
            title: "Title1",
            grade: 48,
            date: "04.09.2020",
            link: "#"
        }
    },
    {
        id: 2,
        item: {
            title: "Title2",
            grade: 46,
            date: "04.09.2020",
            link: "#"
        }
    },
    {
        id: 3,
        item: {
            title: "Title3",
            grade: 37,
            date: "04.09.2020",
            link: "#"
        }
    },
    {
        id: 4,
        item: {
            title: "Title4",
            grade: 45,
            date: "04.09.2020",
            link: "#"
        }
    },
    {
        id: 5,
        item: {
            title: "Title5",
            grade: 78,
            date: "04.09.2020",
            link: "#"
        }
    },
    {
        id: 6,
        item: {
            title: "Title3",
            grade: 73,
            date: "04.09.2020",
            link: "#"
        }
    },
]

let Data = data.map(content =>
    <Col md={4} xs={12} className={s.Col}>
        <Card className={s.Card}>
            <CardHeader>#{content.id}</CardHeader>
            <CardTitle>{content.item.title}</CardTitle>
            <CardSubtitle>{content.item.date}</CardSubtitle>
            <CardBody>
                <ButtonGroup>
                    <Button pill outline theme={"warning"}>
                        <i color={"gold"} className="far fa-star"></i>
                        Stars:
                    </Button>
                    <Button pill outline theme={"warning"}>
                        {content.item.grade}
                    </Button>
                </ButtonGroup>
            </CardBody>
            <CardFooter>
                <Button theme={"dark"} pill outline>
                    <i className="fab fa-github"></i>&nbsp;
                    Github&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faChevronRight} />
                </Button>
            </CardFooter>
        </Card>
    </Col>
)

const Main = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className={s.h1}>Home page</h1>
                </Col>
            </Row>
            <Row>
                <Col md={4} xs={8} className={s.Center}>
                    <InputGroup size="lg" seamless className={s.InputGroup}>
                        <FormInput placeholder="Шукати..." className={s.FormInput}/>
                        <InputGroupAddon type={"append"}>
                            <Button theme={"warning"} pill outline>
                                <FontAwesomeIcon icon={faSearch}/>
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                {Data}
            </Row>
        </Container>
    )
}

export default Main