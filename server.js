const express = require("express");

const app = express();

// Import files
const v1blogRoutes = require("./routes/v1/blogRoute");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5500;

app.use(express.json({ extended: false }));
app.use("/api/v1/blogs", v1blogRoutes);

app.listen(PORT, () => {
	console.log(`Blog API is running on port ${PORT}`);
});
