import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const APP_ID = "e495cde3";
const APP_KEY = "386f41503683ee8d07ee3247f7834d41";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);

    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
      );

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(console.error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  return (
    <>
      <div className="bg-[#faf9fb] p-10 flex-1">
        <div className="max-w-screen-lg mx-auto">
          <form>
            <label className="input shadow-md flex items-center gap-2">
              <Search size={"24"} />
              <input
                type="text"
                className="text-sm md:text-md grow"
                placeholder="What do you want to cook today?"
              />
            </label>
          </form>

          <h1 className="font-bold text-3xl md:text-5xl mt-4">
            Recommended Recipes
          </h1>
          <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
            Popular Choices
          </p>

          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
