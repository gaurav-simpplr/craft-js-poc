// pages/index.js

import React from 'react';
import { Button } from './Components/AthenaComponents/Button';
import {UIProvider,  Form, Typography} from '@simpplr/athena-ui'
import { TextInput } from './Components/AthenaComponents/TextInput';

import {Editor, Frame, Element, useEditor} from "@craftjs/core";
import './App.css';
// import {Typography, Paper, Grid} from '@material-ui/core';

// import { Toolbox } from './Components/Toolbox';
// import { SettingsPanel } from './Components/SettingsPanel';
// import { Topbar } from './Components/Topbar';

// import { Container } from './Components/Container';
// import { Button } from './Components/Button';
// import { Card, CardTop, CardBottom } from './Components/Card';
// import { Text } from './Components/Text';

const courses = ['course 1', 'course 2', 'course 3', 'course 4'];

const json = {"ROOT":{"type":"div","isCanvas":true,"props":{},"displayName":"div","custom":{},"hidden":false,"nodes":["ptJ537IdwI","uXg4QcqYK9"],"linkedNodes":{}},"uXg4QcqYK9":{"type":"div","isCanvas":false,"props":{"className":"container"},"displayName":"div","custom":{},"parent":"ROOT","hidden":false,"nodes":["DF_V19jYLp","4qfz1jfdpM"],"linkedNodes":{}},"DF_V19jYLp":{"type":"div","isCanvas":false,"props":{"className":"headings"},"displayName":"div","custom":{},"parent":"uXg4QcqYK9","hidden":false,"nodes":["5r0PfzX6Tr"],"linkedNodes":{}},"5r0PfzX6Tr":{"type":"div","isCanvas":true,"props":{},"displayName":"div","custom":{},"parent":"DF_V19jYLp","hidden":false,"nodes":["ienOvX4RCD","pTq7FVR-gE"],"linkedNodes":{}},"ienOvX4RCD":{"type":{"resolvedName":"Typography"},"isCanvas":false,"props":{"name":"paragraph","color":"brandPrimary","id":"template","children":"Template 1 ..."},"displayName":"xf","custom":{},"parent":"5r0PfzX6Tr","hidden":false,"nodes":[],"linkedNodes":{}},"pTq7FVR-gE":{"type":{"resolvedName":"Typography"},"isCanvas":false,"props":{"children":"Template 2 ..."},"displayName":"xf","custom":{},"parent":"5r0PfzX6Tr","hidden":false,"nodes":[],"linkedNodes":{}},"4qfz1jfdpM":{"type":"div","isCanvas":false,"props":{"className":"textInput"},"displayName":"div","custom":{},"parent":"uXg4QcqYK9","hidden":false,"nodes":["a6QEuv82EO"],"linkedNodes":{}},"a6QEuv82EO":{"type":"div","isCanvas":true,"props":{},"displayName":"div","custom":{},"parent":"4qfz1jfdpM","hidden":false,"nodes":["LK5MLk19Qn"],"linkedNodes":{}},"LK5MLk19Qn":{"type":{"resolvedName":"TextInput"},"isCanvas":false,"props":{"text":"results[0].items[0].name"},"displayName":"TextInput","custom":{},"parent":"a6QEuv82EO","hidden":false,"nodes":[],"linkedNodes":{}},"ptJ537IdwI":{"type":{"resolvedName":"Button"},"isCanvas":false,"props":{},"displayName":"Button","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}}}

export default function App() {

  return (
    <UIProvider>
      <Editor resolver={{Button, TextInput, Typography}}>
      <Frame 
      // json={json}
      > 

    <Element is='div' canvas>
      <div className='container'>
        <div className='headings'>
        <Element is='div' canvas>  
    {/* <Typography name='paragraph' color='brandPrimary' id='template'>
      Template 1 ...
    </Typography>
    <Typography>
      Template 2 ...
    </Typography> */}

    {
      courses.map((course, index) => (
        <Typography key={index}>
          {course}
        </Typography>
      ))
    }

    </Element>
    </div>

    <div className='textInput'>
    <Element is='div' canvas>
    {/* <TextInput /> */}
    {/* <Element is='div' canvas> */}
    <Button />
    {/* </Element> */}
    </Element>
    </div>

    </div>
    </Element>
    
    </Frame>
    </Editor>
    </UIProvider>
  );
}

{/* <Form
onSubmit={() => {}}
{...finalFormConfig}
initialValues={initialValues}
>
{children}
</Form> */}

