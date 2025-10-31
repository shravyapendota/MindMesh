import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Brain, 
  CheckSquare, 
  FileText, 
  LayoutDashboard, 
  Plus,
  Search,
  Filter,
  Calendar,
  Tag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const Tasks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const tasks = [
    { 
      id: 1, 
      title: "Review Q4 strategy deck", 
      completed: false, 
      priority: "high",
      project: "Strategy",
      dueDate: "Today",
      tags: ["urgent", "review"]
    },
    { 
      id: 2, 
      title: "Update project roadmap", 
      completed: true, 
      priority: "medium",
      project: "Planning",
      dueDate: "Yesterday",
      tags: ["planning"]
    },
    { 
      id: 3, 
      title: "Team sync meeting prep", 
      completed: false, 
      priority: "high",
      project: "Team",
      dueDate: "Today",
      tags: ["meeting", "urgent"]
    },
    { 
      id: 4, 
      title: "Write blog post draft", 
      completed: false, 
      priority: "low",
      project: "Content",
      dueDate: "Next week",
      tags: ["writing"]
    },
    { 
      id: 5, 
      title: "Code review for feature X", 
      completed: false, 
      priority: "medium",
      project: "Development",
      dueDate: "Tomorrow",
      tags: ["dev", "review"]
    },
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
          <Link to="/dashboard" className="block">
            <Button variant="ghost" className="w-full justify-start">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Button variant="default" className="w-full justify-start">
            <CheckSquare className="mr-2 h-4 w-4" />
            Tasks
          </Button>
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
            New Task
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">Tasks</h2>
          <p className="text-muted-foreground mt-1">Manage and organize your work</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search tasks..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Due Date
          </Button>
        </div>

        {/* Task List */}
        <Card className="p-6">
          <div className="space-y-2">
            {tasks.map((task) => (
              <div 
                key={task.id}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <Checkbox checked={task.completed} />
                <div className="flex-1">
                  <p className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {task.title}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-muted-foreground">{task.project}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {task.dueDate}
                    </span>
                    <div className="flex gap-1">
                      {task.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  task.priority === "high" 
                    ? "bg-destructive/10 text-destructive" 
                    : task.priority === "medium"
                    ? "bg-accent/10 text-accent"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Total Tasks</p>
            <p className="text-2xl font-bold mt-1">{tasks.length}</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Completed</p>
            <p className="text-2xl font-bold mt-1 text-success">
              {tasks.filter(t => t.completed).length}
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold mt-1 text-accent">
              {tasks.filter(t => !t.completed).length}
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Tasks;
