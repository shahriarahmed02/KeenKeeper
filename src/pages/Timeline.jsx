import React, { useContext } from 'react';
import { TimelineContext } from '../context/TimelineProvider';


import CallIcon from "../assets/call.png";
import VideoIcon from "../assets/video.png";
import TextIcon from "../assets/text.png";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext); 

  
  const interactionIcons = {
    Call: CallIcon,
    Video: VideoIcon,
    Text: TextIcon
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Timeline</h1>
        <select className="select select-sm border-slate-200 text-xs text-slate-500">
          <option>Filter timeline</option>
        </select>
      </div>

      <div className="space-y-4">
        {timeline.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl border border-dashed border-slate-200 text-center text-slate-400">
            No interactions logged yet. Go to a friend's profile to start!
          </div>
        ) : (
          timeline.map((log) => (
            <div 
              key={log.id} 
              className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between transition-hover hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-50">
                  <img 
                    src={interactionIcons[log.type]} 
                    alt={log.type} 
                    className="w-5 h-5 object-contain opacity-70" 
                  />
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-slate-700">
                    {log.type} <span className="font-normal text-slate-400 text-xs">with</span> <span className="font-normal text-slate-400 text-xs">{log.friendName || log.name}</span> 
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">{log.date}</p>
                </div>
              </div>

           
             
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;