import { h, Component } from 'preact';
import Textarea from 'react-textarea-autosize';

export default class InlineEditor extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  handleChange(event) {
    // remove all line breaks
    const value = event.target.value.replace(/(\r\n|\n|\r)/gm, '');
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render(props, state) {
    return (
      <Textarea
        {...props}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        useCacheForDOMMeasurements
      />
    );
  }
}
