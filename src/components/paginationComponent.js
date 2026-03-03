export const PaginationComponent = ({currentPage, setCurrentPage, noOfPages}) => {

 return(
        <div className='pagination-container'>
          <button className='page-number' disabled= {currentPage === 0} onClick={()=> setCurrentPage(prev => prev -1)}>◀️</button>
          {noOfPages > 0 ? [...Array(noOfPages).keys()].map(Number => 
          <span className={`page-number ${(currentPage === Number ? 'active' : '')}`} onClick={() => setCurrentPage(Number)}>{Number + 1}</span>) : null}
          <button className='page-number' disabled= {currentPage === noOfPages-1} onClick={()=> setCurrentPage(prev => prev +1)}>▶️</button>
        </div>

    )
}      