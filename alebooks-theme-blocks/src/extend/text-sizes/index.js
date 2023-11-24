import classnames from "classnames/dedupe";
import { __ } from "@wordpress/i18n";
import { hasBlockSupport } from "@wordpress/blocks";
import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { Component, Fragment } from "@wordpress/element";
import {
  BaseControl,
  Panel,
  PanelBody,
  PanelRow,
  Icon,
  ToggleControl,
  ColorPalette
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
import { removeClasses } from '../../tools';
import lodash from 'lodash';

import icons from "./icons.js";

let initalOpenPanel = false;

const allowedBlocks = ["core/paragraph", "core/heading"];

const colors = [
  { name: "white", color: "#FFFFFF" },
	{ name: "light-grey", color: "#F8F7F7" },
	{ name: "black", color: "#1C1B1B" },
	{ name: "red", color: "#F0392D" },
	{ name: "black-b", color: "#000000" },
];

function getColorName(colorValue) {
  const color = colors.find((c) => c.color === colorValue);
  if (color) {
    return color.name;
  } else {
    return null;
  }
}

class TextOptionsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attributes, setAttributes } = this.props;
    const { medium, t1, t2, t3,t3dest,  t4, t5, t1dest, banner, textColor } = attributes;

    let allow = false;

    const name = this.props.name;

    if (!allow) {
      allow = allowedBlocks.includes(name);
    }

    if (!allow) {
      return null;
    }

    return (
      <InspectorControls>
        <Panel>
          <PanelBody
            title={
              <Fragment>
                <Icon icon={icons.options} className="art-ext-icon" />
                <span>{__("Tamaño de texto")} </span>
              </Fragment>
            }
            className="art-mb-xs"
            initialOpen={initalOpenPanel}
            onToggle={() => {
              initalOpenPanel = !initalOpenPanel;
            }}
          >
            <PanelRow>
              <ToggleControl
                className="art-mt-xs"
                label={__("Tamaño H1")}
                checked={t1}
                onChange={(newValue) => {
                  setAttributes({ t1: newValue });
                }}
              />
            </PanelRow>

             <PanelRow>
              <ToggleControl
                className="art-mt-xs"
                label={__("Tamaño H1 Dest")}
                checked={t1dest}
                onChange={(newValue) => {
                  setAttributes({ t1dest: newValue });
                }}
              />
            </PanelRow>

            <PanelRow>
              <ToggleControl
                className="art-mt-xs"
                label={__("Tamaño H2")}
                checked={t2}
                onChange={(newValue) => {
                  setAttributes({ t2: newValue });
                }}
              />
            </PanelRow>

            <PanelRow>
              <ToggleControl
                className="art-mt-xs"
                label={__("Tamaño H3")}
                checked={t3}
                onChange={(newValue) => {
                  setAttributes({ t3: newValue });
                }}
              />
            </PanelRow>

            <PanelRow>
              <ToggleControl
                className="art-mt-xs"
                label={__("Tamaño H3 Dest")}
                checked={t3dest}
                onChange={(newValue) => {
                  setAttributes({ t3dest: newValue });
                }}
              />
            </PanelRow>

            <PanelRow>
              <ToggleControl
                className="art-mt-xs"
                label={__("Tamaño H4")}
                checked={t4}
                onChange={(newValue) => {
                  setAttributes({ t4: newValue });
                }}
              />
            </PanelRow>

            <PanelRow>
              <ToggleControl
                className="art-mt-xs"
                label={__("Tamaño H5")}
                checked={t5}
                onChange={(newValue) => {
                  setAttributes({ t5: newValue });
                }}
              />
            </PanelRow>

            <PanelRow>
              <ToggleControl
                className="art-mt-xs"
                label={__("Tamaño Banner")}
                checked={banner}
                onChange={(newValue) => {
                  setAttributes({ banner: newValue });
                }}
              />
            </PanelRow>
            
          </PanelBody>
          <PanelBody
            title={
              <Fragment>
                <Icon icon={icons.color} className="art-ext-icon" />
                <span>{__("Color del texto")} </span>
              </Fragment>
            }
            className="art-mb-xs"
            initialOpen={initalOpenPanel}
            onToggle={() => {
              initalOpenPanel = !initalOpenPanel;
            }}
          >
            <ColorPalette
              colors={colors}
              className="art-mt-xs"
              value={textColor}
              onChange={(newColor) => {
                setAttributes({ textColor: newColor });
              }}
              disableCustomColors
            />
          </PanelBody>
        </Panel>
      </InspectorControls>
    );
  }
}

function addAttributes(settings) {
  const { attributes } = settings;
  if (allowedBlocks.includes(settings.name)) {
    return {
      ...settings,
      attributes: {
        ...attributes,
        t1: {
          type: "boolean",
          default: false
        },
        t1dest: {
          type: "boolean",
          default: false
        },
        t2: {
          type: "boolean",
          default: false
        },
        t3: {
          type: "boolean",
          default: false
        },
        t3dest: {
          type: "boolean",
          default: false
        },
        t4: {
          type: "boolean",
          default: false
        },
        banner: {
          type: "boolean",
          default: false
        },

        textColor: {
          type: "string",
          default: ""
        }
      }
    };
  }
  return settings;
}

const withTextOptionsComponent = createHigherOrderComponent(
  (BlockEdit) =>
    function (props) {
      const { attributes } = props;

      if (!allowedBlocks.includes(props.name)) {
        return <BlockEdit {...props} />;
      }

      const hasCustomClassName = hasBlockSupport(
        props.name,
        "customClassName",
        true
      );

      if (attributes.className)
        attributes.className = removeClasses(attributes.className, "color-");

      let classes = [];
      classes.push({ "has-size-t1": attributes.t1 });
      classes.push({ "has-size-t1dest": attributes.t1dest });
      classes.push({ "has-size-t2": attributes.t2 });
      classes.push({ "has-size-t3": attributes.t3 });
      classes.push({ "has-size-t3-dest": attributes.t3dest });
      classes.push({ "has-size-t4": attributes.t4 });
      classes.push({ "has-size-t5": attributes.t5 });
      classes.push({ "has-size-banner": attributes.banner });

      let colorName = getColorName(attributes.textColor);
      if (colorName) {
        classes.push(`color-${colorName}`);
      }

      attributes.className = classnames(attributes.className, classes);

      if (hasCustomClassName && props.isSelected) {
        return (
          <Fragment>
            <BlockEdit {...props} />
            <TextOptionsComponent {...props} />
          </Fragment>
        );
      }

      return <BlockEdit {...props} />;
    },
  "withTextOptionsComponent"
);

function applyExtraClass(extraProps, blockType, attributes) {
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }

  /* if (extraProps.className)
		extraProps.className = removeClasses(extraProps.className, 'color-'); */

  let classes = [];
  classes.push({ "has-size-t1": attributes.t1 });
  classes.push({ "has-size-t1dest": attributes.t1dest });
  classes.push({ "has-size-t2": attributes.t2 });
  classes.push({ "has-size-t3": attributes.t3 });
  classes.push({ "has-size-t3-dest": attributes.t3dest });
  classes.push({ "has-size-t4": attributes.t4 });
  classes.push({ "has-size-t5": attributes.t5 });
  classes.push({ "has-size-banner": attributes.banner });
  

  let colorName = getColorName(attributes.textColor);
  if (colorName) {
    classes.push(`color-${colorName}`);
  }

  return {
    ...extraProps,
    className: classnames(extraProps.className, classes)
  };
}

addFilter(
  "blocks.registerBlockType",
  "wp-artsolut-blocks/TextOptionsComponent/attributes",
  addAttributes
);

addFilter(
  "editor.BlockEdit",
  "wp-artsolut-blocks/TextOptionsComponent/advanced",
  withTextOptionsComponent
);

addFilter(
  "blocks.getSaveContent.extraProps",
  "wp-artsolut-blocks/TextOptionsComponent/applyExtraClass",
  applyExtraClass
);
