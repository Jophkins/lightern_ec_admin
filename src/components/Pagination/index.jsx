import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';

const Pagination = observer(() => {

  const {product} = React.useContext(Context);
  const pageCount = Math.ceil(product.totalCount / product.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1)
  }

  const handlePrev = () => {
    if (product.page > 1) {
      product.setPage(product.page - 1);
    }
  }

  const handleNext = () => {
    if (product.page < pageCount) {
      product.setPage(product.page + 1);
    }
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li onClick={handlePrev} className="page-item" style={{cursor: 'pointer'}}>
          <div className="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </div>
        </li>
        {pages.map(page => <li onClick={() => product.setPage(page)} key={page} className={`page-item ${product.page === page && 'active'}`} style={{cursor: 'pointer'}}><div className="page-link">{page}</div></li>)}
        <li onClick={handleNext} className="page-item" style={{cursor: 'pointer'}}>
          <div className="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </div>
        </li>
      </ul>
    </nav>
  );
});

export default Pagination;
