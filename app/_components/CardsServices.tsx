"use client"
import { BsMagic } from "react-icons/bs"
import { HoverEffect } from "./ui/card-hover-effect"
import {
  MdOutlineDesignServices,
  MdOutlineSocialDistance,
} from "react-icons/md"
import { BiSolidTrafficCone } from "react-icons/bi"
import { SiPagespeedinsights, SiSimpleanalytics } from "react-icons/si"
import NumberTickerClient from "./others/number-ticker-clients"
import NumberTickerProjects from "./others/number-ticker-projects"

const projects = [
  {
    title: "Identidade Visual",
    description:
      "Criamos uma identidade visual única para destacar sua marca no mercado.",
    icon: BsMagic,
  },
  {
    title: "Gestão de Redes Sociais",
    description:
      "Cuidamos de suas redes sociais para engajar seu público e aumentar a presença online.",
    icon: MdOutlineSocialDistance,
  },
  {
    title: "Tráfego pago",
    description:
      "Maximizamos seu alcance com campanhas de tráfego pago eficientes e direcionadas",
    icon: BiSolidTrafficCone,
  },
  {
    title: "Design de Marca",
    description:
      "Transformamos ideias em uma marca visualmente forte e memorável.",
    icon: MdOutlineDesignServices,
  },
  {
    title: "Análise de Desempenho",
    description:
      "Monitoramos e otimizamos suas campanhas para garantir o melhor retorno sobre o investimento.",
    icon: SiSimpleanalytics,
  },
  {
    title: "Criação de Sites",
    description:
      "Desenvolvemos sites responsivos e otimizados para uma experiência de usuário excepcional.",
    icon: SiPagespeedinsights,
  },
]

const CardServices = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h3 className="section-title">Serviços</h3>
      <p className="section-description">
        O que oferecemos para sua empresa...
      </p>

      {/* SERVICE CARDS */}
      <div>
        <div className="mx-auto max-w-5xl px-8">
          <HoverEffect items={projects} />
        </div>
      </div>

      {/* NUMBER TICKER */}
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <div className="flex min-w-[350px] max-w-[350px] flex-col items-center justify-center rounded-xl border-[3px] border-solid border-black bg-black py-5 text-white transition-all duration-300 hover:border-white hover:shadow-white_color">
          <NumberTickerClient />
          <p className="mt-2 text-xl font-semibold uppercase text-zinc-400 md:text-2xl">
            Clientes satisfeitos
          </p>
        </div>

        <div className="flex min-w-[350px] max-w-[350px] flex-col items-center justify-center rounded-xl border-[3px] border-solid border-black bg-black py-5 text-white transition-all duration-300 hover:border-white hover:shadow-white_color">
          <NumberTickerProjects />
          <p className="mt-2 text-xl font-semibold uppercase text-zinc-400 md:text-2xl">
            Projetos entregues
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardServices
