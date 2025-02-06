import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Background from "@/public/3d-graph-computer-illustration.jpg";
import { Button } from "../ui/button";

const Feature74 = () => {
    return (
        <section className="py-32">
            <div className="container flex flex-col gap-16 lg:px-16">
                <div className="lg:max-w-sm">
                    <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6 text">
                        Zaro Investimentos Imobiliários
                    </h2>
                    <p className="mb-8 text-muted-foreground lg:text-lg">
                        Soluções inteligentes para gestão e valorização de ativos imobiliários.
                        Investimentos estratégicos com segurança e rentabilidade.
                    </p>
                    <Button className="group flex items-center text-xs font-medium md:text-base lg:text-lg shadow-md">
                        Agende uma demonstração
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 shadow-md">
                        <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                            <Image
                                src={Background}
                                alt="Gestão de Ativos"
                                className="aspect-[16/9] h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                            <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                Gestão de Ativos
                            </h3>
                            <p className="text-muted-foreground lg:text-lg">
                                Gerenciamos investimentos imobiliários de forma estratégica,
                                garantindo maior valorização e retorno para nossos clientes.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 shadow-md">
                        <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                            <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                Investimentos Seguros
                            </h3>
                            <p className="text-muted-foreground lg:text-lg">
                                Criamos oportunidades sólidas e seguras para investidores
                                que buscam alta rentabilidade no setor imobiliário.
                            </p>
                        </div>
                        <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                            <Image
                                src={Background}
                                alt="Investimentos Seguros"
                                className="aspect-[16/9] h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Feature74 };