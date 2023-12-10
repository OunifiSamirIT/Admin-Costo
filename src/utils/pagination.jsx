import { useEffect } from "react";
import {
    Lucide
} from "@/base-components";


export const dataPagination = (data, currentPage, perPage) =>
    data.filter(
        (i, index) => index + 1 > (currentPage - 1) * perPage && index + 1 <= currentPage * perPage,
    );

{/* BEGIN: Pagination */ }
export const Pagination = ({ data, perPage, currentPage, setCurrentPage,setInfoPage }) => {

    const totalItems = data.length;
    const totalPage = Math.ceil(totalItems / perPage);

    useEffect(() => {
        const start = perPage * (currentPage - 1) + 1;
        const end = perPage * currentPage;
        const string = `Showing ${start} to ${end > totalItems ? totalItems : end} of ${totalItems}`;
        setInfoPage(string);
      }, [currentPage, perPage,data]);

    const paginationLink = () => {
        let items = [];
        let i = currentPage - 1;
        while (i >= currentPage - 1 && i > 0) {
            items.push(
                <li className="page-item" key={i} onClick={() => setCurrentPage(currentPage - 1)}>
                    <a className="page-link" href="#">
                        {i}
                    </a>
                </li>,
            );

            i -= 1;
        }

        items = items.reverse();

        items.push(
            <li className="page-item active" key={currentPage} onClick={() => setCurrentPage(currentPage)}>
                <a className="page-link" href="#">
                    {currentPage}
                </a>
            </li>,
        );

        i = currentPage + 1;
        while (i <= currentPage + 1 && i <= totalPage) {
            items.push(
                <li className="page-item" key={i} onClick={() => setCurrentPage(currentPage + 1)}>
                    <a className="page-link" href="#">
                        {i}
                    </a>
                </li>,
            );

            i += 1;
        }
        return items;
    };
    

    return (
        <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#">
                        <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        <Lucide icon="ChevronLeft" className="w-4 h-4" />
                    </a>
                </li>
                {paginationLink()}
                <li className="page-item">
                    <a className="page-link" href="#">
                        <Lucide icon="ChevronRight" className="w-4 h-4" />
                    </a>
                </li>

            </ul>
        </nav>
    )
}
