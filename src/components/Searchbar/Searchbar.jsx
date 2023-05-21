import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Searchbar = ({ onSubmit }) => (
  <header className="Searchbar">
    <form className="SearchForm" onSubmit={onSubmit}>
      <button type="submit" className="SearchForm-button">
         <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="xl"
            style={{ color: '#000000' }}
          />
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        name="inputForSearch"
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};  