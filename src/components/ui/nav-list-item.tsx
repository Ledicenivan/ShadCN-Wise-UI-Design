"use client"

import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

type NavListItemProps = {
  href: string
  label: string
  icon: LucideIcon
  isActive?: boolean
}

export function NavListItem({ href, label, icon: Icon, isActive }: NavListItemProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        className={cn(
          "h-12 rounded-full px-4 py-3 [&>svg]:size-6",
          /* Light mode */
          "text-grey-400 bg-transparent",
          "hover:text-green-700 hover:font-semibold hover:bg-transparent",
          "active:bg-grey-300 active:text-green-700 active:font-semibold",
          "data-[active=true]:bg-grey-300 data-[active=true]:text-green-700 data-[active=true]:font-semibold",
          /* Dark mode */
          "dark:text-grey-300 dark:bg-transparent",
          "dark:hover:bg-transparent dark:hover:text-green-500 dark:hover:font-semibold dark:hover:[&>svg]:text-grey-300",
          "dark:active:bg-grey-400 dark:active:text-green-500 dark:active:font-semibold dark:active:[&>svg]:text-grey-300",
          "dark:data-[active=true]:bg-grey-500 dark:data-[active=true]:text-green-500 dark:data-[active=true]:font-semibold"
        )}
      >
        <Link href={href} className="flex items-center gap-4">
          <Icon className="size-6 shrink-0" />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
