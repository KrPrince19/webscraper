import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../api/axios";

import { AuthContext } from "../context/AuthContext";

import StoryCard from "../components/StoryCard";

function Bookmarks() {
  const [stories, setStories] = useState([]);

  const { user } = useContext(AuthContext);

  const fetchBookmarks = async () => {
    try {
      const { data } = await api.get(
        "/stories/bookmarks/me",
        {
          headers: {
            Authorization: user.token,
          },
        }
      );

      setStories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  return (
    <div className="max-w-[1100px] mx-auto py-12 px-8 w-full box-border">
      <h1 className="text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-slate-400 tracking-tight">Bookmarked Stories</h1>

      {stories.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-slate-200 mb-3">No Bookmarks Found</h2>
          <p className="text-slate-400 mb-6 max-w-md">
            You haven't bookmarked any stories yet. Explore the top stories and bookmark your favorites to see them here!
          </p>
          <Link to="/" className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-full font-medium transition-all">
            Explore Stories
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
          {stories.map((story) => (
            <StoryCard
              key={story._id}
              story={story}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookmarks;