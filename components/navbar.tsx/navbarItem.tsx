import { JSX } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Link from "next/link";
import Logo from "@/public/logoipsum-297.svg"
import Image from "next/image";
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: JSX.Element;
    items?: MenuItem[];
}

interface Navbar1Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    menu?: MenuItem[];
    mobileExtraLinks?: {
        name: string;
        url: string;
    }[];
    auth?: {
        login: {
            text: string;
            url: string;
        };
        signup: {
            text: string;
            url: string;
        };
    };
}

const NavBar1 = ({
    logo = {
        url: '',
        src: '',
        alt: '',
        title: '',
    },
    menu = [
        { title: 'Home', url: '#' },
        {
            title: 'Produtos',
            url: '#',
            items: [
                {
                    title: 'Blog1',
                    description: 'description',
                    icon: <Book className="size-5 shrink-0" />,
                    url: ""
                },
                {
                    title: 'Blog3',
                    description: 'description',
                    icon: <Trees className="size-5 shrink-0" />,
                    url: ""
                },
                {
                    title: 'Blog4',
                    description: 'description',
                    icon: <Sunset className="size-5 shrink-0" />,
                    url: ""
                },
                {
                    title: 'Suporte',
                    description: 'description',
                    icon: <Zap className="size-5 shrink-0" />,
                    url: ""
                },
            ],
        },
        {
            title: 'Resouces',
            url: '#',
            items: [
                {
                    title: 'Help Center',
                    description: 'description',
                    icon: <Zap className="size-5 shrink-0" />,
                    url: ""
                },
                {
                    title: 'Contact Us',
                    description: 'description',
                    icon: <Zap className="size-5 shrink-0" />,
                    url: ""
                },
                {
                    title: 'Status',
                    description: 'description',
                    icon: <Zap className="size-5 shrink-0" />,
                    url: ""
                },
            ],
        },
        {
            title: 'Planos',
            url: '#',
        },
        {
            title: 'Blog',
            url: '#',
        },
    ],
    mobileExtraLinks = [
        { name: 'Press1', url: '#' },
        { name: 'Press2', url: '#' },
        { name: 'Pres3', url: '#' },
        { name: 'Press3', url: '#' },
    ],
    auth = {
        login: { text: 'Login', url: '#' },
        signup: { text: 'Sair', url: '#' },
    }
}: Navbar1Props) => {
    return (
        <section className="py-4 shadow-md">
            <div className="container ">
                <nav className="hidden justify-between lg:flex ">
                    <div className="flex items-center gap-6">
                        <Link href={logo.url} className="flex items-center gap-2 ml-5">
                            <Image src={Logo} className="w-36" width={160} height={160} alt={logo.alt} />
                        </Link>
                        <div className="flex items-center">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    {menu.map((item) => renderMenuItem(item))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button asChild variant={"outline"} size={"sm"} >
                            <Link href={auth.signup.url}>{auth.signup.text}</Link>
                        </Button>
                        <Button asChild size={"sm"}>
                            <Link href={auth.login.url}>{auth.login.text}</Link>
                        </Button>
                    </div>
                </nav>
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        <Link href={logo.url} className="flex items-center gap-2 ml-5">
                            <Image src={Logo} className="w-36" width={160} height={160} alt={logo.alt} />
                        </Link>
                        <Sheet>
                            <SheetTrigger asChild className="mr-5">
                                <Button variant={"outline"} size={"icon"}>
                                    <Menu className="size-4"/>
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <Link href={logo.url} className="flex items-center gap-2">
                                        <Image src={Logo} className="w-36" width={160}  height={160} alt={logo.alt}/>
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="my-6 flex flex-col gap-6">
                                    <Accordion
                                    type="single"
                                    collapsible
                                    className="flex w-full flex-col gap-4"
                                    >
                                        {menu.map((item) => renderMobileMenuItem(item))}
                                    </Accordion>
                                    <div className="border-t py-4">
                                        <div className="grid grid-cols-2 justify-start">
                                            {mobileExtraLinks.map((link, idx) => (
                                                <Link 
                                                className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                                                key={idx}
                                                href={link.url}
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Button asChild variant={"outline"}>
                                            <Link href={auth.login.url}>{auth.login.text}</Link>
                                        </Button>
                                        <Button asChild>
                                            <Link href={auth.signup.url}>{auth.signup.text}</Link>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
};

const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title} className="text-muted-foreground">
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="w-80 p-3">
                        <NavigationMenuLink>
                            {item.items.map((subItem) => (
                                <li key={subItem.title}>
                                    <Link
                                        className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                                        href={subItem.url}
                                    >
                                        {subItem.icon}
                                        <div>
                                            <div className="text-sm font-medium">
                                                {subItem.title}
                                            </div>
                                            {subItem.description && (
                                                <p className="text-sm  leading-snug text-muted-foreground">{subItem.description}</p>
                                            )}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </NavigationMenuLink>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }
    return (
        <Link
            key={item.title}
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
            href={item.url}
        >
            {item.title}
        </Link>
    );
};

const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <Link
                            key={subItem.title}
                            className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href={subItem.url}
                        >
                            {subItem.icon}
                            <div>
                                <div className="text-sm font-medium">{subItem.title}</div>
                                {subItem.description && (
                                    <p className="text-sm leading-snug text-muted-foreground">
                                        {subItem.description}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    };

    return (
        <Link key={item.title} href={item.url} className="font-semibold">
            {item.title}
        </Link>
    );
};

export { NavBar1 }


