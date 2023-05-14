import PropTypes from 'prop-types';
export default function Searchbar() {
 

  return (

<header classNamesNames="searchbar">
  <form classNames="form">
    <button type="submit" classNames="button">
      <span classNames="button-label">Search</span>
    </button>

    <input
      classNames="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
);
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};   