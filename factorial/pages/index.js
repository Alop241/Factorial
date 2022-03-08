import { useState } from "react";
import Head from 'next/head'
import AppLayout from "../components/AppLayout"
import { Container } from '../components/Container'; 
import Metric from '../components/Metric'

import { colors } from "../styles/theme"


export default function Home() {

  //TODO Get this values from API
  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 8}
    ];

  const [metricList, setMetricList] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault(event);
    setMetricList(metricList.concat(<Metric key={metricList.length} data={data} name={event.target.name.value}/>));
  };

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
             <Container triggerText="Add New Metric" onSubmit={onSubmit} />
          </div>
          <div className="grid-container">
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
        div.grid-container{
          display: grid; 
          grid-template-columns: 1fr 1fr 1fr; 
          grid-template-rows: 1fr; 
          gap: 0px 0px; 
          grid-template-areas: 
            ". . ."
            ". . ."
            ". . ."; 
        }
      `}</style>
    </>
  )
}
