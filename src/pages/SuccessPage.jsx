import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Tạo hiệu ứng xuất hiện
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => setShowContent(true), 500);
    
    // Tạo particles cho hiệu ứng
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-40 animate-bounce" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-100 rounded-full opacity-50 animate-ping" />
      <div className="absolute bottom-40 right-10 w-12 h-12 bg-blue-400 rounded-full opacity-30 animate-pulse" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div 
          className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center transform transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10'
          }`}
        >
          {/* Success Icon */}
          <div className={`mb-8 transform transition-all duration-1000 delay-300 ${
            showContent ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-6 transform transition-all duration-1000 delay-500 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Xác Thực Thành Công!
            </span>
          </h1>

          {/* Message */}
          <div className={`space-y-4 mb-8 transform transition-all duration-1000 delay-700 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <p className="text-gray-600 text-lg leading-relaxed">
              🎉 Chúc mừng! Tài khoản của bạn đã được xác thực thành công.
            </p>
            <p className="text-gray-600 text-base">
              Vui lòng đăng nhập trên ứng dụng để tiếp tục sử dụng dịch vụ.
            </p>
          </div>

          {/* Action Buttons */}
          <div className={`space-y-4 transform transition-all duration-1000 delay-900 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Mở Ứng Dụng
            </button>
            
            <Link 
              to="/error" 
              className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Xem trang lỗi (Demo)
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 animate-pulse" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full opacity-50 animate-bounce" />
        </div>
      </div>

      {/* Floating Animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-16 animate-pulse"
        >
          <path 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,128C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="rgba(59, 130, 246, 0.1)"
          />
        </svg>
      </div>
    </div>
  );
};

export default SuccessPage;