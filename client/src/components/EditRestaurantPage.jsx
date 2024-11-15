import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';  // Updated import
import '../styles/EditRestaurantPage.css';
function EditRestaurantPage() {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const [restaurant, setRestaurant] = useState({
    name: '',
    image: '',
    cuisine: '',
    location: '',
    rating: '',
    is_veg: false,
    most_popular_dishes: '',
    city: '',
    seats_available: '',
  });

  const [imageFile, setImageFile] = useState(null); // State to store selected image

  // Fetch restaurant data when the page loads
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/restaurants/${id}`);
        setRestaurant(response.data);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };

    fetchRestaurant();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRestaurant({
      ...restaurant,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRestaurant((prevState) => ({
          ...prevState,
          image: reader.result, // Store the image data URL in the state
        }));
      };
      reader.readAsDataURL(file); // Read the selected file as a data URL
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    // Append form data for image and restaurant fields
    if (imageFile) {
      formData.append('image', imageFile);
    }
    formData.append('name', restaurant.name);
    formData.append('cuisine', restaurant.cuisine);
    formData.append('location', restaurant.location);
    formData.append('rating', restaurant.rating);
    formData.append('is_veg', restaurant.is_veg);
    formData.append('most_popular_dishes', restaurant.most_popular_dishes);
    formData.append('city', restaurant.city);
    formData.append('seats_available', restaurant.seats_available);

    try {
      // Send the form data (including the image) to the backend
      await axios.put(`http://localhost:3000/api/restaurants/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/admin'); // Use navigate instead of history.push()
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  return (
    <div className="edit-restaurant-page">
      <h2>Edit Restaurant</h2>

      <form onSubmit={handleSubmit} className="restaurant-form">
        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          value={restaurant.name}
          onChange={handleChange}
        />
        {/* Updated to file input for image */}
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        {restaurant.image && (
          <div>
            <img
              src={restaurant.image}  // Show the selected image as a preview
              alt="Restaurant Preview"
              style={{ width: '100px', height: '100px' }}
            />
          </div>
        )}
        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine"
          value={restaurant.cuisine}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={restaurant.location}
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={restaurant.rating}
          onChange={handleChange}
        />
        <label>
          Is Vegetarian?
          <input
            type="checkbox"
            name="is_veg"
            checked={restaurant.is_veg}
            onChange={handleChange}
          />
        </label>
        <input
          type="text"
          name="most_popular_dishes"
          placeholder="Most Popular Dishes"
          value={restaurant.most_popular_dishes}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={restaurant.city}
          onChange={handleChange}
        />
        <input
          type="number"
          name="seats_available"
          placeholder="Seats Available"
          value={restaurant.seats_available}
          onChange={handleChange}
        />
        <button type="submit">Update Restaurant</button>
      </form>
    </div>
  );
}

export default EditRestaurantPage;
