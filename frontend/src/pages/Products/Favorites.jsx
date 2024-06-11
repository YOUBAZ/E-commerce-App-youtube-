import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectFavoriteProduct } from "../../redux/features/favorites/favoriteSlice.js";
import Product from "./Product.jsx";
export default function Favorites() {
  const favorites = useSelector(selectFavoriteProduct);
  console.log(favorites);
  return (
    <div className="ml-[10rem]">
      <h1 className="text-log font-bold ml-[3rem] mt-[3rem]">
        FAVORITE PRODUCTS
      </h1>
      <div className="flex flex-wrap">
        {favorites.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
