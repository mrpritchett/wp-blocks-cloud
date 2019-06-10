const { __ } = wp.i18n
const { InspectorControls } = wp.editor
const { PanelBody, TextControl, TextareaControl } = wp.components

export default function (block) {
  const controls = () => {
    return (
      <InspectorControls>
        <PanelBody title={ __('Menu Item Settings') }>
          <div className="components-base-control">

          </div>
        </PanelBody>
      </InspectorControls>
    )
  }

  const rendered = () => {
    return (
      <div className="wpbc-testimonials-item">
        <header className="wpbc-testimonials-header">
          <TextControl
            placeholder={ __('Write a title for the testimonial here...') }
            onChange={ name => block.setAttributes({ name }) }
            value={ block.attributes.title }
          />

        </header>
        <TextareaControl
          rows="2"
          placeholder={ __('Write a description of the menu item here...') }
          onChange={ description => block.setAttributes({ description }) }
          value={ block.attributes.description }
        />
      </div>
    )
  }

  /**
   * Return the controls, and rendered UIs together as an array
   */
  return [
    controls(),
    rendered()
  ]
}
