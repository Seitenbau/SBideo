import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';
import { PersonIcon } from 'react-octicons';
import { Manager, Target, Popper, Arrow } from 'react-popper';

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
    const { meta } = props;
    return (
      <li className="video">
        <Manager>
          <Target className={style.videoLink}>
            <Link
              onMouseOver={this.toggleTooltip}
              onMouseLeave={this.toggleTooltip}
              href={`/${meta.id}/${encodeURIComponent(meta.title)}`}
              activeClassName="active"
            >
              {meta.title}
            </Link>
          </Target>
          {state.showTooltip && (
            <Popper placement="right" className={style.popper}>
              <div
                className={style.meta}
                onMouseEnter={this.togglePopperHoverState}
                onMouseLeave={this.togglePopperHoverState}
              >
                <div className={style.people}>
                  <PersonIcon className={style.icon} />
                  {meta.people.join(', ')}
                </div>
                <div className={style.tags}>
                  {meta.tags.map((tag, i) => (
                    <a
                      key={`tag${i}`}
                      href={encodeURIComponent(tag)}
                      className={style.tag}
                    >
                      {tag}
                    </a>
                  ))}
                </div>
                <div className="description">{meta.description}</div>
              </div>
              <Arrow className={style.popperarrow} />
            </Popper>
          )}
        </Manager>
      </li>
    );
  }
}
