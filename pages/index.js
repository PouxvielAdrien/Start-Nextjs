import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/post';
import Link from 'next/link';
import Date from '../components/date'
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Home({ allPostsData }) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className={utilStyles.headingMd}>
          <p>This is a simple website made by an intern at Metadot</p>
        </section>


          <section className={utilStyles.headingMd}>
              <h2 className={utilStyles.headingLg}>MacTigr</h2>
              <Link href={"/posts/mactigr"}>
                  <a>Visit the MacTigr Page</a>
              </Link>
          </section>


          {/*Blog : parse and display data from internal system*/}
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
                  {allPostsData.map(({ id, date, title }) => (
                      <li className={utilStyles.listItem} key={id}>
                          <Link href={`/posts/${id}`}>
                              <a>{title}</a>
                          </Link>
                          <br />
                          <small className={utilStyles.lightText}>
                              <Date dateString={date} />
                          </small>
                      </li>
                  ))}
              </ul>
          </section>

      </Layout>
  );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}