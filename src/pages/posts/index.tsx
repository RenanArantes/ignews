import { GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { getPrismicCLient } from '../../services/prismic'
import styles from './styles.module.scss'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href='#'>
                        <time>
                            19 de fevereiro de 2022
                        </time>
                        <strong>
                            Título CLickbaiter do Post
                        </strong>
                        <p>
                            Lord Ipsum proin eleifend odio tortor, sit amet bibendum mauris hendrerit eu. Nulla quis tellus accumsan, fringilla turpis sit amet, faucibus eros. Donec venenatis egestas odio convallis commodo. Praesent vehicula ex eget feugiat luctus. Aliquam quis tincidunt libero. Praesent at tincidunt tortor. Pellentesque vel vestibulum quam, in fringilla leo. Vivamus vestibulum vel ipsum nec lacinia.
                        </p>
                    </a>
                    <a href='#'>
                        <time>
                            19 de fevereiro de 2022
                        </time>
                        <strong>
                            Título CLickbaiter do Post
                        </strong>
                        <p>
                            Lord Ipsum proin eleifend odio tortor, sit amet bibendum mauris hendrerit eu. Nulla quis tellus accumsan, fringilla turpis sit amet, faucibus eros. Donec venenatis egestas odio convallis commodo. Praesent vehicula ex eget feugiat luctus. Aliquam quis tincidunt libero. Praesent at tincidunt tortor. Pellentesque vel vestibulum quam, in fringilla leo. Vivamus vestibulum vel ipsum nec lacinia.
                        </p>
                    </a>
                    <a href='#'>
                        <time>
                            19 de fevereiro de 2022
                        </time>
                        <strong>
                            Título CLickbaiter do Post
                        </strong>
                        <p>
                            Lord Ipsum proin eleifend odio tortor, sit amet bibendum mauris hendrerit eu. Nulla quis tellus accumsan, fringilla turpis sit amet, faucibus eros. Donec venenatis egestas odio convallis commodo. Praesent vehicula ex eget feugiat luctus. Aliquam quis tincidunt libero. Praesent at tincidunt tortor. Pellentesque vel vestibulum quam, in fringilla leo. Vivamus vestibulum vel ipsum nec lacinia.
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicCLient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication')
        ], {
           fetch: ['publication.title', 'publication.content'],
           pageSize: 100,
        })

    console.log(response)

    return {
        props: {}
    }
}