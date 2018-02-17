import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import Meta from '../../components/meta';
import PropTypes from 'prop-types';

export default class VideoLink extends Component {
  state = {
    tooltipLinkHovered: false,
    popperHovered: false,
    showTooltip: false
  };

  static propTypes = {
    meta: PropTypes.object
  };

  showOrHideTooltip() {
    clearTimeout(this.timer);
    this.setState({ showTooltip: true });
    this.timer = setTimeout(() => {
      if (!this.state.tooltipLinkHovered && !this.state.popperHovered) {
        this.setState({ showTooltip: false });
      }
    }, 300);
  }

  toggleLinkHoverState = () => {
    const tooltipLinkHovered = !this.state.tooltipLinkHovered;
    this.setState(
      { tooltipLinkHovered: tooltipLinkHovered },
      this.showOrHideTooltip
    );
  };

  togglePopperHoverState = () => {
    const popperHovered = !this.state.popperHovered;
    this.setState({ popperHovered: popperHovered }, this.showOrHideTooltip);
  };

  metaHasContent = () => {
    const { meta } = this.props;
    return meta && (meta.description.trim() || meta.people.length > 0);
  };

  render(props, state) {
    const { meta } = props;
    return (
      <li className={style.video}>
        <Manager>
          <Target className={style.videoLink}>
            <Link
              onMouseOver={this.toggleLinkHoverState}
              onMouseLeave={this.toggleLinkHoverState}
              href={`/${meta.id}/${meta.slug}`}
              activeClassName={style.active}
            >
              {meta.title}
            </Link>
          </Target>
          {state.showTooltip &&
            this.metaHasContent() && (
              <TopPopper
                placement="right"
                className={style.popper}
                onMouseEnter={this.togglePopperHoverState}
                onMouseLeave={this.togglePopperHoverState}
                modifiers={{
                  flip: {
                    behavior: ['right', 'left', 'bottom', 'top']
                  },
                  preventOverflow: {
                    boundariesElement: 'viewport'
                  }
                }}
              >
                <Meta meta={meta} limitDescription="250" />
                <Arrow className={style.popperarrow} />
              </TopPopper>
            )}
        </Manager>
      </li>
    );
  }
}

// extending Popper so every new popper will have a higher zIndex
class TopPopper extends Component {
  static propTypes = {
    style: PropTypes.object
  };
  componentWillMount() {
    this.props.style = {
      zIndex: Date.now()
    };
  }

  render(props) {
    return <Popper {...props}>{props.children}</Popper>;
  }
}
