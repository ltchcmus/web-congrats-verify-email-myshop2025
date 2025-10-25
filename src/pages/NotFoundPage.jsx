import { useEffect, useState } from 'react'

const NotFoundPage = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main content card */}
      <div 
        className={`relative z-10 bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center transform transition-all duration-700 ${
          showContent ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'
        }`}
      >
        {/* 404 illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text animate-[fadeInScale_0.5s_ease-out_0.3s_both]">
            404
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-[slideInUp_0.6s_ease-out_0.4s_both]">
          Không Tìm Thấy Trang
        </h1>
        
        <p className="text-gray-600 text-lg mb-8 animate-[slideInUp_0.6s_ease-out_0.5s_both]">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển
        </p>

        {/* Action buttons */}
        <div className="space-y-3 animate-[slideInUp_0.6s_ease-out_0.6s_both]">
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Về Trang Chủ
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
