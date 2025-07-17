import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

interface PlaceholderProps {
  title: string;
  description?: string;
  backLink?: string;
  backLinkText?: string;
}

export default function Placeholder({
  title,
  description = "This page is currently under construction. Check back soon for updates!",
  backLink = "/",
  backLinkText = "Back to Home",
}: PlaceholderProps) {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardHeader>
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Construction className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">{description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to={backLink}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {backLinkText}
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/shop">Browse Products</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Want to see this page implemented? Let us know what features
                you'd like to see!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
