import propTypes from 'prop-types';

export const Modal = ({ src, alt, handleClose }) => (
  <div className="Overlay" onClick={handleClose}>
    <div className={Modal}>
      <img src={src} alt={alt} />
    </div>
  </div>
);

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
    handleClose: propTypes.func.isRequired,
  };