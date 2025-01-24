import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent className="p-4">
          <div className="font-medium mb-2 text-center text-lg sm:text-base overflow-hidden text-ellipsis line-clamp-2 h-12">
            {product?.title}
          </div>
          <div className="flex flex-wrap sm:flex-nowrap sm:items-center gap-3 sm:gap-4 justify-center sm:justify-start">
            <div className="text-4xl sm:text-xl font-medium mr-1 relative px-4">
              ₹ {product?.salePrice}
            </div>
            {product?.price && (
              <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-3 text-sm sm:text-base">
                <div className="flex items-center">
                  <div className="mr-1">M.R.P:</div>
                  <div className="line-through">₹{product?.price}</div>
                </div>
                <div className="flex items-center text-green-500 font-medium">
                  {Math.round(
                    ((product?.price - product?.salePrice) / product?.price) * 100
                  )}
                  % off
                </div>
              </div>

            )}
          </div>

        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
          >
            Edit
          </Button>
          <Button onClick={() => handleDelete(product?._id)}>Delete</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default AdminProductTile;
