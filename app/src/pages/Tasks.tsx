import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Plus,
  Search,
  SlidersHorizontal,
  CheckCircle2,
  Circle,
  CalendarDays,
  MoreHorizontal,
  Flag,
} from 'lucide-react';

const allTasks = [
  { id: 1, title: 'Design system components', project: 'Website Redesign', assignee: 'Alex', status: 'In Progress', priority: 'High', dueDate: '2024-03-10', completed: false },
  { id: 2, title: 'API endpoint documentation', project: 'API Development', assignee: 'Sam', status: 'Review', priority: 'Medium', dueDate: '2024-03-12', completed: false },
  { id: 3, title: 'User authentication flow', project: 'Mobile App', assignee: 'Jordan', status: 'In Progress', priority: 'High', dueDate: '2024-03-08', completed: false },
  { id: 4, title: 'Database schema design', project: 'Database Migration', assignee: 'Casey', status: 'Completed', priority: 'High', dueDate: '2024-02-28', completed: true },
  { id: 5, title: 'Unit tests for auth module', project: 'Mobile App', assignee: 'Alex', status: 'Pending', priority: 'Low', dueDate: '2024-03-20', completed: false },
  { id: 6, title: 'Performance optimization', project: 'Dashboard', assignee: 'Sam', status: 'In Progress', priority: 'Medium', dueDate: '2024-03-15', completed: false },
  { id: 7, title: 'Deploy staging environment', project: 'Website Redesign', assignee: 'Jordan', status: 'Completed', priority: 'Medium', dueDate: '2024-02-25', completed: true },
  { id: 8, title: 'Client feedback integration', project: 'API Development', assignee: 'Casey', status: 'Pending', priority: 'High', dueDate: '2024-03-18', completed: false },
];

const statusStyles: Record<string, string> = {
  'In Progress': 'text-blue-400 bg-blue-400/10',
  Review: 'text-amber-400 bg-amber-400/10',
  Pending: 'text-gray-400 bg-gray-400/10',
  Completed: 'text-emerald-400 bg-emerald-400/10',
};

const priorityStyles: Record<string, string> = {
  High: 'text-red-400',
  Medium: 'text-amber-400',
  Low: 'text-gray-400',
};

export default function Tasks() {
  const [search, setSearch] = useState('');
  const tasks = allTasks.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Tasks</h1>
          <p className="text-gray-400 mt-1">Manage and organize your tasks</p>
        </div>
        <Button className="bg-indigo-500 hover:bg-indigo-600">
          <Plus className="w-4 h-4 mr-2" /> New Task
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search tasks..."
            className="pl-10 bg-[#161922] border-white/5"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <Button variant="outline" className="border-white/5 bg-[#161922]">
          <SlidersHorizontal className="w-4 h-4 mr-2" /> Filter
        </Button>
      </div>

      <div className="bg-[#161922] border border-white/5 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5 text-left text-sm text-gray-400">
                <th className="px-4 py-3 font-medium">Task</th>
                <th className="px-4 py-3 font-medium">Project</th>
                <th className="px-4 py-3 font-medium">Assignee</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Priority</th>
                <th className="px-4 py-3 font-medium">Due Date</th>
                <th className="px-4 py-3 font-medium w-10" />
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {tasks.map(t => (
                <tr key={t.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {t.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-500" />
                      )}
                      <span className={t.completed ? 'line-through text-gray-500' : 'font-medium'}>
                        {t.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{t.project}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-medium">
                        {t.assignee.charAt(0)}
                      </div>
                      <span className="text-sm">{t.assignee}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[t.status]}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <Flag className={`w-3.5 h-3.5 ${priorityStyles[t.priority]}`} />
                      <span className="text-sm">{t.priority}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5 text-sm text-gray-400">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {t.dueDate}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="text-gray-400 hover:text-white">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
