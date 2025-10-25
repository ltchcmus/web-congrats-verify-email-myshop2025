import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NotFoundPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-gray-200 rounded-full opacity-50 animate-pulse" />
      <div className="absolute top-40 right-32 w-12 h-12 bg-gray-300 rounded-full opacity-30 animate-bounce" />
      <div className="absolute bottom-32 left-32 w-20 h-20 bg-gray-100 rounded-full opacity-40 animate-ping" />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div 
          className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-lg w-full text-center transform transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10'
          }`}
        >
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-300 animate-pulse">
              404
            </h1>
          </div>

          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Trang Không Tìm Thấy
          </h2>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>

          {/* Navigation */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Về Trang Chủ
            </Link>
            
            <Link 
              to="/error" 
              className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all duration-300"
            >
              Xem Trang Lỗi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;