import { Link } from "react-router-dom";
import { Brain, CheckSquare, FileText, Sparkles, TrendingUp, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: CheckSquare,
      title: "Smart Task Management",
      description: "Organize, prioritize, and track your tasks with intelligent AI suggestions"
    },
    {
      icon: FileText,
      title: "Connected Notes",
      description: "Rich text editor with AI-powered summaries and automatic linking"
    },
    {
      icon: Brain,
      title: "AI Assistant",
      description: "Context-aware AI that learns your workflow and provides personalized insights"
    },
    {
      icon: TrendingUp,
      title: "Productivity Analytics",
      description: "Track your progress with detailed insights and performance metrics"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDApLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <Sparkles className="h-4 w-4" />
              AI-Powered Productivity
            </div>
            
            <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                MindMesh
              </span>
            </h1>
            
            <p className="mb-4 text-xl md:text-2xl font-semibold text-foreground max-w-3xl">
              Your AI Productivity Brain
            </p>
            
            <p className="mb-8 text-lg text-muted-foreground max-w-2xl">
              Unify tasks, notes, and AI assistance in one intelligent workspace. 
              Work smarter with context-aware suggestions and automated insights.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="text-lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/ai-chat">
                <Button size="lg" variant="outline" className="text-lg">
                  <Brain className="mr-2 h-5 w-5" />
                  Try AI Assistant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to stay productive
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you work efficiently and achieve more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-background border-primary/20">
          <div className="text-center max-w-3xl mx-auto">
            <Zap className="h-12 w-12 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your productivity?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of users who have supercharged their workflow with MindMesh
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="text-lg">
                Start Using MindMesh
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 MindMesh. Your AI Productivity Brain.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
