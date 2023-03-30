import { DataView } from "primereact/dataview";
import { Tag } from "primereact/tag";

interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  quantity: number;
  productImageUrl: string;
}

export default function () {
  const n: Array<Product> = [
    {
      productId: 1,
      productDescription: "Pequeñas",
      productName: "Sillas",
      productImageUrl: "https://placehold.co/80",
      quantity: 1,
    },
  ];

  return (
    <div className="card">
      <DataView
        layout={"list"}
        value={n}
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
        <div className="ml-3">
          <div className="font-bold mb-2">{item.productName}</div>
          <div>Descripción: {item.productDescription}</div>
          <Tag>Cantidad: {item.quantity}</Tag>
        </div>
      </div>
    </div>
  );
}
