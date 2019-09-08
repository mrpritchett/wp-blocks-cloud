const { Component, createElement } = wp.element
const { Disabled } = wp.components

export default class Editor extends Component {
  render = () => {
    const { padding, margin, backgroundImage, backgroundColor, backgroundSize, backgroundPosition, backgroundRepeat, borderWidth, borderStyle, borderColor, logoType, logoImage, logoTitle, logoDescription } = this.props.block.attributes

    const style = {
      backgroundColor: 'rgba(' + backgroundColor.r + ', ' + backgroundColor.g + ', ' + backgroundColor.b + ', ' + backgroundColor.a + ')',
      backgroundImage: backgroundImage.url ? 'url(' + backgroundImage.url + ')' : 'inherit',
      backgroundPosition: backgroundPosition ? backgroundPosition : 'inherit',
      backgroundRepeat: backgroundRepeat ? backgroundRepeat : 'inherit',
      backgroundSize: backgroundSize ? backgroundSize : 'inherit',
      borderColor: 'rgba(' + borderColor.r + ', ' + borderColor.g + ', ' + borderColor.b + ', ' + borderColor.a + ')',
      borderWidth: borderWidth + 'px',
      borderStyle: borderStyle,
      margin: margin.top + 'px ' + margin.right + 'px ' + margin.bottom + 'px ' + margin.left + 'px',
      padding: padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px ' + padding.left + 'px',
    }

    return (
      <Disabled>
        <div className="builder-blocks-logo-block" style={ style }>
          {
            logoType === 'image'
              ? (
                <a className="site-branding" href={ location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') }><img src={ logoImage.media.url } alt={ logoImage.media.alt } /></a>
              ) : (
                <div className="site-branding">
                  <h1 className="site-title"><a href={ location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') }>{ logoTitle }</a></h1>
                  {
                    logoDescription && (
                      <h2 className="site-description">{ logoDescription }</h2>
                    )
                  }
                </div>
              )
          }
        </div>
      </Disabled>
    )
  }
}
