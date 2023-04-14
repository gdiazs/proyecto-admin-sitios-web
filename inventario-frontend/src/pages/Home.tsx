import {Panel} from 'primereact/panel';
import { useDispatch } from "react-redux";
import Product from "../store/products/Product";
import { sayHello } from "../store/products/productsSlice";

function Home() {
  const dispatch = useDispatch();


  return (
    <div className='col-12'>
      <Panel header="Sistema de gestión de articulos" className='mt-2'>
          <p className="m-0">
              <p>Creación de sitios Web</p>
          </p>
      </Panel>
    </div>
  );
}
export default Home;
