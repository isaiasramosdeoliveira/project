import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "../styles/Home.module.css";
import { Card } from "react-bootstrap";
import Link from "next/link";
import Header from "../components/Header";
function Home() {
  const slideStyled = {
    maxWidth: "700px",
    margin: "auto",
    marginBottom: "-20px",
    background: `rgb(225, 222, 222)`,
    color: 'black'
  };
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="w-100">
      <Carousel
        className={style.carousel}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <Link href="/eventos">
            <img
              className={`${style.imgCard} d-block w-100`}
              src="/img/eventos.jfif"
              alt="imagem de evento"
            />
          </Link>
          <Carousel.Caption style={slideStyled}>
            <h3>Eventos</h3>
            <p>Veja uma descrição dos principais Eventos do momento.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link href="/partidos">
            <img
              className={`${style.imgCard} d-block w-100`}
              src="/img/partidos.jfif"
              alt="imagem de partido"
            />
          </Link>
          <Carousel.Caption style={slideStyled}>
            <h3>Partidos</h3>
            <p>Principais partidos em ação.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link href="/orgaos">
            <img
              className={`${style.imgCard} d-block w-100`}
              src="https://jcconcursos.com.br/media/_versions/noticia/orgaos-publicos-estagio_widelg.jpg"
              alt="Third slide"
            />
          </Link>
          <Carousel.Caption style={slideStyled}>
            <h3>Orgãos</h3>
            <p>Principais orgãos e suas descrições.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <div
        className={`${style.cardContent} d-flex gap-4 w-100 justify-content-center flex-grap`}
      >
        <Card className={style.card}>
          <Link href="deputados">
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaVYGSGe50M2F9kgtoViXpdFj59vnmUX3Bw&usqp=CAU"
            />
          </Link>
          <Card.Body>
            <Card.Title>Deputados</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <Link href="orgaos">
            <Card.Img
              variant="top"
              src="https://jcconcursos.com.br/media/_versions/noticia/orgaos-publicos-estagio_widelg.jpg"
            />
          </Link>
          <Card.Body>
            <Card.Title>Orgãos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <Link href="votacoes">
            <Card.Img
              variant="top"
              src={
                "https://www.tre-al.jus.br/videos/tre-al-reuniao-selo-verde-partidos/@@images/fe41a705-ddbb-48de-a140-0fed5cadfe02.jpeg"
              }
              alt="Imgem de votação"
            />
          </Link>
          <Card.Body>
            <Card.Title>Votações</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <Link href="partidos">
            <Card.Img
              variant="top"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNz3WQJt8-Bun3smoitxvLMBSR7ArIdcc2Pw&usqp=CAU"
              }
              alt="imagem de partido"
            />
          </Link>
          <Card.Body>
            <Card.Title>Partidos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
