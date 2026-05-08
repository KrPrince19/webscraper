import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../api/axios";

import StoryCard from "../components/StoryCard";

import { AuthContext } from "../context/AuthContext";

function Home() {
  const [stories, setStories] = useState([]);

  const { user } = useContext(AuthContext);

  const fetchStories = async () => {
    try {
      const { data } = await api.get("/stories");

      setStories(data.stories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleBookmark = async (id) => {
    try {
      await api.post(
        `/stories/${id}/bookmark`,
        {},
        {
          headers: {
            Authorization: user.token,
          },
        }
      );

      alert("Bookmark updated");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto py-12 px-8 w-full box-border">
      {!user ? (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm mt-10">
          <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-slate-400 tracking-tight">Welcome to Web Scraper</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            Discover and bookmark the top stories from Hacker News. Please log in or register to view the latest curated content and save your favorites.
          </p>
          <div className="flex gap-4">
            <Link to="/login" className="bg-white/10 hover:bg-white/20 text-white py-3 px-8 rounded-full font-medium transition-all text-lg">
              Login
            </Link>
            <Link to="/register" className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-8 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(99,102,241,0.5)] text-lg">
              Register
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-slate-400 tracking-tight">Top Hacker News Stories</h1>

          {stories.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-slate-200 mb-3">No Stories Available</h2>
              <p className="text-slate-400 mb-6 max-w-md">
                It looks like there's no data extracted right now.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
              {stories.map((story) => (
                <StoryCard
                  key={story._id}
                  story={story}
                  handleBookmark={handleBookmark}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;