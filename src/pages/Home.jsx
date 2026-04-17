import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

const Home = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  // হেল্পার ফাংশন: বর্তমান ডাইনামিক স্ট্যাটাস বের করার জন্য
  const getDynamicStatus = (friend) => {
    const daysRemaining = friend.goal - friend.days_since_contact;
    
    // যদি অলরেডি ওভারডিউ থাকে
    if (friend.status === 'overdue') return 'overdue';
    
    // যদি ২ দিন বা তার কম বাকি থাকে (Almost Due)
    if (daysRemaining <= 2 && daysRemaining >= 0) return 'almost-due';
    
    // অন্যথায় Active/On-Track
    return 'active';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-slate-50 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-3 tracking-tight">Friends to keep close in your life</h1>
        <p className="text-slate-500 max-w-xl mx-auto mb-6 text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] hover:bg-[#132d25] text-white border-none px-8 rounded-lg transition-transform active:scale-95">
          <UserPlus size={18} className="mr-2" /> Add a Friend
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { label: 'Total Friends', value: friends.length },
          { label: 'On Track', value: friends.filter(f => getDynamicStatus(f) === 'active').length },
          { label: 'Need Attention', value: friends.filter(f => getDynamicStatus(f) === 'overdue').length },
          { label: 'Almost Due', value: friends.filter(f => getDynamicStatus(f) === 'almost-due').length }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
            <div className="text-xs text-slate-400 uppercase mt-1 tracking-wider font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Friends Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map(friend => {
          const currentStatus = getDynamicStatus(friend);

          return (
            <Link to={`/friend/${friend.id}`} key={friend.id} className="group">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1">
                
                {/* Profile Image */}
                <div className="relative">
                  <img src={friend.picture} alt={friend.name} className="w-16 h-16 rounded-full object-cover mb-3 ring-2 ring-slate-50" />
                </div>
                
                {/* Name & Contact Days */}
                <h3 className="font-bold text-slate-800 text-sm mb-1">{friend.name}</h3>
                <p className="text-[10px] text-slate-400 mb-3">{friend.days_since_contact}d ago</p>
                
                {/* Figma Style Tags (e.g., WORK, FAMILY) */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {friend.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-[#e6f7f0] text-[#1a3d32] text-[9px] font-bold rounded uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Status Badge */}
                <span className={`px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-wide shadow-sm transition-colors ${
                  currentStatus === 'active' 
                    ? 'bg-[#1a3d32] text-white' // On-Track
                    : currentStatus === 'overdue' 
                    ? 'bg-[#ff4d4d] text-white' // Overdue
                    : 'bg-[#ffb347] text-white' // Almost Due
                }`}>
                  {currentStatus === 'overdue' ? 'Overdue' : currentStatus === 'almost-due' ? 'Almost Due' : 'On-Track'}
                </span>

              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;