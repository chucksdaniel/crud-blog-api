const getAllBlog = (req, res) => {
	res.send("Get all blog in the Database");
};

const getBlog = (req, res) => {
	res.send("Get a Particular blog");
};

const createBlog = (req, res) => {
	res.send("Create a new blog");
};

const updateBlog = (req, res) => {
	res.send("Update a blog post");
};

const deleteBlog = (req, res) => {
	res.send("Delete a blog post");
};

module.exports = {
	getAllBlog,
	getBlog,
	createBlog,
	updateBlog,
	deleteBlog,
};
