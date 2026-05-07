function StoryCard({ story, handleBookmark }) {
  return (
    <div className="bg-slate-800/40 border border-white/10 rounded-2xl p-7 backdrop-blur-md transition-all duration-300 flex flex-col gap-4 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-white/20">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>

      <h3 className="text-xl font-semibold m-0 text-slate-50 leading-relaxed z-10">{story.title}</h3>

      <div className="flex gap-4 text-slate-400 text-sm z-10">
        <span className="flex items-center gap-1.5 bg-black/20 py-1 px-2.5 rounded-md">⭐ {story.points} points</span>
        <span className="flex items-center gap-1.5 bg-black/20 py-1 px-2.5 rounded-md">👤 {story.author}</span>
        <span className="flex items-center gap-1.5 bg-black/20 py-1 px-2.5 rounded-md">🕒 {story.postedAt}</span>
      </div>

      <div className="flex justify-between items-center mt-auto pt-5 border-t border-white/10 z-10">
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 font-medium inline-flex items-center gap-1.5 transition-colors hover:text-purple-400"
        >
          Read Article ↗
        </a>

        {handleBookmark && (
          <button
            onClick={() => handleBookmark(story._id)}
            className="bg-transparent text-slate-400 border border-white/10 py-2 px-4 rounded-lg cursor-pointer transition-all text-sm font-medium hover:bg-white/10 hover:text-slate-50 hover:border-white/20"
          >
            🔖 Bookmark
          </button>
        )}
      </div>
    </div>
  );
}

export default StoryCard;