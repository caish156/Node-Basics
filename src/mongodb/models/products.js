module.exports = (mongoose) => {
  const productSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      discount: { type: Number, required: true },
      category: { type: String, required: true },
    },
    {
      timestamps: true, // Like Sequelize, adds createdAt & updatedAt
    }
  );

  return mongoose.model("Product", productSchema);
};