import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div onClick={() => handleGetProductDetails(product?._id)}>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Out Of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {`Only ${product?.totalStock} items left`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-4">
          <div className="font-medium mb-2 text-center text-lg sm:text-base overflow-hidden text-ellipsis line-clamp-2 h-12">
            {product?.title}
          </div>

          <div className="flex justify-between items-center mb-2">
            <span className="text-[16px] text-muted-foreground">
              {categoryOptionsMap[product?.category]}
            </span>
            <span className="text-[16px] text-muted-foreground">
              {brandOptionsMap[product?.brand]}
            </span>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap sm:items-center gap-3 sm:gap-4 justify-center sm:justify-start">
            <div className="text-4xl sm:text-xl font-medium mr-1 relative px-4">
              ₹ {product?.salePrice}
            </div>
            {product?.price && (
              <div className="flex sm:flex-nowrap justify-center items-center gap-3 text-sm sm:text-base">
                <div className="flex items-center">
                  <div className="mr-1">M.R.P:</div>
                  <div className="line-through">₹{product?.price}</div>
                </div>
                <div className="text-green-500 font-medium">
                  ({Math.round(((product?.price - product?.salePrice) / product?.price) * 100)}% off)
                </div>
              </div>
            )}
          </div>

        </CardContent>
      </div>
      <CardFooter>
        {product?.totalStock === 0 ? (
          <Button className="w-full opacity-60 cursor-not-allowed">
            Out Of Stock
          </Button>
        ) : (
          <Button
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            className="w-full"
          >
            Add to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
