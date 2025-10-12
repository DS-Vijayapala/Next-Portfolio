
import React from 'react'
import { Code2 } from 'lucide-react'
import "./loading.css"

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">

            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/15 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: '2s' }} />
            </div>

            {/* Loading Content */}
            <div className="relative z-10 flex flex-col items-center gap-8">

                {/* Spinning Logo */}
                <div className="relative">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-slate-800 w-24 h-24 animate-spin-slow" />

                    {/* Middle Ring */}
                    <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-violet-500 border-r-purple-500 w-20 h-20 animate-spin" />

                    {/* Inner Ring */}
                    <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-pink-500 w-16 h-16 animate-spin-reverse" />

                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-6 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 animate-pulse">
                            <Code2 className="w-12 h-12 text-white" />
                        </div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-2xl font-bold text-slate-100 animate-pulse">
                        Loading
                        <span className="inline-flex ml-1">
                            <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                            <span className="animate-bounce" style={{ animationDelay: '200ms' }}>.</span>
                            <span className="animate-bounce" style={{ animationDelay: '400ms' }}>.</span>
                        </span>
                    </h2>

                    {/* Progress Bar */}
                    <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 animate-progress rounded-full" />
                    </div>

                    <p className="text-sm text-slate-400 animate-pulse">
                        Preparing your experience...
                    </p>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-violet-500/40 rounded-full animate-float"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 3) * 20}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${3 + i}s`
                            }}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Loading