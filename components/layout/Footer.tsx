import Link from 'next/link'
import { School } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <School className="h-6 w-6" />
              <span className="text-lg font-bold">Model College</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Nurturing Minds, Building Futures.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/admissions" className="text-muted-foreground hover:text-foreground">Admissions</Link></li>
              <li><Link href="/contact-us" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Academics</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/academics/primary" className="text-muted-foreground hover:text-foreground">Primary Section</Link></li>
              <li><Link href="/academics/secondary" className="text-muted-foreground hover:text-foreground">Secondary Section</Link></li>
              <li><Link href="/academics/departments" className="text-muted-foreground hover:text-foreground">Departments</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {/* Social media links would go here */}
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Model College. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}