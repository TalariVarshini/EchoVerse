
import React from 'react';
import { X, Music, Clock, Heart, Star, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Raga } from '@/data/ragas';

interface RagaResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  raga: Raga | null;
}

const RagaResultModal: React.FC<RagaResultModalProps> = ({ isOpen, onClose, raga }) => {
  if (!isOpen || !raga) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full bg-gradient-to-br from-amber-50/95 to-purple-50/95 backdrop-blur-lg border-2 border-amber-200/50 shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
        <CardContent className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-purple-600 rounded-full flex items-center justify-center animate-glow-pulse">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Raga Detected!</h2>
                <p className="text-amber-600 font-medium">Classical Analysis Complete</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full hover:bg-amber-100/50"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Raga Name */}
          <div className="text-center mb-8">
            <div className="inline-block p-6 bg-gradient-to-r from-amber-100 to-purple-100 rounded-2xl border-2 border-amber-200/50">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {raga.name}
              </h3>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>{raga.mood}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>{raga.timeOfDay}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <Star className="w-5 h-5 text-amber-500 mr-2" />
              About This Raga
            </h4>
            <p className="text-gray-700 leading-relaxed bg-white/50 p-4 rounded-lg border border-amber-200/50">
              {raga.description}
            </p>
          </div>

          {/* Musical Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/50 p-4 rounded-lg border border-amber-200/50">
              <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                <Volume2 className="w-4 h-4 text-purple-500 mr-2" />
                Musical Notes
              </h5>
              <p className="text-gray-700 font-mono text-sm bg-gray-100 p-2 rounded">
                {raga.notes}
              </p>
            </div>
            
            <div className="bg-white/50 p-4 rounded-lg border border-amber-200/50">
              <h5 className="font-semibold text-gray-800 mb-2">Characteristics</h5>
              <div className="flex flex-wrap gap-2">
                {raga.characteristics.map((char, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gradient-to-r from-amber-100 to-purple-100 text-xs font-medium text-gray-700 rounded-full border border-amber-200"
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Famous Songs */}
          <div className="mb-6">
            <h5 className="font-semibold text-gray-800 mb-3">Famous Compositions</h5>
            <div className="grid gap-2">
              {raga.famousSongs.map((song, index) => (
                <div
                  key={index}
                  className="p-3 bg-gradient-to-r from-amber-50 to-purple-50 rounded-lg border border-amber-200/30 hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-700 font-medium">♪ {song}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={onClose}
              className="flex-1 py-3 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/50"
            >
              Explore More Ragas
            </Button>
            <Button
              variant="outline"
              className="flex-1 py-3 rounded-full border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400"
            >
              Learn This Raga
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RagaResultModal;
