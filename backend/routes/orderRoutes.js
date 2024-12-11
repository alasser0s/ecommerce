const express = require('express');
const router = express.Router();
const {
  addOrderItems,
  createPaymentIntent,
  updateOrderToPaid,
  getOrderById,
  getMyOrders,
} = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/payment-intent').post(protect, createPaymentIntent);
router.route('/:id/pay').put(protect, updateOrderToPaid);

module.exports = router;
