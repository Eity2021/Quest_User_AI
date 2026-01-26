"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trophy, Flame, Book, Zap, Lock, Star } from "lucide-react"
import PricingSlider from "@/components/ui/pricing-slider/pricing-slider"

export default function page() {


  return (
   <div>
    <PricingSlider></PricingSlider>
   </div>
  )
}
