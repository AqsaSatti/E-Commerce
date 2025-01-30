import { Link } from "react-router-dom";
import { BreadcrumbProps } from "./Breadcrumbs.interface";
export const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav className={className}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index}>
            {item.path ? (
              <Link
                to={item.path}
                className="breadcrumb text-light-blue hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb text-gray">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-gray">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
