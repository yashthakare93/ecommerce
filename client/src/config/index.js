export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "unisex", label: "Unisex" },
    ],
  },
  {
    label: "Collection",
    name: "collection",
    componentType: "select",
    options: [
      { id: "oversized-tshirt", label: "Oversized T-shirts" },
      { id: "classi-fit-tshirts", label: "Classic Fit T-shirts" },
      { id: "hoodies", label: "Hoodies" },
      { id: "sweatshirts", label: "Sweatshirts" },
  
    ],
  },{
    label: "Material",
    name: "material",
    componentType: "select",
    options: [
      { id: "cotton", label: "Cotton" },
      { id: "polyester", label: "Polyester" },
      { id: "blend", label: "Cotton-Polyester Blend" },
    ]
    
  },
  {
    label: "Color",
    name: "color",
    componentType: "select",
    options: [
      { id: "red", label: "Red" },
      { id: "blue", label: "Blue" },
      { id: "green", label: "Green" },
      { id: "black", label: "Black" },
      { id: "white", label: "White" },
    ],
  },
  {
    label: "Size",
    name: "size",
    componentType: "select",
    options: [
      { id: "xs", label: "XS" },
      { id: "s", label: "S" },
      { id: "m", label: "M" },
      { id: "l", label: "L" },
      { id: "xl", label: "XL" },
      { id: "xxl", label: "XXL" },
    ],
  },
  {
    label: "Print Type",
    name: "printType",
    componentType: "select",
    options: [
      { id: "screen-print", label: "Screen Print" },
      { id: "dtg", label: "DTG (Direct-to-Garment)" },
      { id: "heat-transfer", label: "Heat Transfer" },
      { id: "embroidery", label: "Embroidery" },
      { id: "sublimation", label: "Sublimation" },
      { id: "vinyl", label: "Vinyl Print" },
    ]
    
  },
  {
    label: "Sleeve Length",
    name: "sleeveLength",
    componentType: "select",
    options: [
      { id: "sleeveless", label: "Sleeveless" },
      { id: "half_sleeve", label: "Half Sleeve" },
      { id: "full_sleeve", label: "Full Sleeve" },
      { id: "three_quarter", label: "3/4th Sleeve" },
    ],
  },
  {
    label: "Neck Style",
    name: "neckStyle",
    componentType: "select",
    options: [
      { id: "round_neck", label: "Round Neck" },
      { id: "v_neck", label: "V-Neck" },
      { id: "polo", label: "Polo" },
      { id: "hooded", label: "Hooded" },
    ],
  },
  {
    label: "Gender",
    name: "gender",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "unisex", label: "Unisex" },
    ],
  },
  
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "men",
    label: "Men",
    path: "/shop/listing",
  },
  {
    id: "women",
    label: "Women",
    path: "/shop/listing",
  },
  {
    id: "kids",
    label: "Kids",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  men: "Men",
  women: "Women",
  kids: "Kids",
};

export const collectionOptionsMap = {
  oversized_tshirt: "Oversized T-shirts",
  classic_fit_tshirts: "Classic Fit T-shirts",
  hoodies: "Hoodies",
  sweatshirts: "Sweatshirts",
};

export const filterOptions = {
  category: [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "kids", label: "Kids" },

  ],
  collection: [
    { id: "oversized-tshirt", label: "Oversized T-shirts" },
    { id: "classi-fit-tshirts", label: "Classic Fit T-shirts" },
    { id: "hoodies", label: "Hoodies" },
    { id: "sweatshirts", label: "Sweatshirts" },

  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
