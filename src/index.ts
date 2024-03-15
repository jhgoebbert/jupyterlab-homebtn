import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
  IRouter,
} from '@jupyterlab/application';

import '@jupyterlab/application/style/buttons.css';

import '../style/index.css';

const logoutPluginId = 'jupyterlab-homebtn:plugin';

const extension: JupyterFrontEndPlugin<void> = {
  id: logoutPluginId,
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
        router.navigate('/home', { hard: true });
      },
    });
  },
};

export default extension;
