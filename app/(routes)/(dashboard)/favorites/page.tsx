import { redirect } from "next/navigation";
import FavoriteCarsList from "./components/FavoriteCarsList/FavoriteCarsList";
import { auth } from "@clerk/nextjs/server";

export default function FavoritesPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <main>
      <h1 className="text-4xl font-bold text-white">Favorites</h1>
      <FavoriteCarsList />
    </main>
  );
}
