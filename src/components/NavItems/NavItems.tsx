import { NavLink } from "react-router-dom";

interface NavLinksProps {
  className?: string;
}

const links = [
  { to: "/", label: "Home" },
  { to: "/categories", label: "Category" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
];

export const NavItems: React.FC<NavLinksProps> = ({ className }) => (
  <nav className={className}>
    {links.map(({ to, label }) => (
      <NavLink
        key={to}
        to={to}
        className={({ isActive }) => (isActive ? "text-active-link" : "")}
      >
        {label}
      </NavLink>
    ))}
  </nav>
);
