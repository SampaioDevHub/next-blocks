import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";

interface Hero1Props {
    badge?: string;
    heading: string;
    description: string;
    buttons?: {
        primary?: {
            text: string;
            url: string;
        };
        secondery?: {
            text: string;
            url: string;
        };
    };
    image: {
        src: string;
        alt: string;
    }
}

const Hero1 = ({
    badge = "Zaro Investimentos",
    heading = "Titulo da Aplicaçãodfdfdfdfdfddfd",
    description = "Descrição da Aplicação",
    buttons = {
        primary: {
            text: '',
            url: "",
        },
        secondery: {
            text: '',
            url: "",
        },
    },
    image = {
        src: "",
        alt: '',
    },
}: Hero1Props) => {
    return (
        <section className="py-32">
            <div className="container">
                <div className="flex justify-center items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col  items-center text-center lg:items-start lg:text-left">
                        {badge && (
                            <Badge variant={"outline"}>
                                {badge}
                                <ArrowRight className="ml-2 size-4" />
                            </Badge>
                        )}
                        <h1>
                            {heading}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Hero1 }