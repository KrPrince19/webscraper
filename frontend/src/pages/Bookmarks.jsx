import { useContext, useEffect, useState } from "react";

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

      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
        {stories.map((story) => (
          <StoryCard
            key={story._id}
            story={story}
          />
        ))}
      </div>
    </div>
  );
}

export default Bookmarks;