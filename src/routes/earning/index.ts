import { Router } from 'express';

import { URL_PREFIX } from '../../utils/constants';
import getList, { swGetEarning } from './list.get.route';

export const swEarningRouter = {
  [`${URL_PREFIX}/earning`]: {
    get: swGetEarning,
  },
};

const router = Router();

router.get('/', [getList]);

export default router;
