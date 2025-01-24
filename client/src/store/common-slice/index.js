import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  featureImageList: [],
};

// Get feature images
export const getFeatureImages = createAsyncThunk(
  "/order/getFeatureImages",
  async () => {
    const response = await axios.get(
      `http://localhost:5000/api/common/feature/get`
    );
    return response.data;
  }
);

// Add a feature image
export const addFeatureImage = createAsyncThunk(
  "/order/addFeatureImage",
  async (image) => {
    const response = await axios.post(
      `http://localhost:5000/api/common/feature/add`,
      { image }
    );
    return response.data;
  }
);

// Delete a feature image
export const deleteFeatureImage = createAsyncThunk(
  "/order/deleteFeatureImage",
  async (image) => {
    try {
      console.log('Deleting image with ID:', image);  // Log to ensure the ID is correct
      
      // Send the delete request to the backend
      await axios.delete(`http://localhost:5000/api/common/feature/delete/${image}`);
      
      // Return the imageId after deletion
      return { _id: image };
    } catch (error) {
      console.error('Failed to delete image:', error);  // Log the error if the request fails
     
    }
  }
);


const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get images
      .addCase(getFeatureImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeatureImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList = action.payload.data;
      })
      .addCase(getFeatureImages.rejected, (state) => {
        state.isLoading = false;
        state.featureImageList = [];
      })

      // Add image
      .addCase(addFeatureImage.fulfilled, (state, action) => {
        state.featureImageList.push(action.payload.data);
      })

      // Delete image
      .addCase(deleteFeatureImage.fulfilled, (state, action) => {
        // Remove the deleted image from the list based on the returned imageId
        state.featureImageList = state.featureImageList.filter(
          (image) => image._id !== action.payload._id  // Using _id for MongoDB document
        );
      })
      .addCase(deleteFeatureImage.rejected, (state) => {
        console.error("Failed to delete image");
      });
  },
});

export default commonSlice.reducer;
