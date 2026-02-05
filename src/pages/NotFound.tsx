import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="container-custom text-center">
          <h1 className="text-8xl md:text-9xl font-display font-bold text-teal mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="btn-accent">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
