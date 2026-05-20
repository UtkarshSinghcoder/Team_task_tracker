import { FolderOpen, CheckSquare, Users, CheckCircle, TrendingUp, Clock, AlertTriangle } from 'lucide-react';

const stats = [
  { label: 'Total Projects', value: '12', icon: FolderOpen, bgColor: 'bg-blue-500/10', textColor: 'text-blue-400' },
  { label: 'Active Tasks', value: '48', icon: CheckSquare, bgColor: 'bg-amber-500/10', textColor: 'text-amber-400' },
  { label: 'Team Members', value: '8', icon: Users, bgColor: 'bg-emerald-500/10', textColor: 'text-emerald-400' },
  { label: 'Completed', value: '156', icon: CheckCircle, bgColor: 'bg-purple-500/10', textColor: 'text-purple-400' },
];

const recentTasks = [
  { title: 'Design system update', project: 'Website Redesign', status: 'In Progress', priority: 'High' },
  { title: 'API integration', project: 'Mobile App', status: 'Review', priority: 'Medium' },
  { title: 'User testing', project: 'Dashboard', status: 'Pending', priority: 'Low' },
  { title: 'Database migration', project: 'Backend', status: 'In Progress', priority: 'High' },
  { title: 'Documentation', project: 'API Docs', status: 'Completed', priority: 'Medium' },
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

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-400 mt-1">Overview of your projects and tasks</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="bg-[#161922] border border-white/5 rounded-xl p-5">
            <div className="flex items-start justify-between">
              <div className={`p-2.5 rounded-lg ${s.bgColor}`}>
                <s.icon className={`w-5 h-5 ${s.textColor}`} />
              </div>
              <div className="flex items-center gap-1 text-emerald-400 text-sm">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+12%</span>
              </div>
            </div>
            <p className="text-2xl font-bold mt-4">{s.value}</p>
            <p className="text-sm text-gray-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#161922] border border-white/5 rounded-xl">
        <div className="p-5 border-b border-white/5">
          <h2 className="text-lg font-semibold">Recent Tasks</h2>
          <p className="text-sm text-gray-400 mt-1">Latest updates from your projects</p>
        </div>
        <div className="divide-y divide-white/5">
          {recentTasks.map((task, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{task.title}</p>
                <p className="text-sm text-gray-400 mt-0.5">{task.project}</p>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[task.status]}`}>
                  {task.status}
                </span>
                <span className={`text-xs ${priorityStyles[task.priority]}`}>{task.priority}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#161922] border border-white/5 rounded-xl p-5">
          <Clock className="w-5 h-5 text-indigo-400 mb-3" />
          <h3 className="font-medium">Upcoming Deadlines</h3>
          <p className="text-sm text-gray-400 mt-1">3 tasks due this week</p>
        </div>
        <div className="bg-[#161922] border border-white/5 rounded-xl p-5">
          <AlertTriangle className="w-5 h-5 text-amber-400 mb-3" />
          <h3 className="font-medium">Needs Attention</h3>
          <p className="text-sm text-gray-400 mt-1">2 tasks require review</p>
        </div>
        <div className="bg-[#161922] border border-white/5 rounded-xl p-5">
          <CheckCircle className="w-5 h-5 text-emerald-400 mb-3" />
          <h3 className="font-medium">Completed This Week</h3>
          <p className="text-sm text-gray-400 mt-1">8 tasks completed</p>
        </div>
      </div>
    </div>
  );
}
