import { LoadMoreBtn } from "./Button.styled"
import PropTypes from 'prop-types';

export const Button = ({onClick}) => {
    return (
        <LoadMoreBtn type="button" onClick={onClick}>Load More</LoadMoreBtn>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};