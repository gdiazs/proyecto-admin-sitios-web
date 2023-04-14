import { DataView } from "primereact/dataview";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import Product from "../../store/products/Product";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../../store";
import { useEffect } from "react";
import {
  fetchProductsThunk,
  removeItemThunk,
  selectProducts,
} from "../../store/products/productsSlice";

import { getResourcesHost } from "../../hostnames";

export default function () {
  const dispatchThunk = useDispatch<AppThunkDispatch>();

  const { products }: any = useSelector(selectProducts);

  useEffect(() => {
    dispatchThunk(fetchProductsThunk());
  }, [dispatchThunk]);

  return (
    <div className="card">
      <DataView
        layout={"grid"}
        value={products}
        itemTemplate={buildItemTemplate}
        emptyMessage="No hay productos"
      />
    </div>
  );
}

function buildItemTemplate(item: Product): React.ReactNode {
  let imageUrl = `${getResourcesHost()}/${item.imageUrl}`;
  const dispatchThunk = useDispatch<AppThunkDispatch>();

  const onRemoveItemClick = () => {
    dispatchThunk(removeItemThunk(item.id));
  };

  return (
    <div className="col-12 md:col-6 my-3">
      <div className="flex m-1 p-3 border-1 border-100 border-round shadow">
        <img src={imageUrl} className="imageItem" />
        <div className="ml-3 flex-grow-1">
          <div className="font-bold mb-2">{item.name}</div>
          <div>{item.description}</div>
          <Tag>Cantidad: {item.quantity}</Tag>
          <div className="mt-2">
            <Button
              onClick={onRemoveItemClick}
              severity="warning"
              label="Descontar 1"
              icon="pi pi-minus"
            />
          </div>
        </div>
        <div className="mt-3"></div>
      </div>
    </div>
  );
}
