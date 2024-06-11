import express, { Router } from "express";
const router = express.Router();
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

import {
  createCategory,
  removeCategory,
  updateCategory,
  listCategory,
  readCategory,
} from "../controllers/categoryController.js";

router.route("/").post(authenticate, authorizeAdmin, createCategory);
router.route("/:categoryId").put(authenticate, authorizeAdmin, updateCategory).delete(authenticate, authorizeAdmin, removeCategory)
router.route('/categories').get(listCategory);
router.route('/:id').get(readCategory)
export default router;
