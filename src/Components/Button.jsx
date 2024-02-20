// components/user/Button.js
import React  from "react";
import {Button as MaterialButton} from "@material-ui/core";
import { useNode } from "@craftjs/core";
import {Button as AthenaButton} from '@simpplr/athena-ui';


export const Button = ({size, variant, color, children}) => {
    const { connectors: {connect, drag} } = useNode();

  return (
    <MaterialButton ref={ ref => connect(drag(ref))} size={size} variant={variant} color={color}>
      {children}
    </MaterialButton>
    // <AthenaButton ref={ ref => connect(drag(ref))} size="medium" type="button">
    // {children}
    // </AthenaButton>
  )
}