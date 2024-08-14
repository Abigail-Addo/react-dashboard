import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import "../assets/css/Product.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const [showText, setShowText] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const [productImage, setProductImage] = useState(null);

  const toggleText = () => {
    setShowText(!showText);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setProductImage(selectedImage);
  };

  const addSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("file", productImage);
      let server = await fetch(
        "https://shopping-backend-mhxl.onrender.com/api/v1/store-product-image",
        {
          method: "POST",
          headers: {
            Accept: "application/octet-stream",
          },
          body: formData,
        }
      );

      if (server.status == 200) {
        const response = await server.json();
        const { name, price, description, stock } = getValues();

        const result = await fetch(
          `https://shopping-backend-mhxl.onrender.com/api/v1/product`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              description: description,
              price: parseInt(price),
              stock: parseInt(stock),
              filename: response.filename,
            }),
          }
        );

        const data = await result.json();
        if (data.id > 0) {
          toast.success("Product added successfully");
          reset();
        } else {
          toast.error("Failed to add product");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar toggleText={toggleText}></Navbar>

      <div className={`container ${showText ? "show" : "hide"}`}>
        <Sidebar showText={showText}></Sidebar>
        <main className="container">
          <div className="card-form">
            <form
              onSubmit={handleSubmit(addSubmit)}
              encType="multipart/form-data"
              className="form"
            >
              <ToastContainer />

              <div className="form-controls">
                <label htmlFor="Pname">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Product name"
                  id="name"
                  {...register("name")}
                  required
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>

              <div className="form-controls">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  id="description"
                  {...register("description")}
                  required
                />
                {errors.description && <p>{errors.description.message}</p>}
              </div>
              <div className="form-controls">
                <label htmlFor="price">Price (GH&cent;)</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  id="price"
                  {...register("price")}
                  required
                />
                {errors.price && <p>{errors.price.message}</p>}
              </div>
              <div className="form-controls">
                <label htmlFor="stock">Stock</label>
                <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  id="stock"
                  {...register("stock")}
                  required
                />
                {errors.stock && <p>{errors.stock.message}</p>}
              </div>
              <div className="form-controls">
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={handleImageChange}
                  required
                />
              </div>

              <button type="submit" className="submit">
                Add Product
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Products;
