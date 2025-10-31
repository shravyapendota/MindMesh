import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Brain, 
  CheckSquare, 
  FileText, 
  LayoutDashboard, 
  Send,
  Sparkles,
  Lightbulb,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const AIChat = () => {
  const [message, setMessage] = useState("");
  
  const suggestions = [
    { icon: Lightbulb, text: "Summarize my tasks for today", color: "text-accent" },
    { icon: TrendingUp, text: "What should I focus on next?", color: "text-primary" },
    { icon: Sparkles, text: "Generate project ideas", color: "text-success" },
  ];

  const conversation = [
    {
      role: "assistant",
      content: "Hello! I'm your AI productivity assistant. I can help you organize tasks, summarize notes, generate ideas, and provide insights about your workflow. What would you like to work on today?"
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
          <Link to="/notes" className="block">
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Notes
            </Button>
          </Link>
          <Button variant="default" className="w-full justify-start">
            <Brain className="mr-2 h-4 w-4" />
            AI Assistant
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8 h-screen flex flex-col">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">AI Assistant</h2>
          <p className="text-muted-foreground mt-1">Your intelligent productivity companion</p>
        </div>

        {/* Chat Area */}
        <Card className="flex-1 flex flex-col overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {conversation.map((msg, idx) => (
              <div 
                key={idx}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`p-3 rounded-lg ${
                  msg.role === 'assistant' 
                    ? 'bg-gradient-to-br from-accent/10 to-primary/10' 
                    : 'bg-primary'
                }`}>
                  {msg.role === 'assistant' ? (
                    <Sparkles className="h-5 w-5 text-accent" />
                  ) : (
                    <span className="text-primary-foreground font-semibold">You</span>
                  )}
                </div>
                <div className={`flex-1 max-w-2xl ${msg.role === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block p-4 rounded-lg ${
                    msg.role === 'assistant' 
                      ? 'bg-muted' 
                      : 'bg-primary text-primary-foreground'
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Suggestions */}
            {conversation.length === 1 && (
              <div className="pt-6">
                <p className="text-sm text-muted-foreground mb-4">Try asking me about:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {suggestions.map((suggestion, idx) => {
                    const Icon = suggestion.icon;
                    return (
                      <button
                        key={idx}
                        className="p-4 rounded-lg border border-border hover:border-primary transition-colors text-left group"
                        onClick={() => setMessage(suggestion.text)}
                      >
                        <Icon className={`h-5 w-5 mb-2 ${suggestion.color}`} />
                        <p className="text-sm">{suggestion.text}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Input 
                placeholder="Ask me anything about your productivity..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && message && console.log('Send:', message)}
                className="flex-1"
              />
              <Button 
                size="icon"
                disabled={!message}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              AI Assistant can help with tasks, notes, and productivity insights
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default AIChat;
