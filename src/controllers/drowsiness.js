import rpio from 'rpio';

const PIN_FRENAR = 40;
rpio.open( PIN_FRENAR, rpio.OUTPUT, rpio.LOW );

export const sendSignalToGradualBrake = async ( _req, res ) => {
  try {
    const timesToSendSignal = [ 50, 300, 600, 800, 1000 ];

    for ( let i = 0; i < 10; i++ ) {
      if ( i % 2 === 0 ) {
        rpio.write( PIN_FRENAR, rpio.HIGH );
        rpio.msleep( timesToSendSignal[ parseInt( i / 2 ) ] );
      } else {
        rpio.write( PIN_FRENAR, rpio.LOW );
        rpio.msleep( 1000 );
      }
    }
    rpio.write( PIN_FRENAR, rpio.LOW );
    
    return res.json({
      message: 'Se realizo el frenado gradual'
    })
  } catch ( err ) {
    console.log( err );
    return res.status( 500 ).json({
      message: 'Ocurrio un error al intentar frenar'
    })
  }
  
};

export const sendSignalToBrake = async ( _req, res ) => {
  try {
    rpio.write( PIN_FRENAR, rpio.HIGH );
    return res.json({
      message: 'Se realizo el frenado'
    })
  } catch ( err ) {
    console.log( err );
    return res.status( 500 ).json({
      message: 'Ocurrio un error al intentar frenar'
    })
  }
  
};

export const sendSignalToNotBrake = async ( _req, res ) => {
  try {
    rpio.write( PIN_FRENAR, rpio.LOW );
    return res.json({
      message: 'Se dejo de frenar'
    })
  } catch ( err ) {
    console.log( err );
    return res.status( 500 ).json({
      message: 'Ocurrio un error al intentar dejar de frenar'
    })
  }
};
