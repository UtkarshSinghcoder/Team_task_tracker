import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f1117] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-gray-400 mb-6">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Button
          onClick={() => navigate('/')}
          className="bg-indigo-500 hover:bg-indigo-600"
        >
          <Home className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}
