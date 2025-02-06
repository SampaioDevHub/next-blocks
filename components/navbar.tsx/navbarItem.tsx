"use client";

import { MenuIcon } from "lucide-react";
import Logo from "@/public/ZAROLOGOo.svg"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Card } from "../ui/card";

const Navbar5 = () => {
    const features = [
        {
            title: "Início",
            description: "Conheça a ZARO Investimentos Imobiliários",
            href: "#",
        },
        {
            title: "Portfólio",
            description: "Veja nossos empreendimentos e investimentos",
            href: "#",
        },
        {
            title: "Planos de Investimento",
            description: "Conheça nossos planos de investimento e rendimentos",
            href: "#",
        },
        {
            title: "Missão e Valores",
            description: "Nossa transparência e compromisso com os clientes",
            href: "#",
        },
        {
            title: "Contato",
            description: "Fale conosco pelo WhatsApp ou e-mail",
            href: "#",
        },
    ];

    return (
        <section className="shadow-md rounded-sm">
            <div className="container ">
                <nav className="flex items-center justify-between py-0 h-28 ">
                    <div className="flex items-center gap-2">
                        <Image src={Logo} alt="ZARO Investimentos Imobiliários" width={300} height={80} className="ml-3 lg:ml-5 h-auto" />
                    </div>
                    <NavigationMenu className="hidden lg:block">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-[600px] grid-cols-2 p-3">
                                        {features.map((feature, index) => (
                                            <NavigationMenuLink
                                                href={feature.href}
                                                key={index}
                                                className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                            >
                                                <div key={feature.title}>
                                                    <p className="mb-1 font-semibold">{feature.title}</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="#"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Portfólio
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="#"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Sobre Nós
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="#"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Contato
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="hidden items-center gap-4 lg:flex">
                        <Button variant="outline">Entrar</Button>
                        <Button>Cadastre-se</Button>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="max-h-screen overflow-scroll">
                            <SheetHeader>
                                <SheetTitle>
                                    <Card className="mt-3 shadow-md">
                                        <div className="flex items-center gap-4">
                                            <Image src={Logo} alt="ZARO Investimentos Imobiliários" className="h-40" />
                                        </div>
                                    </Card>

                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col">
                                <Accordion type="single" collapsible className="mb-2 mt-4">
                                    <AccordionItem value="solutions" className="border-none">
                                        <AccordionTrigger className="hover:no-underline">
                                            Serviços
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="grid md:grid-cols-2">
                                                {features.map((feature, index) => (
                                                    <a
                                                        href={feature.href}
                                                        key={index}
                                                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                                    >
                                                        <div key={feature.title}>
                                                            <p className="mb-1 font-semibold">
                                                                {feature.title}
                                                            </p>
                                                            <p className="text-sm text-muted-foreground">
                                                                {feature.description}
                                                            </p>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <div className="flex flex-col gap-6">
                                    <a href="#" className="font-medium">
                                        Blog
                                    </a>
                                    <a href="#" className="font-medium">
                                        Notícias
                                    </a>
                                    <a href="#" className="font-medium">
                                        FAQ
                                    </a>
                                </div>
                                <div className="mt-6 flex flex-col gap-4">
                                    <Button variant="outline">WhatsApp: (19) 98869-1261</Button>
                                    <Button>Email: contato@zaroinvestimentos.com.br</Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </section>
    );
};

export { Navbar5 };
