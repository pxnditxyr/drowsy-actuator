import { Router } from 'express';
import { sendSignalToBrake, sendSignalToNotBrake, sendSignalToGradualBrake } from '../controllers/drowsiness.js';

const router = Router();

router.get( '/gradual-brake', sendSignalToGradualBrake );
router.get( '/brake', sendSignalToBrake );
router.get( '/no-brake', sendSignalToNotBrake );


export { router as drowsinessRouter };
