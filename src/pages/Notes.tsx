import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Brain, 
  CheckSquare, 
  FileText, 
  LayoutDashboard, 
  Plus,
  Search,
  MoreVertical,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Notes = () => {
  const notes = [
    {
      id: 1,
      title: "Product Launch Strategy",
      preview: "Key considerations for Q1 launch including market analysis, competitive positioning...",
      updated: "2 hours ago",
      tags: ["strategy", "product"]
    },
    {
      id: 2,
      title: "Meeting Notes - Team Sync",
      preview: "Discussion points: new feature rollout, timeline adjustments, resource allocation...",
      updated: "Yesterday",
      tags: ["meeting", "team"]
    },
    {
      id: 3,
      title: "Research: AI Trends 2024",
      preview: "Emerging patterns in AI adoption, key technologies to watch, industry insights...",
      updated: "3 days ago",
      tags: ["research", "ai"]
    },
    {
      id: 4,
      title: "Project Ideas Brainstorm",
      preview: "Collection of potential project concepts and initial thoughts on implementation...",
      updated: "1 week ago",
      tags: ["ideas", "brainstorm"]
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
          <Link to="/tasks" className="block">
            <Button variant="ghost" className="w-full justify-start">
              <CheckSquare className="mr-2 h-4 w-4" />
              Tasks
            </Button>
          </Link>
          <Button variant="default" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" />
            Notes
          </Button>
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
            New Note
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">Notes</h2>
          <p className="text-muted-foreground mt-1">Capture and organize your ideas</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search notes..." className="pl-10" />
        </div>

        {/* AI Summary Card */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent/10">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">AI-Powered Note Features</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get smart summaries, connect related notes, and extract key insights automatically
              </p>
              <Button size="sm" variant="outline">
                Try AI Summary
              </Button>
            </div>
          </div>
        </Card>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <Card 
              key={note.id}
              className="p-6 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <FileText className="h-5 w-5 text-primary" />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              
              <h3 className="font-semibold mb-2 line-clamp-1">{note.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{note.preview}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {note.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{note.updated}</span>
              </div>
            </Card>
          ))}

          {/* Create New Note Card */}
          <Card className="p-6 border-dashed border-2 hover:border-primary transition-colors cursor-pointer flex items-center justify-center min-h-[200px]">
            <div className="text-center">
              <Plus className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm font-medium text-muted-foreground">Create New Note</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Notes;
