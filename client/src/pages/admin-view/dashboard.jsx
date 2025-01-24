import { useDispatch, useSelector } from "react-redux";
import { deleteFeatureImage, getFeatureImages, addFeatureImage } from "@/store/common-slice";
import { Button } from "@/components/ui/button";
import ProductImageUpload from "@/components/admin-view/image-upload";
import { useEffect, useState } from "react";

function AdminDashboard() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const dispatch = useDispatch();
  const { featureImageList } = useSelector((state) => state.commonFeature);

  // Handle image upload
  function handleUploadFeatureImage() {
    if (uploadedImageUrl) {
      dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
        if (data?.payload?.success) {
          dispatch(getFeatureImages());
          setImageFile(null);
          setUploadedImageUrl("");
        } else {
          console.log("Upload failed, try again.");
        }
      });
    } else {
      console.log("No image URL available for upload.");
    }
  }

  // Handle image deletion
  function handleDeleteFeatureImage(imageId) {
    dispatch(deleteFeatureImage(imageId)).then(() => {
      dispatch(getFeatureImages());  // Refresh the image list after deletion
    });
  }

  // Fetch images on component mount
  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div>
      <ProductImageUpload
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        setImageLoadingState={setImageLoadingState}
        imageLoadingState={imageLoadingState}
        isCustomStyling={true}
      />
      <Button onClick={handleUploadFeatureImage} className="mt-5 w-full">
        Upload
      </Button>
      <div className="flex flex-col gap-4 mt-5">
        {featureImageList && featureImageList.length > 0 ? (
          featureImageList.map((featureImgItem, index) => (
            <div key={index} className="relative">
              <img
                src={featureImgItem.image}
                className="w-full h-[300px] object-cover rounded-t-lg"
                alt={`Feature Image ${index + 1}`}
              />
              <Button
                onClick={() => handleDeleteFeatureImage(featureImgItem._id)} // Use _id for deletion
                className="absolute top-2 right-2 bg-red-600 text-white"
              >
                Delete
              </Button>
            </div>
          ))
        ) : (
          <p>No feature images available.</p>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
