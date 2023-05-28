import { Pagination } from "@mui/material"
import { useState } from "react"

interface PaginatedDataProps {
    data: any[],
    ItemRender: ({item}: {item: any}) => JSX.Element
}
export default function PaginatedData ({data, ItemRender}: PaginatedDataProps) {
    const PER_PAGE = 10
    const [page, setPage] = useState(1)

    const handleChanePagination = (e: any, page: number) => {
        console.log(e)
        setPage(page)
    }

    return (
        <section>
            {data.slice(PER_PAGE * (page - 1), PER_PAGE * page).map((item) => (
                <article key={item.id}>
                    <ItemRender item={item} />
                </article>
            ))}
            {data.length > 0 && <Pagination onChange={handleChanePagination} count={Math.ceil(data.length / PER_PAGE)} />}
        </section>
    )
}