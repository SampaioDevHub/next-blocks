import { HandHelping, Users, Zap } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type React from "react" // Added import for React
import Background from "@/public/3d-graph-computer-illustration.jpg"
interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface Hero45Props {
  badge?: string
  heading: string
  imageSrc?: string
  imageAlt?: string
  features?: Feature[]
}

const defaultFeatures: Feature[] = [
  {
    icon: <HandHelping className="h-auto w-5 text-orange-500"  />,
    title: "Suporte Personalizado",
    description: "Conte com um suporte especializado para suas necessidades de investimento.",
  },
  {
    icon: <Users className="h-auto w-5 text-orange-500" />,
    title: "Soluções Colaborativas",
    description: "Aprimore sua estratégia com ferramentas que facilitam a gestão e comunicação.",
  },
  {
    icon: <Zap className="h-auto w-5 text-orange-500" />,
    title: "Alta Performance",
    description: "Aproveite retornos rápidos e seguros com investimentos de alta performance.",
  },
]

export function Hero45({
  badge = "Projeto em Desenvolvimento Equipe Zaro",
  imageAlt = "ZARO Investimentos",
  features = defaultFeatures,
}: Hero45Props) {
  return (
    <section className="py-16 md:py-24 lg:py-32 shadow-md rounded-md">
      <div className="container overflow-hidden">
        <div className="mb-12 flex flex-col items-center gap-4 text-center md:mb-16 lg:mb-20 lg:gap-6">
          <Badge variant="outline" aria-label="Website Badge">
            {badge}
          </Badge>
         <h1 className="font-bold">Investimentos Inteligentes com a <span className="font-extrabold text-[#003466]">ZARO</span></h1>
        </div>
        <div className="relative mx-auto max-w-screen-lg ">
          <Image
            src={Background}
            alt={imageAlt}
            width={1000}
            height={500}
            className="aspect-video max-h-[500px] w-full rounded-xl object-cover"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
        <div className="mx-auto mt-8 flex max-w-screen-lg flex-col gap-6 md:mt-10 md:flex-row md:gap-0">
          {features.map((feature, index) => (
            <div key={index} className="flex grow basis-0 md:px-6">
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="absolute hidden h-full bg-gradient-to-b from-muted via-transparent to-muted md:block"
                />
              )}
              <div className="flex grow flex-col rounded-md bg-background p-4">
                <div
                  className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg"
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

