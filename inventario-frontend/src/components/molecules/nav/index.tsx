import { Menubar } from "primereact/menubar";
import { MenuItem, MenuItemCommandEvent } from "primereact/menuitem";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Nav() {
  return <Menubar start={"INV"} model={getMenuItems()} />;
}

function getMenuItems(): Array<MenuItem> {
  const commands = useCommands();

  return [
    {
      label: "Inicio",
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
    toHome: (e: MenuItemCommandEvent) => navigate("/"),
    toAbout: (e: MenuItemCommandEvent) => navigate("/about"),
  };
};

export default Nav;
