import { ReactNode, useEffect } from "react";
import Nav from "../../components/molecules/nav";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  title: string;
};

function Layout(props: LayoutProps) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <div className="grid mt-3">
      <div className="col-8 col-offset-2 bg-white border-round-sm p-0">
        <Nav />
        <div className="grid ">
          <div className="col">
            <div className="px-2">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="bg-primary-200 h-2rem"></div>
      </div>
    </div>
  );
}

export type { LayoutProps };
export default Layout;
