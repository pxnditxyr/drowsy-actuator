import { Router } from 'express';
import { sendSignal } from '../controllers/drowsiness.js';

const router = Router();

router.get( '/send-signal', sendSignal );

export { router as drowsinessRouter };
