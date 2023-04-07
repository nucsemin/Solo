import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

// компоненты которые не требуют асинхронного чанка экспортировать не по дефолту, а именованным образом
export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Link to={"/"}>Main Page</Link>
      <Link to={"/about"}>About Page</Link>
    </div>
  );
};
