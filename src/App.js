// pages/index.js

import React from 'react';
import {Typography, Paper, Grid} from '@material-ui/core';

import { Toolbox } from './Components/Toolbox';
import { SettingsPanel } from './Components/SettingsPanel';
import { Topbar } from './Components/Topbar';

import { Container } from './Components/Container';
import { Button } from './Components/Button';
import { Card, CardTop, CardBottom } from './Components/Card';
import { Text } from './Components/Text';
import {Editor, Frame, Element} from "@craftjs/core";

const json = {"ROOT":{"type":{"resolvedName":"Container"},"isCanvas":true,"props":{"padding":5,"background":"#eee"},"displayName":"Container","custom":{},"hidden":false,"nodes":["iVYrvsDgkh","l1m4eBq5lH","-yWiexDl5f","887Tk273KW"],"linkedNodes":{}},"iVYrvsDgkh":{"type":{"resolvedName":"Card"},"isCanvas":false,"props":{},"displayName":"Card","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{"text":"3ZVVxkhwv2","buttons":"pvEQZgZxRX"}},"l1m4eBq5lH":{"type":{"resolvedName":"Button"},"isCanvas":false,"props":{"size":"small","variant":"outlined","children":"Click"},"displayName":"Button","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"-yWiexDl5f":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"size":"small","text":"Hellllllloooooo!!!!"},"displayName":"Text","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}},"887Tk273KW":{"type":{"resolvedName":"Container"},"isCanvas":true,"props":{"padding":2,"background":"#999"},"displayName":"Container","custom":{},"parent":"ROOT","hidden":false,"nodes":["htj2AflEPX"],"linkedNodes":{}},"htj2AflEPX":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"size":"small","text":"It's me again!"},"displayName":"Text","custom":{},"parent":"887Tk273KW","hidden":false,"nodes":[],"linkedNodes":{}},"3ZVVxkhwv2":{"type":{"resolvedName":"CardTop"},"isCanvas":true,"props":{},"displayName":"CardTop","custom":{},"parent":"iVYrvsDgkh","hidden":false,"nodes":["maiSioriGE","05ngLdIdQg"],"linkedNodes":{}},"maiSioriGE":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"text":"Testing","fontSize":20},"displayName":"Text","custom":{},"parent":"3ZVVxkhwv2","hidden":false,"nodes":[],"linkedNodes":{}},"05ngLdIdQg":{"type":{"resolvedName":"Text"},"isCanvas":false,"props":{"text":"Testing again","fontSize":15},"displayName":"Text","custom":{},"parent":"3ZVVxkhwv2","hidden":false,"nodes":[],"linkedNodes":{}},"pvEQZgZxRX":{"type":{"resolvedName":"CardBottom"},"isCanvas":true,"props":{},"displayName":"CardBottom","custom":{},"parent":"iVYrvsDgkh","hidden":false,"nodes":["EfNjyzQ5yN"],"linkedNodes":{}},"EfNjyzQ5yN":{"type":{"resolvedName":"Button"},"isCanvas":false,"props":{"size":"small","text":"Learn more"},"displayName":"Button","custom":{},"parent":"pvEQZgZxRX","hidden":false,"nodes":[],"linkedNodes":{}}}

export default function App() {
  return (
    <div style={{margin: "0 auto", width: "800px"}}>
        <Editor resolver={{Card, Button, Text, Container, CardTop, CardBottom}}> 
        <Topbar />
          <Grid container spacing={3}>          
            <Grid item xs>
              <Frame json={json}>
                {/* <Container padding={5} background="#eee"> */}
                <Element is={Container} padding={5} background="#eee" canvas>
                  <Card />
                  <Button size="small" variant="outlined">Click</Button>
                  <Text size="small" text="Hi world!" />
                  <Element is={Container} padding={2} background="#999" canvas>
                  {/* <Container padding={6} background="#999"> */}
                    <Text size="small" text="It's me again!" />
                  {/* </Container> */}
                  </Element>
                {/* </Container> */}
                </Element>
              </Frame>
            </Grid>
            <Grid item xs={3}>
              <Paper>
                  <Toolbox />
                  <SettingsPanel />
              </Paper>          
            </Grid>
          </Grid>
        </Editor>
    </div>
  );
}

