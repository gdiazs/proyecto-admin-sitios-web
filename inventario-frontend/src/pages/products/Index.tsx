import { DataView } from "primereact/dataview";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import Product from "../../store/products/Product";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import produce from "immer";

export default function () {


  const productReducer: any = useSelector((state: RootState) => state.productReducer);

  
  return (
    <div className="card">
      <DataView
        layout={"list"}
        value={productReducer.products}
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
        <img src={item.productImageUrl} />
        <div className="ml-3 flex-grow-1">
          <div className="font-bold mb-2">{item.productName}</div>
          <div>Descripción: {item.productDescription}</div>
          <Tag>Cantidad: {item.quantity}</Tag>
        </div>
        <div className="mt-3">
            <Button severity="warning" label="Editar" icon="pi pi-pencil" />
        </div>
      </div>
    </div>
  );
}
