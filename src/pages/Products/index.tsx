import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Card } from "../../components/Card";
import { mapProductsData } from "../../utils/MapProductsData";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

 const Products = () => {
  const { getAllProducts } = useApi();
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const itemsPerPage = 10;

  const handleProductClick = (item: any) => {
    navigate(`/single-product/${item.id}`);
  };
  const fetchProductsPerPage = async (page: number) => {
    const skip = (page - 1) * itemsPerPage;
    const response = await getAllProducts(itemsPerPage, skip);
    const data = await mapProductsData(response);
    setProducts(data);
    setLoading(false);
  };
  const fetchTotalPages = async () => {
    const response = await getAllProducts();
    const products = await mapProductsData(response);
    setTotalPages(Math.ceil(products.length / itemsPerPage));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchTotalPages();
  }, []);

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  useEffect(() => {
    fetchProductsPerPage(currentPage);
  }, [currentPage]);

  return (
    <div className="text-center p-10">
      <Card
        title="All Products"
        items={products}
        gridClassName="grid-cols-2 sm:grid-cols-3 gap-6"
        nameClass="font-inter font-normal"
        roleClassName="font-inter text-sm opacity-50"
        imgSize="w-[80%] sm:w-[45%]"
        onClickHandler={handleProductClick}
      />
      {/* Pagination Controls */}

      <div className="mt-4 flex justify-between gap-5 ">
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          variant="primary"
          size="medium"
          className="w-[100px]"
        >
          Previous
        </Button>
        <nav className="sm:flex  hidden gap-2 overflow-x-clip">
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            // Dynamically adjust pages based on the current page
            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(totalPages, currentPage + 2);

            if (page >= startPage && page <= endPage) {
              return (
                <Button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  variant={currentPage === page ? "primary" : "secondary"}
                  size="medium"
                >
                  {page}
                </Button>
              );
            }

            // Show ellipses before the first displayed page
            if (page === startPage - 1) {
              return (
                <span key={page} className="px-2">
                  ...
                </span>
              );
            }

            // Show ellipses after the last displayed page
            if (page === endPage + 1) {
              return (
                <span key={page} className="px-2">
                  ...
                </span>
              );
            }

            return null;
          })}
        </nav>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          variant="primary"
          size="medium"
          className="w-[100px]"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default Products;
