import { PricingSection } from "./pricing-section";

export const PAYMENT_FREQUENCIES = ["monthly", "yearly"]

export const TIERS = [
    {
        id: "starter",
        name: "Starter",
        price: {
            monthly: "Gratuito",
            yearly: "Gratuito",
        },
        description: "Para novos investidores",
        features: [
            "Alertas por e-mail",
            "Acompanhamento de até 3 investimentos",
            "Relatórios básicos",
            "Suporte via e-mail",
        ],
        cta: "Começar agora",
    },
    {
        id: "pro",
        name: "Pro",
        price: {
            monthly: 200,
            yearly: 180,
        },
        description: "Para investidores experientes",
        features: [
            "Consultoria personalizada",
            "Monitoramento avançado",
            "Relatórios detalhados",
            "Suporte prioritário",
        ],
        cta: "Assinar agora",
        popular: true,
    },
    {
        id: "business",
        name: "Business",
        price: {
            monthly: 350,
            yearly: 300,
        },
        description: "Para empresas e grandes investidores",
        features: [
            "Análises de mercado personalizadas",
            "Gestão de múltiplos portfólios",
            "Relatórios exclusivos",
            "Suporte premium 24/7",
        ],
        cta: "Assinar agora",
    },
]

export function PricingSectionDemo() {
    return (
        <div className="relative flex justify-center items-center w-full mt-20 scale-90">
            <div className="absolute inset-0 -z-10">
                <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            </div>
            <PricingSection
                title="Planos de Assinatura"
                subtitle="Escolha o plano ideal para seus investimentos"
                frequencies={PAYMENT_FREQUENCIES}
                tiers={TIERS}
            />
        </div>
    );
}