import Head from 'next/head'
import Front from '../components/Home'
import Bottom from '../components/Bottom'
import { ImageData, ProjectData, skills } from '../data'
export default function Home({ data, Pdata,Idata }) {
  return (
    <div className="flex  flex-col items-center justify-center ">
      <Head>
        <title>AS-DEVELOPER</title>
        <link rel="icon" href="/as.jpg" />
      </Head>
      <Front />
      <Bottom data={data} Pdata={Pdata} Idata={Idata}/>
    </div>
  )
}
export const getStaticProps = () => {
  const data = skills
  const Pdata = ProjectData
  const Idata = ImageData
  return {
    props: { data, Pdata ,Idata},
  }
}
