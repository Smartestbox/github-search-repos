import {HeartFilledHeaderIcon, LogoIcon, ProfileIcon} from "../icons";
import {Link, Outlet} from "react-router";
import s from './Layout.module.css'

export const Layout = () => {
  return (
    <div className={s.layout}>
      <header className={s.header}>
        <div className={s.headerContent}>
          <Link to="/"><LogoIcon/></Link>
          <div className={s.nav}>
            <Link to="/favorites">
              <HeartFilledHeaderIcon/>
            </Link>
            <ProfileIcon/>
          </div>
        </div>
      </header>
      <div className={s.content}>
        <Outlet/>
      </div>
    </div>
  );
};