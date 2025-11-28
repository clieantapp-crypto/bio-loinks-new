"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Mail, Globe, FileText, Shield, Gift, Package } from "lucide-react"
import Link from "next/link"

const links = [
    {
      title: "الدفع السريع",
      description: "زر موقعنا الرسمي",
      url: "/",
      icon: Globe,
    },
    {
      title: "دفع الفواتير",
      description: "راسلنا مباشرة",
      url: "/",
      icon: Mail,
    },
    {
      title: "العروض",
      description: "اطّلع على أحدث العروض المتاحة",
      url: "/",
      icon: Gift, 
    },
    {
      title: "باقات الرصيد",
      description: "استعرض باقات الرصيد المناسبة لك",
      url: "/",
      icon: Package, // أو أيقونة أخرى لديك
    },
  ];
  

export function BioLinks() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-600/5 via-background to-yellow-600/5" dir="rtl">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Profile Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div
            className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-lime-600 to-yellow-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg animate-scale-in"
            style={{
              animation: mounted ? "scale-in 0.5s ease-out" : "none",
            }}
          >
          5G
          </div>
          <h1
            className="text-4xl font-bold mb-3 text-foreground animate-slide-up"
            style={{
              animation: mounted ? "slide-up 0.6s ease-out 0.1s both" : "none",
            }}
          >
       الخدمات والعروض
          </h1>
       
        </div>

        {/* Links Grid */}
        <div className="space-y-4 mb-8">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block animate-slide-up"
                style={{
                  animation: mounted ? `slide-up 0.5s ease-out ${0.3 + index * 0.1}s both` : "none",
                }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border hover:border-lime-600/50 group">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-lime-600/10 flex items-center justify-center group-hover:bg-lime-600/20 transition-colors">
                      <Icon className="w-6 h-6 text-lime-600" />
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className="font-bold text-lg mb-1 text-foreground group-hover:text-lime-600 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </div>
                </Card>
              </a>
            )
          })}
        </div>

        {/* Legal Footer */}
        <div
          className="border-t border-border pt-6 mt-8 animate-fade-in"
          style={{
            animation: mounted ? "fade-in 0.6s ease-out 1.2s both" : "none",
          }}
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="flex items-center gap-2 hover:text-lime-600 transition-colors">
              <FileText className="w-4 h-4" />
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="flex items-center gap-2 hover:text-lime-600 transition-colors">
              <Shield className="w-4 h-4" />
              الشروط والأحكام
            </Link>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}
