import { wrapController } from './wraps';
import express from 'express';
import controller from './controller';

const router = express.Router();

router.get('/:identifier', wrapController(controller.getByIdentifier));
router.post('/', wrapController(controller.create));
router.patch('/:identifier', wrapController(controller.update));
router.delete('/:identifier', wrapController(controller.remove));

export default router;
