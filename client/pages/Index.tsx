import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Truck, Shield, Headphones } from "lucide-react";
import Layout from "@/components/Layout";

export default function Index() {
  const featuredProducts = [
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
    },
  ];

  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=300&h=200&fit=crop",
      count: "120+ items",
    },
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
      count: "200+ items",
    },
    {
      name: "Home & Garden",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      count: "150+ items",
    },
    {
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      count: "80+ items",
    },
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $50",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "Your payment information is safe",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get help whenever you need it",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  ✨ New Collection Available
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Discover Your
                  <span className="text-primary"> Perfect </span>
                  Style
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Explore our curated collection of premium products designed
                  for the modern lifestyle. Quality meets innovation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/shop">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
                alt="Featured Products"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.8/5</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  1000+ Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our wide range of categories, each carefully curated to
              meet your needs
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/category/${category.name.toLowerCase()}`}
                className="group block"
              >
                <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.count}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular items, loved by customers worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
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
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Stay in the Loop</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for exclusive deals, new arrivals, and
              style tips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button type="submit">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our Terms and Privacy Policy
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
