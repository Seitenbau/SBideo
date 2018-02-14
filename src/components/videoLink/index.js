import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import Meta from '../../components/meta';

export default class VideoLink extends Component {
  constructor(props) {
    super(props);
    this.togglePopperHoverState = this.togglePopperHoverState.bind(this);
    this.toggleLinkHoverState = this.toggleLinkHoverState.bind(this);
  }

  state = {
    tooltipLinkHovered: false,
    popperHovered: false,
    showTooltip: false
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

  toggleLinkHoverState() {
    const tooltipLinkHovered = !this.state.tooltipLinkHovered;
    this.setState(
      { tooltipLinkHovered: tooltipLinkHovered },
      this.showOrHideTooltip
    );
  }

  togglePopperHoverState() {
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
              onMouseOver={this.toggleLinkHoverState}
              onMouseLeave={this.toggleLinkHoverState}
              href={`/${meta.id}/${meta.slug}`}
              activeClassName={style.active}
            >
              {meta.title}
            </Link>
          </Target>
          {state.showTooltip && (
            <TopPopper
              placement="right"
              hasContent={
                meta && (meta.description.trim() || meta.people.length > 0)
              }
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
              <Meta meta={meta} />
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
  componentWillMount() {
    this.props.style = {
      zIndex: Date.now()
    };
  }

  render(props, state) {
    if (!props.hasContent) {
      return null;
    }
    return <Popper {...props}>{props.children}</Popper>;
  }
}
