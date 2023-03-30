import { Menubar } from "primereact/menubar";
import { MenuItem, MenuItemCommandEvent } from "primereact/menuitem";
import { useNavigate } from "react-router-dom";

function Nav() {
  return <Menubar model={getMenuItems()} />;
}

function getMenuItems(): Array<MenuItem> {
  const commands = useCommands();

  return [
    {
      label: "Inventario",
      icon: "pi pi-fw pi-home",
      command: commands.toHome,
    },
    {
      label: "Productos",
      items: [
        {
          label: "Listar",
          icon: "pi pi-fw pi-list",
          command: commands.toAbout,
        },
        { label: "Agregar", icon: "pi pi-fw pi-plus" },
        { label: "Eliminar", icon: "pi pi-fw pi-minus" },
      ],
    },
  ];
}

const useCommands = () => {
  const navigate = useNavigate();
  return {
    toHome: (e: MenuItemCommandEvent) => {
      navigate("/");
      console.log(import.meta.env.VITE_API_INVENTORY_BACKEND);
    },
    toAbout: (e: MenuItemCommandEvent) => navigate("/products"),
  };
};

export default Nav;
