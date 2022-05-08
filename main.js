const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const { electron } = require("process");
const url = require("url");

app.on('ready', () =>{
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 500,
        icon: path.join(__dirname, 'icon.png'),
       
     
        // transparent: true,
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true
    }));
    mainWindow.openDevTools();
    let mainmenu = Menu.buildFromTemplate(myMenu);
    Menu.setApplicationMenu(mainmenu);
}) 

const myMenu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                role: 'quit',
            },
            {
                label: 'Reload',
                role: 'reload',
            },
            {
                label: 'Maximise',
                role: 'restoredown'
            },
            {
                label: 'Minimize',
                role : 'minimize'
            },
        ]
    }
]
// function getVibrancy() {
//     if(os.platform() === "darwin") {
//      const release = os.release().split('.')[0]
//      if(release >= 18) {
//       return 'fullscreen-ui'
//      }
//     }
//     return (nativeTheme.shouldUseDarkColors ? "dark" : "light")
//    }
//    getVibrancy()