import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';

class Pagination extends React.Component {

    state = {
        presentPage: this.props.initialPage || 1
    }

    changePage = (newPage) => {
        const { onPageChange } = this.props;

        this.setState({ presentPage: newPage });
        onPageChange(newPage);
    }

    isSameNumber = (numberOne, numberTwo) => {
        return numberOne === numberTwo

    }

    previousPage = () => {
        if (this.state.presentPage > 0)
        this.changePage(this.state.presentPage - 1) 
    }

    nextPage = () => {
        if (this.state.presentPage < this.props.pages)
        this.changePage(this.state.presentPage + 1) 
    }
    render() {

        const { pages, onPageChange } = this.props;
        const { presentPage } = this.state;
        const { changePage } = this;
        return (
            <div className="pagination">
                <ul className="pagination__list">
                    {presentPage > 1 && 
                    <li 
                        onClick={this.previousPage}
                        className={`pagination__list__item${(true) ? ' pagination__list__item--active' : ''}`}>{'<'}
                    </li>}
                    {[...Array(pages)].map((el, page) =>
                    <li
                        key={++page}
                        onClick={() => { changePage(page) }}
                        className={`pagination__list__item${(this.isSameNumber(page, presentPage)) ? ' pagination__list__item--active' : ''}`}>
                        {page}
                    </li>
                    )}
                    {presentPage < pages && 
                        <li 
                            onClick={this.nextPage}
                            className={`pagination__list__item${(true) ? ' pagination__list__item--active' : ''}`}>{'>'}
                        </li>
                    }
                </ul>
            </div>
        );
    };
};

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    initialPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;