const webServer = require('./services/server.js');


startup = async () => {
  console.log('Iniciando aplicación');


  try {
    console.log('Inicializando el módulo del servidor web');
    //inicializamos la configuración
    await webServer.initialize();
  } catch (err) {
    console.error(err);
    process.exit(1); // Non-zero fallo el codigo
  }
}

startup();

//Cerrar todo al salir
shutdown = async (e) => {
  let err = e;
  console.log('Cierre de la aplicación');
  console.log('Exiting process');
  if (err) {
    process.exit(1); // Non-zero fallo el codigo
  } else {
    process.exit(0);
  }
}

process.on('SIGTERM', () => {
  console.log('Received SIGTERM');
  shutdown();
});

process.on('SIGINT', () => {
  console.log('Received SIGINT');
  shutdown();
});

process.on('uncaughtException', err => {
  console.log('Uncaught exception');
  console.error(err);
  shutdown(err);
});