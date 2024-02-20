import {TextInput as AthenaTextInput} from '@simpplr/athena-ui';
import { useNode } from "@craftjs/core";
import { useState } from 'react';

export const TextInput = () => {

    const [value, setValue] = useState('');

    const { actions: {setProp}, connectors: { connect, drag } } = useNode();

    
    const handleInputChange = (e) => {    
        const updatedValue = e.target.value;    
        setValue(value => updatedValue);
        setProp(props => {
            props.text = updatedValue;
          }, 500);
      }

    return (     
        <div ref={ref => connect(drag(ref))}>
        <AthenaTextInput                
        input={{
          value: value,
          name: 'foo',
          onChange:handleInputChange
        }}        
        />        
        </div>   
    )
}