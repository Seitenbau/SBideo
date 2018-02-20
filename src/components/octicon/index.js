import { h } from 'preact';
import PropTypes from 'prop-types';
import style from './style.scss';

const Octicon = ({ children, ...props }) => (
  <span className={style.span} {...props}>
    <img
      src={`${process.env.ASSET_PATH}octicons/build/svg/${props.name}.svg`}
      alt={props.alt || props.name}
      role="presentation"
    />
    {children}
  </span>
);

Octicon.propTypes = {
  children: PropTypes.array,
  name: PropTypes.string,
  alt: PropTypes.string
};

export default Octicon;
