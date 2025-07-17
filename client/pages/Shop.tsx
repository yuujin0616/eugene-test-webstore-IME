import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Star, Filter, Grid, List } from "lucide-react";
import Layout from "@/components/Layout";

export default function Shop() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299,
      originalPrice: 399,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      category: "Electronics",
      description:
        "High-quality wireless headphones with noise cancellation and premium sound quality.",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 249,
      originalPrice: 329,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 89,
      badge: "New",
      category: "Electronics",
      description:
        "Advanced fitness tracking with heart rate monitoring and GPS functionality.",
    },
    {
      id: 3,
      name: "Minimalist Laptop Stand",
      price: 89,
      originalPrice: 129,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 67,
      badge: "Sale",
      category: "Accessories",
      description:
        "Ergonomic laptop stand with adjustable height and premium aluminum build.",
    },
    {
      id: 4,
      name: "Eco-Friendly Water Bottle",
      price: 35,
      originalPrice: 45,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 156,
      badge: "Eco",
      category: "Lifestyle",
      description:
        "Sustainable water bottle made from recycled materials with temperature retention.",
    },
    {
      id: 5,
      name: "Wireless Charging Pad",
      price: 59,
      originalPrice: 79,
      image:
        "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 43,
      badge: "Tech",
      category: "Electronics",
      description:
        "Fast wireless charging pad compatible with all Qi-enabled devices.",
    },
    {
      id: 6,
      name: "Luxury Desk Organizer",
      price: 125,
      originalPrice: 175,
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 91,
      badge: "Premium",
      category: "Home",
      description:
        "Handcrafted wooden desk organizer with multiple compartments and premium finish.",
    },
    {
      id: 7,
      name: "Professional Camera Lens",
      price: 450,
      originalPrice: 550,
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 78,
      badge: "Pro",
      category: "Electronics",
      description:
        "Professional grade camera lens with superior optics and weather sealing.",
    },
    {
      id: 8,
      name: "Artisan Coffee Mug",
      price: 28,
      originalPrice: 35,
      image:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 234,
      badge: "Handmade",
      category: "Lifestyle",
      description:
        "Handcrafted ceramic coffee mug with unique glazing and comfortable grip.",
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      price: 89,
      originalPrice: 120,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 167,
      badge: "Popular",
      category: "Electronics",
      description:
        "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
    },
  ];

  const categories = ["Electronics", "Lifestyle", "Home", "Accessories"];

  const filteredProducts = products.filter((product) => {
    const inPriceRange =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const inSelectedCategories =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    return inPriceRange && inSelectedCategories;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shop All Products</h1>
          <p className="text-muted-foreground">
            Discover our complete collection of premium products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 space-y-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </h3>

              {/* Categories */}
              <div className="space-y-4">
                <h4 className="font-medium">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <label
                        htmlFor={category}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-4">
                <h4 className="font-medium">Price Range</h4>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={500}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([0, 500]);
                }}
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <p className="text-muted-foreground">
                Showing {sortedProducts.length} of {products.length} products
              </p>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <Badge className="absolute top-3 left-3">
                            {product.badge}
                          </Badge>
                          {product.originalPrice > product.price && (
                            <Badge
                              variant="destructive"
                              className="absolute top-3 right-3"
                            >
                              -
                              {Math.round(
                                ((product.originalPrice - product.price) /
                                  product.originalPrice) *
                                  100,
                              )}
                              %
                            </Badge>
                          )}
                        </div>
                        <div className="p-6 space-y-3">
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating)
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {product.rating} ({product.reviews})
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xl font-bold">
                              ${product.price}
                            </span>
                            {product.originalPrice > product.price && (
                              <span className="text-sm text-muted-foreground line-through">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row">
                          <div className="relative sm:w-48 sm:h-48">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-48 sm:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <Badge className="absolute top-3 left-3">
                              {product.badge}
                            </Badge>
                            {product.originalPrice > product.price && (
                              <Badge
                                variant="destructive"
                                className="absolute top-3 right-3"
                              >
                                -
                                {Math.round(
                                  ((product.originalPrice - product.price) /
                                    product.originalPrice) *
                                    100,
                                )}
                                %
                              </Badge>
                            )}
                          </div>
                          <div className="flex-1 p-6 space-y-3">
                            <div className="flex justify-between items-start">
                              <div className="space-y-2">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                  {product.name}
                                </h3>
                                <p className="text-muted-foreground">
                                  {product.description}
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center space-x-2">
                                  <span className="text-2xl font-bold">
                                    ${product.price}
                                  </span>
                                  {product.originalPrice > product.price && (
                                    <span className="text-lg text-muted-foreground line-through">
                                      ${product.originalPrice}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < Math.floor(product.rating)
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  {product.rating} ({product.reviews} reviews)
                                </span>
                              </div>
                              <Badge variant="secondary">
                                {product.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No products found matching your filters.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 500]);
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
}
