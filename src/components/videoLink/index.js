import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import Meta from '../../components/meta';

export default class VideoLink extends Component {
  constructor(props) {
    super(props);
    this.togglePopperHoverState = this.togglePopperHoverState.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  state = {
    tooltipHovered: false,
    popperHovered: false,
    showTooltip: false
  };

  showOrHideTooltip() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (!this.state.tooltipHovered && !this.state.popperHovered) {
        this.setState({ showTooltip: false });
      } else {
        this.setState({ showTooltip: true });
      }
    }, 50);
  }

  toggleTooltip() {
    // Toggle state
    const tooltipHovered = !this.state.tooltipHovered;
    this.setState({ tooltipHovered: tooltipHovered }, this.showOrHideTooltip);
  }

  togglePopperHoverState() {
    // Toggle state
    const popperHovered = !this.state.popperHovered;
    this.setState({ popperHovered: popperHovered }, this.showOrHideTooltip);
  }

  render(props, state) {
    const { meta, activeVideoId } = props;
    return (
      <li className="video">
        <Manager>
          <Target className={style.videoLink}>
            <Link
              onMouseOver={this.toggleTooltip}
              onMouseLeave={this.toggleTooltip}
              href={`/${meta.id}/${encodeURIComponent(meta.title)}`}
              activeClassName={
                activeVideoId === meta.id ? style.active : style.inactive
              }
            >
              {meta.title}
            </Link>
          </Target>
          {state.showTooltip && (
            <Popper
              placement="right"
              className={style.popper}
              onMouseEnter={this.togglePopperHoverState}
              onMouseLeave={this.togglePopperHoverState}
            >
              <Meta meta={meta} />
              <Arrow className={style.popperarrow} />
            </Popper>
          )}
        </Manager>
      </li>
    );
  }
}
