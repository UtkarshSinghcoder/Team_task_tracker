import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  User,
  Bell,
  Shield,
  Palette,
  Save,
  KeyRound,
  Smartphone,
} from 'lucide-react';

const settingsNav = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'appearance', label: 'Appearance', icon: Palette },
];

export default function Settings() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [emailNotif, setEmailNotif] = useState(true);
  const [taskReminders, setTaskReminders] = useState(true);
  const [projectUpdates, setProjectUpdates] = useState(true);
  const [teamActivity, setTeamActivity] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);
  const [sessionAlerts, setSessionAlerts] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [compactView, setCompactView] = useState(false);

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your account and application preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-64 shrink-0">
          <div className="bg-[#161922] border border-white/5 rounded-xl overflow-hidden">
            <nav className="p-2 space-y-1">
              {settingsNav.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-indigo-500/10 text-indigo-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex-1">
          {activeTab === 'profile' && (
            <div className="bg-[#161922] border border-white/5 rounded-xl p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl font-medium">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Profile Information</h2>
                  <p className="text-sm text-gray-400">Update your personal details</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="bg-[#0f1117] border-white/5"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="bg-[#0f1117] border-white/5"
                  />
                </div>
                <Button className="bg-indigo-500 hover:bg-indigo-600">
                  <Save className="w-4 h-4 mr-2" /> Save Changes
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="bg-[#161922] border border-white/5 rounded-xl p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold">Notification Preferences</h2>
                <p className="text-sm text-gray-400 mt-1">Choose how you want to be notified</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Email Notifications', description: 'Receive updates via email', checked: emailNotif, onChange: setEmailNotif },
                  { label: 'Task Reminders', description: 'Get reminded about upcoming deadlines', checked: taskReminders, onChange: setTaskReminders },
                  { label: 'Project Updates', description: 'Notifications about project changes', checked: projectUpdates, onChange: setProjectUpdates },
                  { label: 'Team Activity', description: 'Updates about team member actions', checked: teamActivity, onChange: setTeamActivity },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                    <Switch checked={item.checked} onCheckedChange={item.onChange} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-[#161922] border border-white/5 rounded-xl p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold">Security Settings</h2>
                <p className="text-sm text-gray-400 mt-1">Manage your account security</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <KeyRound className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-400">Add an extra layer of security</p>
                    </div>
                  </div>
                  <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Session Alerts</p>
                      <p className="text-sm text-gray-400">Get notified of new sign-ins</p>
                    </div>
                  </div>
                  <Switch checked={sessionAlerts} onCheckedChange={setSessionAlerts} />
                </div>
                <div className="pt-2">
                  <Button variant="outline" className="border-white/5 bg-[#0f1117]">
                    Change Password
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="bg-[#161922] border border-white/5 rounded-xl p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold">Appearance</h2>
                <p className="text-sm text-gray-400 mt-1">Customize how TaskFlow looks</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-gray-400">Use dark theme throughout the app</p>
                  </div>
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div>
                    <p className="font-medium">Compact View</p>
                    <p className="text-sm text-gray-400">Show more content with less spacing</p>
                  </div>
                  <Switch checked={compactView} onCheckedChange={setCompactView} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
