
import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode }) => {
  const [authMode, setAuthMode] = useState(mode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Auth form submitted:', { authMode, formData });
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="max-w-md w-full bg-gradient-to-br from-amber-50/95 to-purple-50/95 backdrop-blur-lg border-2 border-amber-200/50 shadow-2xl animate-scale-in">
        <CardContent className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">
              {authMode === 'login' ? 'Welcome Back' : 'Join Echo Verse'}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full hover:bg-amber-100/50"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {authMode === 'signup' && (
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-amber-600/70" />
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="pl-10 border-amber-200 focus:border-purple-400 focus:ring-purple-200/50 bg-white/70"
                  required
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-amber-600/70" />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="pl-10 border-amber-200 focus:border-purple-400 focus:ring-purple-200/50 bg-white/70"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-amber-600/70" />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="pl-10 pr-10 border-amber-200 focus:border-purple-400 focus:ring-purple-200/50 bg-white/70"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-amber-600/70 hover:text-amber-700"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {authMode === 'signup' && (
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-amber-600/70" />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="pl-10 border-amber-200 focus:border-purple-400 focus:ring-purple-200/50 bg-white/70"
                  required
                />
              </div>
            )}

            <Button
              type="submit"
              className="w-full py-3 text-lg rounded-full bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/50"
            >
              {authMode === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          {/* Switch Mode */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {authMode === 'login' ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                className="ml-2 text-purple-600 hover:text-purple-700 font-semibold hover:underline"
              >
                {authMode === 'login' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-amber-200"></div>
            <span className="px-4 text-sm text-gray-500">or continue with</span>
            <div className="flex-1 border-t border-amber-200"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full py-3 border-amber-200 hover:bg-amber-50 hover:border-amber-300"
            >
              Continue with Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthModal;
