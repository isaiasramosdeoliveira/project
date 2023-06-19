import React, { useEffect, useState } from "react";
import style from "./Deputados.module.css";
import { Button, Form } from "react-bootstrap";
import http from '../../config/http'
import Link from "next/link";

const Deputados = () => {
  const [deputados, setDeputados] = useState([]);
  const [paginas, setPaginas] = useState(6);
  const [entrada, setEntrada] = useState("");
  const handleCarregarMais = () => {
    let numeroDePaginas = paginas;
    numeroDePaginas += 6;
    setPaginas(numeroDePaginas);
  };
  useEffect(() => {
    const pegarDeputados = async () => {
      http.get(`/deputados?nome=${entrada}`).then((res) => {
        const dados = res.data.dados.splice(0, paginas);

        setDeputados(dados);
      });
    };
    pegarDeputados();
  }, [entrada, paginas]);
  useEffect(() => {
    const pegarDeputados = async () => {
      http.get("/deputados").then((res) => {
        const dados = res.data.dados.splice(0, paginas);
        setDeputados(dados);
      });
    };
    pegarDeputados();
  }, [paginas]);
  return (
    <>
      <Form.Control
        className={"filtarDados"}
        placeholder="Buscar por deputado"
        onChange={(e) => setEntrada(e.target.value)}
      />
      <section className={style.deputados}>
        {deputados.map((deputado) => (
          <Link
            legacyBehavior
            href={`/deputados/${deputado.id}`}
            key={deputado.id}
          >
            <a className={style.deputado}>
              <img src={deputado.urlFoto} alt="foto do deputado" />
              <h4>{deputado.nome}</h4>
              <table>
                <tbody className={style.describe}>
                  <tr>
                    <td>UF</td>
                    <td>Partido</td>
                  </tr>
                  <tr>
                    <td>{deputado.siglaUf}</td>
                    <td>
                      {!deputado.siglaPartido
                        ? "Nenhum"
                        : deputado.siglaPartido}
                    </td>
                  </tr>
                </tbody>
              </table>
            </a>
          </Link>
        ))}
        <div className="d-flex w-100 justify-content-center">
          <Button variant="success" size="md" onClick={handleCarregarMais}>
            Carregar mais deputados
          </Button>
        </div>
      </section>
    </>
  );
};

export default Deputados;
