import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { History, Rocket, MessageSquare, Users, Verified, Building } from 'lucide-react'

const features = [
  {
    icon: History,
    title: 'Our Story',
    description: 'Founded with a vision for excellence, learn about our rich history and founding principles.',
  },
  {
    icon: Rocket,
    title: 'Mission & Vision',
    description: 'Our core values and educational philosophy guide our commitment to nurturing future leaders.',
  },
  {
    icon: MessageSquare,
    title: "Principal's Message",
    description: 'A warm welcome sharing insights into our educational approach and community spirit.',
  },
  {
    icon: Users,
    title: 'Leadership Team',
    description: 'Meet the dedicated board members and administrators guiding our college.',
  },
  {
    icon: Verified,
    title: 'Accreditation & Affiliations',
    description: 'Recognized by leading educational bodies for our high standards.',
  },
  {
    icon: Building,
    title: 'Facilities & Infrastructure',
    description: 'Explore our modern classrooms, labs, library, and sports facilities.',
  },
]

export default function AboutUs() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our history, mission, and the community that makes Model College a center for excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col">
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
              <Button className="w-full mt-4">
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}