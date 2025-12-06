"use client";

import { Sparklines, SparklinesLine, SparklinesBars } from "react-sparklines";

interface SparklineProps {
  data: number[];
  color: string;
}

export function Sparkline({ data, color }: SparklineProps) {
  return (
    <div className="w-full h-full -mx-5 -mb-5">
      <Sparklines data={data} width={260} height={120} margin={4}>
        <SparklinesBars
          style={{ fill: color, fillOpacity: 0.15 }}
        />
        <SparklinesLine
          color={color}
          style={{ strokeWidth: 3 }}
        />
      </Sparklines>
    </div>
  );
}
