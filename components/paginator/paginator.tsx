import style from './paginator.module.scss';

export default function Paginator(props: { pageLimit: number, maxPage: number, currentPage: number, goToPage: any }) {
    return (
        <div className={style.paginator}>
            {props.currentPage > 0 &&
                <button
                    className={style.paginator__page}
                    onClick={() => props.goToPage(props.currentPage - 1)}
                >
                    {`<`}
                </button>
            }

            {new Array(props.pageLimit).fill(0).map((_, index) => {
                return (
                    <button
                        className={style.paginator__page + ` ${props.currentPage === props.currentPage + index ? style.paginator__pageSelected : ``}`}
                        key={index}
                        onClick={() => props.goToPage(props.currentPage + index)}
                    >
                        {props.currentPage + index + 1}
                    </button>
                )
            })}

            {props.currentPage < props.maxPage &&
                <button
                    className={style.paginator__page}
                    onClick={() => props.goToPage(props.currentPage + 1)}
                >
                    {`>`}
                </button>
            }
        </div>

    )
}