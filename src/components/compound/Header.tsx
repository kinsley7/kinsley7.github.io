import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { IComponent } from '../IComponent'

interface HeaderProps extends IComponent{

}

export const Header = ({}: HeaderProps) => {
  return (
	<div className="flex justify-center pt-20">
	<div className="flex gap-8">
	  <a className="text-sm/6 font-semibold text-white/50 hover:text-white">About Me</a>
	  <a className="text-sm/6 font-semibold text-white/50 hover:text-white">Contact</a>
	  <Popover>
		<PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
		  Internship
		</PopoverButton>
		<PopoverPanel
		  transition
		  anchor="bottom"
		  className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
		>
		  <div className="p-3">
			<a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
			  <p className="font-semibold text-white">Rotation One</p>
			  <p className="text-white/50">Junior Dev on the Consumer Portals Team</p>
			</a>
			<a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
			  <p className="font-semibold text-white">Rotation Two</p>
			  <p className="text-white/50">SQA Team Member</p>
			</a>
			<a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
			  <p className="font-semibold text-white">Rotation Three</p>
			  <p className="text-white/50"></p>
			</a>
		  </div>
		  <div className="p-3">
			<a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
			  <p className="font-semibold text-white">Reflection</p>
			  <p className="text-white/50"></p>
			</a>
		  </div>
		</PopoverPanel>
	  </Popover>
	</div>
  </div>
  )
}