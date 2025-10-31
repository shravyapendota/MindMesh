import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Brain, 
  CheckSquare, 
  FileText, 
  LayoutDashboard, 
  Plus,
  TrendingUp,
  Target,
  Clock,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Tasks Completed", value: "12", change: "+3 today", icon: CheckSquare, color: "text-primary" },
    { label: "Active Projects", value: "5", change: "2 due soon", icon: Target, color: "text-accent" },
    { label: "Notes Created", value: "28", change: "+2 this week", icon: FileText, color: "text-success" },
    { label: "AI Insights", value: "47", change: "Generated", icon: Sparkles, color: "text-accent" },
  ];

  const recentTasks = [
    { id: 1, title: "Review Q4 strategy deck", status: "in-progress", priority: "high" },
    { id: 2, title: "Update project roadmap", status: "completed", priority: "medium" },
    { id: 3, title: "Team sync meeting prep", status: "pending", priority: "high" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-border bg-card p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            MindMesh
          </h1>
          <p className="text-sm text-muted-foreground mt-1">AI Productivity Brain</p>
        </div>

        <nav className="space-y-2">
          <Button 
            variant={activeTab === "overview" ? "default" : "ghost"} 
            className="w-full justify-start"
            onClick={() => setActiveTab("overview")}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Link to="/tasks" className="block">
            <Button variant="ghost" className="w-full justify-start">
              <CheckSquare className="mr-2 h-4 w-4" />
              Tasks
            </Button>
          </Link>
          <Link to="/notes" className="block">
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Notes
            </Button>
          </Link>
          <Link to="/ai-chat" className="block">
            <Button variant="ghost" className="w-full justify-start">
              <Brain className="mr-2 h-4 w-4" />
              AI Assistant
            </Button>
          </Link>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Button className="w-full" variant="default">
            <Plus className="mr-2 h-4 w-4" />
            Quick Add
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">Good morning! 👋</h2>
          <p className="text-muted-foreground mt-1">Here's what's happening with your productivity</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-2">{stat.change}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Tasks */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Recent Tasks</h3>
              <Link to="/tasks">
                <Button variant="ghost" size="sm">View all</Button>
              </Link>
            </div>
            <div className="space-y-4">
              {recentTasks.map((task) => (
                <div 
                  key={task.id} 
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CheckSquare className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-muted-foreground capitalize">{task.status}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    task.priority === "high" 
                      ? "bg-destructive/10 text-destructive" 
                      : "bg-accent/10 text-accent"
                  }`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* AI Insights */}
          <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-semibold">AI Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-background/50 backdrop-blur">
                <p className="text-sm mb-2">💡 You're most productive between 9-11 AM</p>
                <p className="text-xs text-muted-foreground">Based on task completion patterns</p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 backdrop-blur">
                <p className="text-sm mb-2">🎯 3 high-priority tasks need attention</p>
                <p className="text-xs text-muted-foreground">Suggested focus for today</p>
              </div>
              <Link to="/ai-chat">
                <Button variant="default" className="w-full mt-2">
                  <Brain className="mr-2 h-4 w-4" />
                  Chat with AI
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
