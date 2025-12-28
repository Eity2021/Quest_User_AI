"use client";

import {
  ChevronLeft,
  Share2,
  Zap,
  CheckCircle2,
  XCircle,
  StopCircle as SkipCircle,
  Clock,
  TrendingUp,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation Header */}
      <nav className="border-b border-slate-800 px-8 py-6 sticky top-0 z-50 bg-slate-950/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="hover:bg-slate-800 p-2 rounded-lg transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold">Test Results</h1>
          </div>
          <div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            1,308
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Top Section: Score Card + Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 h-full flex flex-col justify-between">
              <div className="absolute top-6 right-6">
                <button className="hover:bg-slate-700 p-2 rounded-lg transition-colors">
                  <Share2 className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              <div className="text-center space-y-3">
                <div className="text-7xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                  85%
                </div>
                <p className="text-slate-400 text-xl">Great Job</p>
              </div>

              <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-yellow-400">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">+250 XP Earned</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Correct Answers</p>
                    <p className="text-2xl font-bold text-green-400">17/30</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Wrong Answers</p>
                    <p className="text-2xl font-bold text-red-400">2/30</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <SkipCircle className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Skipped Questions</p>
                    <p className="text-2xl font-bold text-amber-400">1/20</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Time Taken</p>
                    <p className="text-2xl font-bold text-blue-400">12:34</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Detailed Analysis + Accuracy */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-8">Detailed Analysis</h2>
            <h3 className="text-slate-400 text-xs uppercase tracking-widest mb-8 font-semibold">
              Subject Performance
            </h3>

            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-semibold text-slate-100">
                    Mathematics
                  </span>
                  <span className="text-sm text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                    8/10
                  </span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-semibold text-slate-100">
                    Science
                  </span>
                  <span className="text-sm text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                    8/10
                  </span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-semibold text-slate-100">
                    English
                  </span>
                  <span className="text-sm text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                    7/10
                  </span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
            <div className="mb-4">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
            </div>
            <p className="text-slate-400 text-sm uppercase tracking-widest mb-3">
              Overall Accuracy
            </p>
            <p className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-4">
              85%
            </p>
            <p className="text-slate-500 text-sm">
              Excellent performance across all subjects
            </p>
          </div>
        </div>

        {/* Bottom Section: Difficulty Breakdown */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8">Difficulty Breakdown</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="text-5xl font-bold text-cyan-400 mb-3">6/6</div>
              <div className="text-slate-400 text-lg font-medium">Easy</div>
              <div className="text-slate-600 text-sm mt-2">100% Accuracy</div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="text-5xl font-bold text-cyan-400 mb-3">6/6</div>
              <div className="text-slate-400 text-lg font-medium">Medium</div>
              <div className="text-slate-600 text-sm mt-2">100% Accuracy</div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="text-5xl font-bold text-cyan-400 mb-3">6/6</div>
              <div className="text-slate-400 text-lg font-medium">Hard</div>
              <div className="text-slate-600 text-sm mt-2">100% Accuracy</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl h-12 font-semibold flex items-center justify-center gap-2 transition-all">
              <RotateCcw className="w-5 h-5" />
              Retake Test
            </Button>
            <Button className="bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 rounded-xl h-12 font-semibold flex items-center justify-center gap-2 transition-all">
              <Share2 className="w-5 h-5" />
              Share Results
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
