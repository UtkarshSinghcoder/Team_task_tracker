import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FolderOpen, Users, CalendarDays, Plus, MoreHorizontal } from 'lucide-react';

const projects = [
  { id: 1, name: 'Website Redesign', description: 'Complete overhaul of the company website with modern UI', status: 'Active', progress: 75, tasks: 24, members: 5, dueDate: '2024-03-15', color: 'from-blue-500 to-indigo-600' },
  { id: 2, name: 'Mobile App', description: 'iOS and Android app development for customer portal', status: 'Active', progress: 45, tasks: 36, members: 8, dueDate: '2024-04-30', color: 'from-purple-500 to-pink-600' },
  { id: 3, name: 'Dashboard', description: 'Internal analytics dashboard for the operations team', status: 'Planning', progress: 15, tasks: 18, members: 3, dueDate: '2024-05-20', color: 'from-amber-500 to-orange-600' },
  { id: 4, name: 'API Development', description: 'RESTful API for third-party integrations', status: 'Active', progress: 60, tasks: 42, members: 6, dueDate: '2024-03-30', color: 'from-emerald-500 to-teal-600' },
  { id: 5, name: 'Documentation', description: 'Technical documentation and user guides', status: 'On Hold', progress: 30, tasks: 12, members: 2, dueDate: '2024-06-01', color: 'from-gray-500 to-slate-600' },
  { id: 6, name: 'Database Migration', description: 'Migrate legacy database to new cloud infrastructure', status: 'Active', progress: 85, tasks: 15, members: 4, dueDate: '2024-02-28', color: 'from-red-500 to-rose-600' },
];

const statusStyles: Record<string, string> = {
  Active: 'text-emerald-400 bg-emerald-400/10',
  Planning: 'text-blue-400 bg-blue-400/10',
  'On Hold': 'text-amber-400 bg-amber-400/10',
  Completed: 'text-gray-400 bg-gray-400/10',
};

export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-gray-400 mt-1">Manage and track all your projects</p>
        </div>
        <Button className="bg-indigo-500 hover:bg-indigo-600">
          <Plus className="w-4 h-4 mr-2" /> New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map(p => (
          <div key={p.id} className="bg-[#161922] border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors">
            <div className={`h-2 bg-gradient-to-r ${p.color}`} />
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{p.name}</h3>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-2">{p.description}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-gray-400 hover:text-white ml-2">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-400">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">Progress</span>
                  <span className="font-medium">{p.progress}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${p.color} rounded-full transition-all`} style={{ width: `${p.progress}%` }} />
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
                <div className="flex items-center gap-1.5">
                  <FolderOpen className="w-4 h-4" />
                  <span>{p.tasks} tasks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>{p.members}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4" />
                  <span>{p.dueDate}</span>
                </div>
              </div>

              <div className="mt-4">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[p.status]}`}>
                  {p.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
