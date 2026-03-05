import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Instagram, Mail, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-zinc-950">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-8">
          <div className="font-bold text-xl tracking-tight">Alex Baylard</div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</a>
            <a href="#resume" className="transition-colors hover:text-foreground/80 text-foreground/60">Resume</a>
            <a href="#media" className="transition-colors hover:text-foreground/80 text-foreground/60">Media</a>
            <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
          </nav>
          <Button variant="default" className="hidden md:inline-flex rounded-full">Book Now</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 lg:py-48 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          {/* We would put a high-quality background image here later */}
          <div className="absolute inset-0 bg-zinc-900 object-cover opacity-50"></div>
          
          <div className="container relative z-20 mx-auto px-4 md:px-8 flex flex-col items-center text-center space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
              Alex Baylard
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-[600px] uppercase tracking-widest font-medium">
              Actor • Singer • Dancer
            </p>
            <div className="flex gap-4 pt-8">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-zinc-200">
                View Reel <Play className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10 hover:text-white">
                Contact Me
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-24 bg-white dark:bg-black">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-zinc-200 dark:bg-zinc-900 rounded-2xl overflow-hidden relative">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                  Headshot Image
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Alex</h2>
                <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  <p>
                    Alex Baylard is a versatile performer based in New York City. With a strong foundation in musical theater, classical acting, and contemporary dance, he brings dynamic energy and emotional depth to every role.
                  </p>
                  <p>
                    Recent credits include regional productions, independent films, and contemporary dance showcases across the country. When not on stage or set, Alex continues to hone his craft through ongoing vocal and physical training.
                  </p>
                </div>
                <Button variant="outline" className="rounded-full">Download Resume</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Highlight Stats / Quick Facts */}
        <section className="w-full py-16 bg-zinc-100 dark:bg-zinc-900">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold">5'10"</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">Height</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">Tenor</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">Vocal Range</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">NYC</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">Local Hire</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">EMC</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">Union Status</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-24 bg-white dark:bg-black">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's Work Together</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                Available for theatrical bookings, commercial work, and creative collaborations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-zinc-50 dark:bg-zinc-900 border-none">
                <CardContent className="pt-6 flex flex-col items-center gap-4">
                  <div className="p-3 bg-white dark:bg-zinc-800 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="font-medium">alex@example.com</div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-50 dark:bg-zinc-900 border-none">
                <CardContent className="pt-6 flex flex-col items-center gap-4">
                  <div className="p-3 bg-white dark:bg-zinc-800 rounded-full">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div className="font-medium">@alexbaylard</div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-50 dark:bg-zinc-900 border-none">
                <CardContent className="pt-6 flex flex-col items-center gap-4">
                  <div className="p-3 bg-white dark:bg-zinc-800 rounded-full">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="font-medium">Bookings</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-12 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-semibold text-lg tracking-tight">Alex Baylard</div>
          <div className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Alex Baylard. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}