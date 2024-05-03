import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
  IRouter,
} from '@jupyterlab/application';

import { Widget } from '@lumino/widgets';

import '@jupyterlab/application/style/buttons.css';

import '../style/index.css';

const homePluginId = 'jupyterlab-homebtn:plugin';

const extension: JupyterFrontEndPlugin<void> = {
  id: homePluginId,
  autoStart: true,
  requires: [IRouter],
  activate: async (app: JupyterFrontEnd, router: IRouter): Promise<void> => {
    console.log('jupyterlab-homebtn extension is activated!');

    // Get app commands
    const { commands } = app;

    const namespace = 'jupyterlab-topbar';
    const command = namespace + ':homebtn';

    commands.addCommand(command, {
      label: 'Home',
      execute: (args: any) => {
        window.open('/home', '_blank');
      },
    });
  },
};

export default extension;
