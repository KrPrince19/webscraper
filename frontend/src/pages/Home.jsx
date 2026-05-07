import { useContext, useEffect, useState } from "react";

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
      <h1 className="text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-slate-400 tracking-tight">Top Hacker News Stories</h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
        {stories.map((story) => (
          <StoryCard
            key={story._id}
            story={story}
            handleBookmark={
              user ? handleBookmark : null
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Home;