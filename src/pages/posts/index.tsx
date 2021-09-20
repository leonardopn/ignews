import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { getPrimicClient } from "../../services/prismic";
import styles from "./styles.module.scss";
import Prismic from "@prismicio/client";

export default function Posts() {
    return (
        <>
            <Head>
                <title>Post | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Criando um Blog com contador de visitas usando NextJS e MongoDB</strong>
                        <p>
                            Neste post vamos aprender a criar um Blog com NextJS, usando o MongoDB para gerenciar um
                            contador de visitas em cada post e exibir no preview da home page. Usaremos a Fetch API para
                            buscar os dados e o SWR para nos auxiliar nas revalidações dos mesmos. No final vamos
                            hospedar em produção usando a Vercel.
                        </p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Criando um Blog com contador de visitas usando NextJS e MongoDB</strong>
                        <p>
                            Neste post vamos aprender a criar um Blog com NextJS, usando o MongoDB para gerenciar um
                            contador de visitas em cada post e exibir no preview da home page. Usaremos a Fetch API para
                            buscar os dados e o SWR para nos auxiliar nas revalidações dos mesmos. No final vamos
                            hospedar em produção usando a Vercel.
                        </p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Criando um Blog com contador de visitas usando NextJS e MongoDB</strong>
                        <p>
                            Neste post vamos aprender a criar um Blog com NextJS, usando o MongoDB para gerenciar um
                            contador de visitas em cada post e exibir no preview da home page. Usaremos a Fetch API para
                            buscar os dados e o SWR para nos auxiliar nas revalidações dos mesmos. No final vamos
                            hospedar em produção usando a Vercel.
                        </p>
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrimicClient();
    const response = await prismic.query([Prismic.predicates.at("document.type", "publication")], {
        fetch: ["publication.title", "publication.content"],
        pageSize: 100,
    });

    console.log(JSON.stringify(response, null, 2));
    return { props: {} };
};
