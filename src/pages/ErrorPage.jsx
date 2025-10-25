import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { XCircle, AlertTriangle, RefreshCw, HelpCircle } from 'lucide-react'

const ErrorPage = () => {
  const [render, setRender] = useState(false)
  const [searchParams] = useSearchParams()
  
  const errorType = searchParams.get('type') || 'invalid'
  
  // Tailwind cannot see dynamic class names reliably; use explicit class strings per variant
  const variants = {
    invalid: {
      Icon: XCircle,
      title: 'Liên kết không hợp lệ',
      description:
        'Liên kết xác thực bạn sử dụng không đúng hoặc đã bị thay đổi. Vui lòng kiểm tra lại hoặc yêu cầu một liên kết mới.',
      reasons: ['URL bị sao chép sai', 'Liên kết đã được chỉnh sửa', 'Lỗi hệ thống tạm thời'],
      accentText: 'text-rose-500',
      accentBg: 'bg-rose-600',
      accentBgHover: 'hover:bg-rose-700',
      accentShadow: 'shadow-rose-500/30',
      blobFrom: 'bg-rose-200/50',
      blobTo: 'bg-rose-100/40'
    },
    expired: {
      Icon: AlertTriangle,
      title: 'Liên kết đã hết hạn',
      description:
        'Vì lý do bảo mật, liên kết xác thực chỉ có hiệu lực trong một khoảng thời gian nhất định và đã hết hạn.',
      reasons: ['Quá 24 giờ kể từ khi nhận email', 'Đã yêu cầu liên kết mới hơn', 'Liên kết đã được sử dụng'],
      accentText: 'text-amber-500',
      accentBg: 'bg-amber-600',
      accentBgHover: 'hover:bg-amber-700',
      accentShadow: 'shadow-amber-500/30',
      blobFrom: 'bg-amber-200/50',
      blobTo: 'bg-amber-100/40'
    },
    used: {
      Icon: XCircle,
      title: 'Liên kết đã được sử dụng',
      description:
        'Email của bạn đã được xác thực trước đó bằng liên kết này. Bạn có thể đăng nhập ngay bây giờ.',
      reasons: ['Email đã được xác thực thành công', 'Đăng nhập thay vì xác thực lại', 'Nhầm lẫn giữa các tài khoản'],
      accentText: 'text-emerald-600',
      accentBg: 'bg-emerald-600',
      accentBgHover: 'hover:bg-emerald-700',
      accentShadow: 'shadow-emerald-500/30',
      blobFrom: 'bg-emerald-200/50',
      blobTo: 'bg-emerald-100/40'
    },
    error: {
      Icon: AlertTriangle,
      title: 'Đã có lỗi xảy ra',
      description: 'Hệ thống của chúng tôi đã gặp phải một sự cố bất ngờ. Vui lòng thử lại sau ít phút.',
      reasons: ['Lỗi kết nối máy chủ', 'Bảo trì hệ thống', 'Lỗi không xác định'],
      accentText: 'text-orange-600',
      accentBg: 'bg-orange-600',
      accentBgHover: 'hover:bg-orange-700',
      accentShadow: 'shadow-orange-500/30',
      blobFrom: 'bg-orange-200/50',
      blobTo: 'bg-orange-100/40'
    }
  }

  const currentError = variants[errorType] || variants.invalid

  useEffect(() => {
    setRender(true)
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-50 via-orange-50 to-red-50 text-gray-800 font-sans relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] left-[-5%] w-96 h-96 bg-gradient-to-br opacity-40 rounded-full blur-3xl animate-float ${currentError.blobFrom}`}></div>
        <div className={`absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br opacity-30 rounded-full blur-3xl animate-float ${currentError.blobTo}`} style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-15%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-orange-300/25 to-red-400/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <header className={`relative z-10 p-8 transition-all duration-700 ${render ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <div className="flex items-center space-x-4">
          <div className={`w-14 h-14 bg-gradient-to-br rounded-2xl flex items-center justify-center shadow-xl ${currentError.accentBg} ${currentError.accentShadow}`}>
            <span className="text-2xl font-black text-white">!</span>
          </div>
          <div>
            <h1 className={`text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${currentError.accentText === 'text-rose-500' ? 'from-rose-600 to-red-600' : currentError.accentText === 'text-amber-500' ? 'from-amber-600 to-orange-600' : currentError.accentText === 'text-emerald-600' ? 'from-emerald-600 to-teal-600' : 'from-orange-600 to-red-600'}`}>MyShop2025</h1>
            <p className="text-sm text-gray-600">Email Verification Issue</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-180px)] p-6">
        <div 
          className={`bg-white/80 backdrop-blur-2xl border-2 border-white/60 rounded-[2.5rem] shadow-[0_20px_70px_rgba(239,68,68,0.2)] w-full max-w-5xl transition-all duration-1000 delay-200 ${render ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          <div className="p-12 md:p-20 text-center">
            {/* Icon with Glow */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br rounded-full blur-2xl opacity-40 animate-pulse ${currentError.accentBg}`}></div>
                <div className={`relative bg-gradient-to-br rounded-full p-8 shadow-2xl ${currentError.accentBg} ${currentError.accentShadow}`}>
                  <currentError.Icon 
                    className={`w-32 h-32 text-white transition-transform duration-1000 delay-500 ${render ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`} 
                    strokeWidth={2.5} 
                  />
                </div>
                <div className={`absolute -inset-4 rounded-full -z-10 animate-ping-slow opacity-30 ${currentError.accentBg}`}></div>
              </div>
            </div>

            {/* Title with Gradient */}
            <h1 className={`text-5xl md:text-7xl font-black mb-6 text-center transition-all duration-700 delay-500 leading-tight ${render ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} bg-gradient-to-r bg-clip-text text-transparent ${currentError.accentText === 'text-rose-500' ? 'from-rose-600 to-red-600' : currentError.accentText === 'text-amber-500' ? 'from-amber-600 to-orange-600' : currentError.accentText === 'text-emerald-600' ? 'from-emerald-600 to-teal-600' : 'from-orange-600 to-red-600'}`}>
              {currentError.title}
            </h1>

            {/* Subtitle */}
            <div className="flex justify-center w-full">
              <p className={`text-xl md:text-2xl text-gray-700 font-medium mb-12 max-w-4xl text-center leading-relaxed transition-all duration-700 delay-700 ${render ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                {currentError.description}
              </p>
            </div>

            {/* Action Buttons - Bigger */}
            <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-700 delay-1000 ${render ? 'opacity-100' : 'opacity-0'}`}>
              <button 
                className={`w-full sm:w-auto text-white text-lg font-bold py-5 px-12 rounded-2xl transform hover:scale-105 transition-all duration-300 group shadow-2xl ${currentError.accentBg} ${currentError.accentShadow} ${currentError.accentBgHover}`}
                onClick={() => window.location.href = '/resend-verification'}
              >
                <div className="flex items-center justify-center space-x-3">
                  <RefreshCw className="w-5 h-5 transform group-hover:rotate-180 transition-transform" strokeWidth={2.5} />
                  <span>Gửi Lại Liên Kết</span>
                </div>
              </button>
              <button 
                className="w-full sm:w-auto bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 text-lg font-bold py-5 px-12 rounded-2xl hover:from-gray-300 hover:to-gray-400 transform hover:scale-105 transition-all duration-300 group shadow-xl"
                onClick={() => window.location.href = '/support'}
              >
                <div className="flex items-center justify-center space-x-3">
                  <HelpCircle className="w-5 h-5" strokeWidth={2.5} />
                  <span>Liên Hệ Hỗ Trợ</span>
                </div>
              </button>
            </div>
          </div>

          {/* Info Cards Section */}
          <div className={`bg-gradient-to-br from-gray-50/80 to-gray-100/80 border-t-2 border-white/60 rounded-b-[2.5rem] px-12 py-10`}>
            <div className={`transition-all duration-700 delay-[1100ms] ${render ? 'opacity-100' : 'opacity-0'}`}>
              <h3 className="font-bold text-2xl text-gray-800 text-center mb-8">Các Nguyên Nhân Có Thể Xảy Ra</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {currentError.reasons.map((reason, index) => (
                  <div key={index} className="flex flex-col items-center text-center space-y-3 p-6 bg-white/60 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                    <AlertTriangle className={`w-8 h-8 flex-shrink-0 ${currentError.accentText}`} strokeWidth={2} />
                    <span className="text-gray-700 font-medium leading-relaxed">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`relative z-10 text-center p-6 text-gray-600 text-sm transition-opacity duration-700 delay-[1300ms] ${render ? 'opacity-100' : 'opacity-0'}`}>
        <p>&copy; 2025 MyShop2025. All rights reserved. Made with 💚 in Vietnam</p>
      </footer>
    </div>
  )
}

export default ErrorPage

