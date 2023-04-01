import { useDispatch } from "react-redux";
import Product from "../store/products/Product";
import { addProduct } from "../store/products/ProductsSlice";

function Home() {

  const dispatch = useDispatch();

  const b: Product =     {
    productId: 1,
    productDescription: "Pequeñas",
    productName: "Sillas",
    productImageUrl: "https://placehold.co/80",
    quantity: 1,
  }


  const onButtonClick = () => {
    dispatch(addProduct(b));
  }


  
  return (
    <div>
      <h1>Home</h1>
      <button onClick={onButtonClick}>Say Hello</button>
    </div>

  );
}
export default Home;
