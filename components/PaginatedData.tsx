import { Pagination } from "@mui/material"
import { useState } from "react"

interface PaginatedDataProps {
    data: any[],
    Render: ({items}: {items: any}) => JSX.Element
}
export default function PaginatedData ({data, Render}: PaginatedDataProps) {
    const PER_PAGE = 10
    const [page, setPage] = useState(1)

    const handleChanePagination = (e: any, page: number) =>
        setPage(page)

    return (
        <section>
            <Render items={data.slice(PER_PAGE * (page - 1), PER_PAGE * page)} />
            {data.length > 0 && <Pagination onChange={handleChanePagination} count={Math.ceil(data.length / PER_PAGE)} />}
        </section>
    )
}