import { Router } from 'express';
import { sendSignalToBrake, sendSignalToNotBrake } from '../controllers/drowsiness.js';

const router = Router();

router.get( '/brake', sendSignalToBrake );
router.get( '/brake', sendSignalToNotBrake );


export { router as drowsinessRouter };
