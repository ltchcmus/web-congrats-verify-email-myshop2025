import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    // Hiệu ứng xuất hiện
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => setShowContent(true), 500);
    
    // Hiệu ứng rung lắc
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Warning triangles */}
        <div className="absolute top-20 left-16 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-red-200 opacity-30 animate-bounce" />
        <div className="absolute top-60 right-20 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-orange-200 opacity-40 animate-pulse" />
        <div className="absolute bottom-32 left-32 w-0 h-0 border-l-10 border-r-10 border-b-14 border-l-transparent border-r-transparent border-b-red-300 opacity-20 animate-bounce" />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-32 right-32 w-16 h-16 bg-red-200 rounded-full opacity-20 animate-ping" />
      <div className="absolute bottom-48 right-16 w-12 h-12 bg-orange-200 rounded-full opacity-30 animate-pulse" />
      <div className="absolute top-2/3 left-16 w-20 h-20 bg-red-100 rounded-full opacity-25 animate-bounce" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div 
          className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center transform transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10'
          } ${shake ? 'animate-pulse' : ''}`}
        >
          {/* Error Icon */}
          <div className={`mb-8 transform transition-all duration-1000 delay-300 ${
            showContent ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
              <svg 
                className="w-10 h-10 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-6 transform transition-all duration-1000 delay-500 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Có Lỗi Xảy Ra!
            </span>
          </h1>

          {/* Message */}
          <div className={`space-y-4 mb-8 transform transition-all duration-1000 delay-700 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <p className="text-gray-600 text-lg leading-relaxed">
              ⚠️ Link xác thực không hợp lệ hoặc đã hết hạn.
            </p>
            <p className="text-gray-600 text-base">
              Vui lòng thực hiện lại quá trình xác thực email để tiếp tục.
            </p>
          </div>

          {/* Error Details */}
          <div className={`bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg transform transition-all duration-1000 delay-800 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-red-700 text-sm font-medium">
                Mã lỗi: VERIFICATION_EXPIRED
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`space-y-4 transform transition-all duration-1000 delay-900 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Gửi Lại Email Xác Thực
            </button>
            
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
              Liên Hệ Hỗ Trợ
            </button>

            <Link 
              to="/" 
              className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Về trang chủ
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-400 rounded-full opacity-60 animate-ping" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-400 rounded-full opacity-50 animate-bounce" />
        </div>
      </div>

      {/* Bottom Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-16"
        >
          <path 
            d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,112C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="rgba(239, 68, 68, 0.1)"
            className="animate-pulse"
          />
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;