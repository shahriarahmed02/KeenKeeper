import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { TimelineContext } from '../context/TimelineProvider'; 
import { Phone, MessageSquare, Video, Edit, Bell, Archive, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const { addLog } = useContext(TimelineContext);

  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => setFriend(data.find(f => f.id === parseInt(id))));
  }, [id]);

  if (!friend) return <div className="p-20 text-center">Loading Profile...</div>;

 
  const getDynamicStatus = () => {
    const daysRemaining = friend.goal - friend.days_since_contact;
    if (friend.status === 'overdue') return 'overdue';
    if (daysRemaining <= 2 && daysRemaining >= 0) return 'almost-due';
    return 'active';
  };

  const currentStatus = getDynamicStatus();

  const handleLog = (type) => {
    addLog(type, friend.name);
    toast.success(`${type} with ${friend.name}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <img src={friend.picture} className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-white shadow-lg" />
            <h2 className="text-2xl font-bold text-slate-800">{friend.name}</h2>
            
         {/* Dynamic color Badge */}
            <div className={`badge badge-sm text-[10px] font-bold text-white mt-1 uppercase border-none py-2 px-3 ${
              currentStatus === 'almost-due' ? 'bg-[#ffb347]' : 
              currentStatus === 'overdue' ? 'bg-[#ff4d4d]' : 'bg-[#1a3d32]'
            }`}>
              {currentStatus === 'overdue' ? 'Overdue' : currentStatus === 'almost-due' ? 'Almost Due' : 'On-Track'}
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {friend.tags.map(t => (
                <span key={t} className="px-2 py-0.5 bg-green-200 text-[#1a3d32] text-[10px] font-bold rounded uppercase">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-500 leading-relaxed italic">"{friend.bio}"</p>
            <p className="text-xs text-blue-500  mt-4 cursor-pointer">Preferred email</p>
          </div>

          <div className="flex flex-col gap-3">
            <button className="btn btn-outline border-slate-200 text-slate-600 normal-case flex justify-start gap-3 hover:bg-slate-100"><Bell size={16}/> Snooze 2 Weeks</button>
            <button className="btn btn-outline border-slate-200 text-slate-600 normal-case flex justify-start gap-3 hover:bg-slate-100"><Archive size={16}/> Archive</button>
            <button className="btn btn-outline border-red-100 text-red-400 normal-case flex justify-start gap-3 hover:bg-red-50 hover:border-red-200"><Trash2 size={16}/> Delete</button>
          </div>
        </div>

        {/* Right Column: Stats & Action */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <div className="text-2xl text-[#244D3F] font-bold">{friend.days_since_contact}</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Days Since Contact</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <div className="text-2xl text-[#244D3F] font-bold">{friend.goal}</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Goal (Days)</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 text-[#1a3d32]">
              <div className="text-xl  text-[#244D3F] font-bold leading-tight">Feb 27, 2026</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold mt-1">Next Due</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-[#244D3F]">Relationship Goal</h3>
              <button className="btn btn-xs btn-ghost border border-slate-200"><Edit size={12} className="mr-1"/> Edit</button>
            </div>
            <p className="text-sm text-slate-600">Connect every <span className="font-bold text-[#244D3F]">{friend.goal} days</span></p>
          </div>

          {/* Quick Check-In Section */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-[#244D3F]">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => handleLog('Call')} className="flex flex-col items-center p-6 border border-slate-100 rounded-xl hover:bg-slate-50 hover:border-[#244D3F] transition-all group">
                <Phone className="mb-2 text-slate-600 group-hover:text-[#244D3F]" />
                <span className="text-xs font-bold text-slate-600 group-hover:text-[#244D3F]">Call</span>
              </button>
              <button onClick={() => handleLog('Text')} className="flex flex-col items-center p-6 border border-slate-100 rounded-xl hover:bg-slate-50 hover:border-[#244D3F] transition-all group">
                <MessageSquare className="mb-2 text-slate-600 group-hover:text-[#244D3F]" />
                <span className="text-xs font-bold text-slate-600 group-hover:text-[#244D3F]">Text</span>
              </button>
              <button onClick={() => handleLog('Video')} className="flex flex-col items-center p-6 border border-slate-100 rounded-xl hover:bg-slate-50 hover:border-[#244D3F] transition-all group">
                <Video className="mb-2 text-slate-600 group-hover:text-[#244D3F]" />
                <span className="text-xs font-bold text-slate-600 group-hover:text-[#244D3F]">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;