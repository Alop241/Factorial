import "react-vis/dist/style.css";
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import { colors } from "../../styles/theme"

export default function Metric({data, name}) {    

  return (
    <>
      <div>
          <h3>{name}</h3>
          <XYPlot
                  width={300}
                  height={300}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <LineSeries data={data} color={colors.secondary}/>
          </XYPlot>
      </div>
      <style jsx>{`
        div {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
      `}</style>
    </>
  )
}