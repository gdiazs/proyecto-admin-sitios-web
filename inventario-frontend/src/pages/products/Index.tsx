import { DataView } from "primereact/dataview";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import Product from "../../store/products/Product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppThunkDispatch } from "../../store";
import { useEffect } from "react";
import {
  fetchProductsThunk,
  sayHello,
  selectProducts,
} from "../../store/products/productsSlice";

export default function () {
  const dispatchThunk = useDispatch<AppThunkDispatch>();
  const dispatch = useDispatch<AppDispatch>();

  const productState: any = useSelector(selectProducts);

  useEffect(() => {
    dispatchThunk(fetchProductsThunk());
    dispatch(sayHello());
  }, []);

  return (
    <div className="card">
      <DataView
        layout={"list"}
        value={productState.products}
        itemTemplate={buildItemTemplate}
        emptyMessage="No hay productos"
      />
    </div>
  );
}

function buildItemTemplate(item: Product): React.ReactNode {
  return (
    <div className="col-12 my-3">
      <div className="flex">
        <img src={item.imageUrl} />
        <div className="ml-3 flex-grow-1">
          <div className="font-bold mb-2">{item.name}</div>
          <div>Descripción: {item.description}</div>
          <Tag>Cantidad: {item.quantity}</Tag>
        </div>
        <div className="mt-3">
          <Button severity="warning" label="Editar" icon="pi pi-pencil" />
        </div>
      </div>
    </div>
  );
}
