import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import businessCharacter from '../assets/business_character_3d.png';

const AISupporterVoice = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);

        // Navigate back to conversation page with audio data
        navigate('/ai-supporter/conversation', {
          state: {
            audioMessage: {
              url: audioUrl,
              timestamp: Date.now()
            }
          }
        });

        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Please allow microphone access to use voice recording.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const cancelRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      // Clear the audio chunks without saving
      audioChunksRef.current = [];

      // Stop all media tracks
      if (mediaRecorderRef.current.stream) {
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      }

      // Navigate back without audio
      navigate('/ai-supporter/conversation');
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[100px] py-8 md:py-12 lg:py-16 pt-24 md:pt-32 lg:pt-[180px]">
        {/* Voice Interface */}
        <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px]">
          {/* Character Illustration with background */}
          <div className="relative mb-8 md:mb-12 lg:mb-16">
            {/* Light blue background shape */}
            <div className="absolute inset-0 -z-10">
              <div className="w-[250px] h-[180px] md:w-[350px] md:h-[240px] lg:w-[450px] lg:h-[300px] bg-gradient-to-br from-blue-50 via-blue-100 to-transparent rounded-full opacity-60 blur-3xl"></div>
            </div>

            {/* Character */}
            <div className={`w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center transition-transform duration-300 ${isRecording ? 'scale-110' : 'scale-100'}`}>
              <img
                src={businessCharacter}
                alt="AI Assistant"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
            {/* Record/Stop Button */}
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`w-16 h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px] rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl
                ${isRecording
                  ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                  : 'bg-[#233e79] hover:bg-[#1a2d5a]'
                }`}
            >
              <div className={`w-5 h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] rounded-full transition-all
                ${isRecording ? 'bg-white' : 'bg-white'}`}
              ></div>
            </button>

            {/* Cancel Button */}
            <button
              onClick={cancelRecording}
              disabled={!isRecording}
              className={`w-16 h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px] rounded-full flex items-center justify-center transition-all shadow-lg
                ${isRecording
                  ? 'bg-white border-2 border-red-500 hover:bg-red-50'
                  : 'bg-gray-200 opacity-50 cursor-not-allowed'
                }`}
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7 lg:w-[32px] lg:h-[32px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isRecording ? '#ef4444' : '#9ca3af'}
                strokeWidth="3"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Recording Status Text */}
          {isRecording && (
            <p className="mt-4 md:mt-6 text-[#233e79] font-salsa text-base md:text-lg animate-pulse text-center px-4">
              Recording... Tap the blue button to stop
            </p>
          )}
          {!isRecording && (
            <p className="mt-4 md:mt-6 text-gray-500 font-salsa text-base md:text-lg text-center px-4">
              Tap the blue button to start recording
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AISupporterVoice;
