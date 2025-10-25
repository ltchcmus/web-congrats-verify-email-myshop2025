import { useEffect, useState } from 'react'
import { CheckCircle, ArrowRight, Gift, ShoppingBag } from 'lucide-react'

const SuccessPage = () => {
  const [render, setRender] = useState(false)
  useEffect(() => {
    setRender(true)
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 text-gray-800 font-sans relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-gradient-to-br from-emerald-400/40 to-cyan-400/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-cyan-300/30 to-blue-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-15%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-teal-300/25 to-emerald-400/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <header className={`relative z-10 p-8 transition-all duration-700 ${render ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30">
            <span className="text-2xl font-black text-white">M</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">MyShop2025</h1>
            <p className="text-sm text-gray-600">Email Verification Success</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-180px)] p-6">
        <div 
          className={`bg-white/80 backdrop-blur-2xl border-2 border-white/60 rounded-[2.5rem] shadow-[0_20px_70px_rgba(16,185,129,0.2)] w-full max-w-5xl transition-all duration-1000 delay-200 ${render ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          <div className="p-12 md:p-20 text-center">
            {/* Icon with Glow */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-full p-8 shadow-2xl shadow-emerald-500/50">
                  <CheckCircle 
                    className={`w-32 h-32 text-white transition-transform duration-1000 delay-500 ${render ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`} 
                    strokeWidth={2.5} 
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full -z-10 animate-ping-slow"></div>
              </div>
            </div>

            {/* Title with Gradient */}
            <h1 className={`text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6 transition-all duration-700 delay-500 leading-tight ${render ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Xác Thực Thành Công! 🎉
            </h1>

            {/* Subtitle */}
            <p className={`text-2xl md:text-3xl text-gray-700 font-medium mb-4 text-center transition-all duration-700 delay-700 ${render ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Chào mừng bạn đến với MyShop2025
            </p>
            
            <div className="flex justify-center w-full">
              <p className={`text-lg md:text-xl text-gray-600 mb-12 max-w-3xl text-center leading-relaxed transition-all duration-700 delay-800 ${render ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Tài khoản của bạn đã được kích hoạt và sẵn sàng để khám phá hàng ngàn sản phẩm tuyệt vời
              </p>
            </div>

            {/* Action Button - Bigger and More Colorful */}
            <button 
              className={`bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white text-xl font-bold py-6 px-16 rounded-2xl shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-105 transform transition-all duration-300 delay-1000 group ${render ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => window.location.href = '/login'}
            >
              <div className="flex items-center justify-center space-x-3">
                <span>Bắt Đầu Mua Sắm Ngay</span>
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </div>
            </button>
          </div>

          {/* Feature Cards Section */}
          <div className="bg-gradient-to-br from-emerald-50/80 to-cyan-50/80 border-t-2 border-white/60 rounded-b-[2.5rem] px-12 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`flex flex-col items-center text-center space-y-3 p-6 bg-white/60 rounded-2xl shadow-lg transition-all duration-700 delay-[1100ms] hover:scale-105 ${render ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Gift className="w-9 h-9 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-xl text-gray-800">Ưu Đãi Chào Mừng</h3>
                <p className="text-gray-600">Giảm 20% cho đơn hàng đầu tiên của bạn</p>
              </div>
              
              <div className={`flex flex-col items-center text-center space-y-3 p-6 bg-white/60 rounded-2xl shadow-lg transition-all duration-700 delay-[1200ms] hover:scale-105 ${render ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <ShoppingBag className="w-9 h-9 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-xl text-gray-800">Hàng Ngàn Sản Phẩm</h3>
                <p className="text-gray-600">Khám phá bộ sưu tập đa dạng của chúng tôi</p>
              </div>
              
              <div className={`flex flex-col items-center text-center space-y-3 p-6 bg-white/60 rounded-2xl shadow-lg transition-all duration-700 delay-[1300ms] hover:scale-105 ${render ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-9 h-9 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-xl text-gray-800">Miễn Phí Vận Chuyển</h3>
                <p className="text-gray-600">Cho tất cả đơn hàng trên 500.000đ</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`relative z-10 text-center p-6 text-gray-600 text-sm transition-opacity duration-700 delay-[1400ms] ${render ? 'opacity-100' : 'opacity-0'}`}>
        <p>&copy; 2025 MyShop2025. All rights reserved. Made with 💚 in Vietnam</p>
      </footer>
    </div>
  )
}

export default SuccessPage

