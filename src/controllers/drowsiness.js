import gpiop from 'rpi-gpio';

export const sendSignalToBrake = async ( _req, res ) => {
  const PIN_FRENAR = 21;
  try {
    await gpiop.setup( PIN_FRENAR, gpio.DIR_OUT );

    await gpiop.write( PIN_FRENAR, true );
    return res.json({
      message: 'Signal sent, to brake',
    });
  } catch ( err ) {
    console.log( err );
    return res.json({
      message: 'Signal not sent, to brake',
    });
  }
  
};

export const sendSignalToNotBrake = async ( _req, res ) => {
  const PIN_FRENAR = 21;
  try {
    await gpiop.setup( PIN_FRENAR, gpio.DIR_OUT );

    await gpiop.write( PIN_FRENAR, false );
    return res.json({
      message: 'Signal sent, to not brake',
    });
  } catch ( err ) {
    console.log( err );
    return res.json({
      message: 'Signal not sent, to not brake',
    });
  }

};