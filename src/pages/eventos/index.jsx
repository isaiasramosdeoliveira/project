import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Card } from "react-bootstrap";
import style from "./Evento.module.css";
import http from "../../config/http";

const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [paginas, setPaginas] = useState(6);
  const handleCarregarMais = () => {
    let numeroDePaginas = paginas;
    numeroDePaginas += 6;
    setPaginas(numeroDePaginas);
  };
  useEffect(() => {
    const pegarEventos = async () => {
      http.get("/eventos").then((res) => {
        const dados = res.data.dados.splice(0, paginas);
        setEventos(dados);
      });
    };
    pegarEventos();
  }, [paginas]);
  return (
    <>
      <section className={style.cards}>
        {eventos.map((evento) => (
          <Card key={evento.id} className={style.card}>
            <Card.Header>{evento.descricaoTipo}</Card.Header>
            <Card.Body className={style.card_body}>
              <div>
                <Card.Title></Card.Title>
                <Card.Text className={style.card_text}>
                  {evento.descricao}
                </Card.Text>
              </div>
              <div className={style.table_content}>
                <Table className={style.table} responsive="sm">
                  <thead>
                    <tr>
                      <th>Local</th>
                      <th>Situação</th>
                      <th>Início</th>
                      <th>Fim</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{evento.localCamara.nome}</td>
                      <td>{evento.situacao}</td>
                      <td>{evento.dataHoraInicio}</td>
                      <td>{evento.dataHoraFim}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        ))}
        <div className="d-flex w-100 justify-content-center">
          <Button variant="success" size="md" onClick={handleCarregarMais}>
            Carregar mais Eventos
          </Button>
        </div>
      </section>
    </>
  );
};

export default Eventos;
