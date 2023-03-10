import gpiop from 'rpi-gpio';

export const sendSignalToBrake = async ( _req, res ) => {
  const PIN_FRENAR = 21;
  try {
    await gpiop.setup( PIN_FRENAR, gpiop.DIR_OUT );

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
    l//await gpiop.setup( PIN_FRENAR, gpiop.DIR_OUT );

    //await gpiop.write( PIN_FRENAR, false );

    gpiop.setup(21, gpiop.DIR_OUT)
    .then(() => {
        return gpiop.write(21, true)
    })
    .catch((err) => {
        console.log('Error: ', err.toString())
    })


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