// components/user/Text.js
import React, {useState, useEffect} from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'
import {Slider, FormControl, FormLabel} from "@material-ui/core";
import {Typography} from '@simpplr/athena-ui';

export const Text = ({text, fontSize, textAlign}) => {

    // const { connectors: {connect, drag}, actions: {setProp} } = useNode();
    const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode, actions: {setProp} } = useNode((state) => ({
        // hasSelectedNode: state.events.selected.size > 0,
        // hasDraggedNode: state.events.dragged.size > 0
      }));

      // const [editable, setEditable] = useState(false);

      // useEffect(() => {!hasSelectedNode && setEditable(false)}, [hasSelectedNode]);


  return (
      <div
      ref={ref => connect(drag(ref))}
      >
        <Typography>
            Athena text
        </Typography>
         {/* <p style={{fontSize}}>{text}</p> */}
         {/* <ContentEditable
         disabled={editable}
        html={text} 
        onChange={e => 
          setProp(props => 
            props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")  
          )
        } 
        tagName="p"
        style={{fontSize: `${fontSize}px`, textAlign}}
      /> */}
      {/* {
        hasSelectedNode && (
          <FormControl className="text-additional-settings" size="small">
            <FormLabel component="legend">Font size</FormLabel>
            <Slider
              defaultValue={fontSize}
              step={1}
              min={7}
              max={50}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setProp(props => props.fontSize = value);
              }}
            />
          </FormControl>
        )
      } */}
      </div>
  )
}