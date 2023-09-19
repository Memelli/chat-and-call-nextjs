import { Member, MemberRole } from '@prisma/client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Check,
  Gavel,
  MoreVertical,
  Shield,
  ShieldCheck,
  ShieldQuestion,
} from 'lucide-react'

interface UserActionProps {
  member: Member
  onRoleChange: (memberId: string, role: MemberRole) => Promise<void>
  onKick: (memberId: string) => Promise<void>
}

const UserAction = ({ member, onRoleChange, onKick }: UserActionProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical className="h-4 w-4 text-zinc-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex items-center">
            <ShieldQuestion className="w-4 h-4 mr-2" />
            <span>Role</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                onClick={() => onRoleChange(member.id, 'GUEST')}
              >
                <Shield className="h-4 w-4 mr-2" />
                Guest
                {member.role === 'GUEST' && (
                  <Check className="h-4 w-4 ml-auto" />
                )}
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => onRoleChange(member.id, 'MODERATOR')}
              >
                <ShieldCheck className="h-4 w-4 mr-2" />
                Moderator
                {member.role === 'MODERATOR' && (
                  <Check className="h-4 w-4 ml-auto" />
                )}
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onKick(member.id)}>
          <Gavel className="h-4 w-4 mr-2" /> Kick
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAction
