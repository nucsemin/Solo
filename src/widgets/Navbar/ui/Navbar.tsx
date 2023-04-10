import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import s from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

// компоненты которые не требуют асинхронного чанка экспортировать не по дефолту, а именованным образом
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={s.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} className={s.mainLink} to={"/"}>
          Main Page
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          About Page
        </AppLink>
      </div>
    </div>
  );
};
