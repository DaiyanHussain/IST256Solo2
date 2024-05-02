import express from 'express';
import * as blogController from '../controller/blogContoller.js';

const router = express.Router();

//Route for getting all Blogs
router.get ('/', blogController.getAllBlog);

//Route for getting a Blog by ID
router.get ('/:id', blogController.getBlogByID);

//Route for creating a new blog post
router.post('/', blogController.createBlogPost);

//Route for liking a blog post
router.put('/like/:id', blogController.likeBlogPost);

//Route for adding a comment
router.post('/:id/comment', blogController.addBlogComment);

//Route for liking a blog Comment
router.put('/:id/comment/like/:commentIndex', blogController.likeBlogComment);

//Route for deleting a blog post
router.delete('/:id', blogController.deleteBlogPost);

export default router;