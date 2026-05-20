import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  Users,
  Plus,
  Mail,
  Shield,
  User,
  MoreHorizontal,
} from 'lucide-react';

const teamMembers = [
  { id: 1, name: 'Alex Johnson', email: 'alex@example.com', role: 'Admin', status: 'Active', tasks: 12, avatar: 'AJ', color: 'from-blue-500 to-indigo-600' },
  { id: 2, name: 'Sam Williams', email: 'sam@example.com', role: 'Member', status: 'Active', tasks: 8, avatar: 'SW', color: 'from-purple-500 to-pink-600' },
  { id: 3, name: 'Jordan Lee', email: 'jordan@example.com', role: 'Member', status: 'Active', tasks: 15, avatar: 'JL', color: 'from-emerald-500 to-teal-600' },
  { id: 4, name: 'Casey Brown', email: 'casey@example.com', role: 'Viewer', status: 'Away', tasks: 5, avatar: 'CB', color: 'from-amber-500 to-orange-600' },
  { id: 5, name: 'Morgan Chen', email: 'morgan@example.com', role: 'Member', status: 'Active', tasks: 10, avatar: 'MC', color: 'from-red-500 to-rose-600' },
  { id: 6, name: 'Riley Park', email: 'riley@example.com', role: 'Viewer', status: 'Offline', tasks: 3, avatar: 'RP', color: 'from-gray-500 to-slate-600' },
];

const statusDot: Record<string, string> = {
  Active: 'bg-emerald-500',
  Away: 'bg-amber-500',
  Offline: 'bg-gray-500',
};

const roleIcon: Record<string, typeof Shield | typeof User> = {
  Admin: Shield,
  Member: User,
  Viewer: User,
};

export default function Team() {
  const activeCount = teamMembers.filter(m => m.status === 'Active').length;
  const adminCount = teamMembers.filter(m => m.role === 'Admin').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Team</h1>
          <p className="text-gray-400 mt-1">Manage your team members and their roles</p>
        </div>
        <Button className="bg-indigo-500 hover:bg-indigo-600">
          <Plus className="w-4 h-4 mr-2" /> Invite Member
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#161922] border border-white/5 rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-500/10">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{teamMembers.length}</p>
              <p className="text-sm text-gray-400">Total Members</p>
            </div>
          </div>
        </div>
        <div className="bg-[#161922] border border-white/5 rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10">
              <div className="w-5 h-5 rounded-full bg-emerald-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{activeCount}</p>
              <p className="text-sm text-gray-400">Active Now</p>
            </div>
          </div>
        </div>
        <div className="bg-[#161922] border border-white/5 rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-purple-500/10">
              <Shield className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{adminCount}</p>
              <p className="text-sm text-gray-400">Admins</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#161922] border border-white/5 rounded-xl overflow-hidden">
        <div className="p-5 border-b border-white/5">
          <h2 className="text-lg font-semibold">Team Members</h2>
        </div>
        <div className="divide-y divide-white/5">
          {teamMembers.map(m => {
            const RoleIcon = roleIcon[m.role] || User;
            return (
              <div key={m.id} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-sm font-medium`}>
                      {m.avatar}
                    </div>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#161922] ${statusDot[m.status]}`} />
                  </div>
                  <div>
                    <p className="font-medium">{m.name}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-0.5">
                      <Mail className="w-3.5 h-3.5" />
                      {m.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 text-sm">
                    <RoleIcon className="w-3.5 h-3.5 text-gray-400" />
                    <span>{m.role}</span>
                  </div>
                  <span className="text-sm text-gray-400">{m.tasks} tasks</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-gray-400 hover:text-white">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Role</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-400">Remove</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
