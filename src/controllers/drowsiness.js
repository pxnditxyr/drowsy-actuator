import rpio from 'rpio';

export const sendSignalToBrake = async ( _req, res ) => {
  const PIN_FRENAR = 40;
  rpio.open( PIN_FRENAR, rpio.OUTPUT, rpio.LOW );

  for (var i = 0; i < 5; i++) {
    rpio.write( PIN_FRENAR, rpio.HIGH );
    rpio.sleep( 1 );

    rpio.write( PIN_FRENAR, rpio.LOW );
    rpio.msleep( 500 );
  }

};

export const sendSignalToNotBrake = async ( _req, res ) => {
  const PIN_FRENAR = 21;
  return res.json({
    message: 'xd'
  })
};