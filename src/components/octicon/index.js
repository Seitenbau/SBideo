import { h } from 'preact';
import PropTypes from 'prop-types';
import octicons from 'octicons';
import style from './style.scss';

const Octicon = ({ children, ...props }) => (
  <span
    className={style.span}
    {...props}
    dangerouslySetInnerHTML={{
      __html: octicons[props.name].toSVG()
    }}
  >
    {children}
  </span>
);

Octicon.propTypes = {
  children: PropTypes.array,
  name: PropTypes.string
};

export default Octicon;
