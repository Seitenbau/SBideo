import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import { Editor, EditorState, ContentState } from 'draft-js';

export default class InlineEditor extends Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);

    this.state = {
      value: props.value,
      editorState: EditorState.createWithContent(
        ContentState.createFromText(props.value)
      )
    };
  }

  propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  onChange(editorState) {
    const value = editorState.getCurrentContent().getPlainText();
    this.setState(
      {
        editorState,
        value
      },
      () => this.props.onChange(value)
    );
  }

  // TODO fix focus errors etc

  // workaround from https://github.com/facebook/draft-js/issues/1198#issuecomment-344468123
  componentWillReceiveProps(nextProps) {
    const { editorState, value } = this.state;
    const nextValue = nextProps.value;
    if (value !== nextValue) {
      // check that text has changed before updating the editor
      const selectionState = editorState.getSelection();
      const newContentState = ContentState.createFromText(nextProps.value);
      const newEditorState = EditorState.create({
        currentContent: newContentState,
        selection: selectionState // make sure the new editor has the old editor's selection state
      });
      this.setState({
        ...nextProps,
        editorState: newEditorState
      });
    }
  }

  /*
  // or workaround from https://github.com/facebook/draft-js/issues/989#issuecomment-332522174
  getCreatedEditorState(value) {
    return EditorState.createWithContent(ContentState.createFromText(value));
  }

  componentWillMount() {
    const { value } = this.props;

    this.setState({
      editorState: this.getCreatedEditorState(value)
    });
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;

    if (!this.props.value && value) {
      this.setState({ editorState: this.getCreatedEditorState(value) });
    }
  }
  */

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        placeholder="Enter text..."
        stripPastedStyles
      />
    );
  }
}
