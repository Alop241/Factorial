import { useState } from "react";
import Head from 'next/head'
import AppLayout from "../components/AppLayout"
import Button from '../components/Button'

import { colors } from "../styles/theme"


export default function Home() {

  const Metric = () => {
    return <div>Your metric here</div>;
  };

  const [metricList, setMetricList] = useState([]);

  const handleClick = () => {
    //TODO
    setMetricList(metricList.concat(<Metric key={metricList.length} />));
    console.log("Add metric")
  }

  return (
    <>
      <Head>
        <title>Growth Engineer Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <h1>Metric Visualizer</h1>
          <h2>click the button to add a new metric</h2>

          <div>
            <Button onClick={handleClick}>
              Add new metric
            </Button>
            {metricList}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        div {
          margin-top: 16px;
        }
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
        h1 {
          color: ${colors.primary};
          font-weight: 800;
          font-size: 32px;
          margin-bottom: 16px;
        }
        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  )
}
