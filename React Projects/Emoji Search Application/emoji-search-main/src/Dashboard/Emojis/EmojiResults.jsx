import { PureComponent } from "react";
import EmojiResultsRow from "./EmojiResultRow";
import Clipboard from "clipboard";
export default class EmojiResults extends PureComponent {
  componentDidMount() {
    this.clipboard = new Clipboard(".copy-it");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    const { emojiData } = this.props;
    return (
      <div className="component-emoji-results">
        {emojiData.map((emoji) => (
          <EmojiResultsRow
            key={emoji.title}
            symbol={emoji.symbol}
            title={emoji.title}
          />
        ))}
      </div>
    );
  }
}
