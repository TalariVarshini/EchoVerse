
import React, { useState, useEffect } from 'react';
import { Mic, Key, FileText, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthModal from '@/components/AuthModal';
import RagaResultModal from '@/components/RagaResultModal';
import { getRandomRaga, searchRagaBySong, type Raga } from '@/data/ragas';

const Index = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [songName, setSongName] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [detectedRaga, setDetectedRaga] = useState<Raga | null>(null);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'login'
  });

  const floatingSwaras = ['सा', 'रे', 'ग', 'म', 'प', 'ध', 'नि', '♪', '♫', '𝄞', 'ස', 'රි', 'ග', 'ম', 'প', 'ধ', 'নি'];
  const instruments = ['🎻', '🪘', '🥁', '🎺', '🎼', '🎵', '🎶'];
  
  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate voice recording
      setTimeout(() => {
        setIsRecording(false);
        const raga = getRandomRaga();
        setDetectedRaga(raga);
        setShowResult(true);
      }, 3000);
    }
  };

  const handleAnalyze = () => {
    if (songName.trim()) {
      const raga = searchRagaBySong(songName);
      setDetectedRaga(raga);
      setShowResult(true);
    }
  };

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-amber-900 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Swaras */}
        {floatingSwaras.map((swara, index) => (
          <div
            key={index}
            className={`absolute text-2xl font-bold text-amber-400/30 animate-float-${(index % 3) + 1}`}
            style={{
              left: `${(index * 7 + 5) % 95}%`,
              top: `${(index * 11 + 10) % 85}%`,
              animationDelay: `${index * 0.3}s`,
            }}
          >
            {swara}
          </div>
        ))}
        
        {/* Floating Instruments */}
        {instruments.map((instrument, index) => (
          <div
            key={index}
            className={`absolute text-3xl opacity-20 animate-float-${(index % 3) + 1}`}
            style={{
              left: `${(index * 15 + 10) % 90}%`,
              top: `${(index * 20 + 15) % 80}%`,
              animationDelay: `${index * 0.7}s`,
            }}
          >
            {instrument}
          </div>
        ))}
        
        {/* Glowing Musical Notes */}
        <div className="absolute top-20 left-10 text-amber-400/40 text-4xl animate-pulse">♪</div>
        <div className="absolute top-40 right-20 text-purple-400/50 text-5xl animate-bounce">♫</div>
        <div className="absolute bottom-32 left-1/4 text-orange-400/40 text-3xl animate-pulse">𝄞</div>
        <div className="absolute bottom-20 right-1/3 text-amber-500/50 text-4xl animate-bounce">♬</div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30">
            <Music className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
            Echo Verse
          </h1>
        </div>
        
        <div className="flex space-x-3">
          <Button 
            onClick={() => openAuthModal('login')}
            variant="outline" 
            className="rounded-full px-6 py-2 border-amber-400/50 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/30 backdrop-blur-sm bg-white/5"
          >
            <Key className="w-4 h-4 mr-2" />
            Login
          </Button>
          <Button 
            onClick={() => openAuthModal('signup')}
            className="rounded-full px-6 py-2 bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/50 hover:scale-105"
          >
            <FileText className="w-4 h-4 mr-2" />
            Sign Up
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Discover the Soul of
            <br />
            <span className="text-6xl md:text-8xl">Carnatic Music</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unlock the mysteries of classical Indian ragas with AI-powered voice analysis. 
            Sing, hum, or whistle - let Echo Verse identify the raga and guide your musical journey.
          </p>

          {/* Voice Recording Section */}
          <div className="flex flex-col items-center space-y-6 mb-12">
            <div className="relative">
              <Button
                onClick={handleVoiceRecord}
                className={`w-24 h-24 rounded-full transition-all duration-300 ${
                  isRecording 
                    ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                    : 'bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-600 hover:to-purple-700 hover:scale-110'
                } shadow-xl hover:shadow-2xl shadow-purple-500/30`}
              >
                <Mic className="w-8 h-8 text-white" />
              </Button>
              
              {/* Enhanced Ripple Effect */}
              {isRecording && (
                <>
                  <div className="absolute inset-0 rounded-full border-4 border-red-400/50 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-red-300/30 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </>
              )}
            </div>
            
            <p className="text-lg text-gray-300">
              {isRecording ? 'Listening to your voice...' : 'Click to start voice recording'}
            </p>
          </div>

          {/* Song Input Section */}
          <div className="max-w-md mx-auto space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Or enter a song name..."
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
                className="w-full px-6 py-4 text-lg rounded-full border-2 border-amber-400/30 focus:border-purple-400 focus:ring-4 focus:ring-purple-400/30 transition-all duration-300 bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-400"
              />
            </div>
            
            <Button
              onClick={handleAnalyze}
              disabled={!songName.trim()}
              className="w-full py-4 text-lg rounded-full bg-gradient-to-r from-purple-500 to-amber-500 hover:from-purple-600 hover:to-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/50 shadow-xl"
            >
              Analyze Raga
            </Button>
          </div>
        </div>
      </main>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        mode={authModal.mode}
      />

      {/* Enhanced Result Modal */}
      <RagaResultModal
        isOpen={showResult}
        onClose={() => setShowResult(false)}
        raga={detectedRaga}
      />
    </div>
  );
};

export default Index;
