import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { TimelineContext } from '../context/TimelineProvider';

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

 
  const dataCounts = timeline.reduce((acc, log) => {
    acc[log.type] = (acc[log.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = [
    { name: 'Text', value: dataCounts['Text'] || 0, color: '#A855F7' },
    { name: 'Call', value: dataCounts['Call'] || 0, color: '#244D3F' },
    { name: 'Video', value: dataCounts['Video'] || 0, color: '#22C55E' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-slate-50 min-h-screen">
      <h1 className="text-4xl font-bold text-[#244D3F] mb-10  pb-4">
        Friendship Analytics
      </h1>

      <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 max-w-4xl mx-auto">
        <h3 className="text-[#244D3F] font-semibold mb-6 uppercase text-xs tracking-widest">
          By Interaction Type
        </h3>

        <div className="h-[400px] w-full">
          {timeline.length === 0 ? (
            <div className="flex h-full items-center justify-center text-slate-300 italic">
              No data available. Start interacting with friends!
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
             
                <Tooltip 
                  contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                  style={{ outline: 'none' }} 
                >
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      style={{ outline: 'none' }} 
                    />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;