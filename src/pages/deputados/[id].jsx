import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Table } from "react-bootstrap";
import style from "./Deputado.module.css";
import http from "../../config/http";
import Link from "next/link";
import { useRouter } from "next/router";

const Deputado = () => {
  const params = useParams();
  const [deputado, setDeputado] = useState([]);
  const {id} = useRouter().query;
  useEffect(() => {
    const pegarDeputados = async () => {
      http.get("/deputados").then((res) => {
        const dados = res.data.dados.find(
          (deputado) => deputado.id === Number(id)
        );
        setDeputado([dados]);
      });
    };
    pegarDeputados();
  }, [id]);
  return (
    <>
      <section className={style.container}>
        {deputado.map((deputado) => (
          <div className={style.deputado} key={deputado.id}>
            <img
              className={style.fotoDoDeputado}
              src={deputado.urlFoto}
              alt={deputado.nome}
            />
            <Table
              className={style.descricao}
              striped
              bordered
              variant="success"
            >
              <tbody>
                <tr>
                  <td>Nome</td>
                  <td>{deputado.nome}</td>
                </tr>
                <tr>
                  <td>Partido</td>
                  <td>{deputado.siglaPartido}</td>
                </tr>
                <tr>
                  <td>UF</td>
                  <td>{deputado.siglaUf}</td>
                </tr>
                <tr>
                  <td>Legislatura</td>
                  <td>{deputado.idLegislatura}</td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex w-100 justify-content-center">
              <Button style={{ marginTop: "40px" }} variant="success" size="md">
                <Link href="/deputados" legacyBehavior>
                  <a>Voltar para deputados</a>
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Deputado;
