import {Button as AthenaButton} from '@simpplr/athena-ui';
import { useNode, useEditor } from "@craftjs/core";


export const Button = () => {

    const { connectors: {connect, drag} } = useNode();
    const { actions, query, enabled } = useEditor((state) => ({
        enabled: state.options.enabled
      }));


  const handleClick = () => {
    console.log('clicked');
    console.log(query?.getNodes());
    console.log(query.serialize());
  }

  console.log('Button component rendered');
    return (
        <AthenaButton type='button' ref={ref => connect(drag(ref))} onClick={handleClick}>
            Button
            </AthenaButton>
    );
    };