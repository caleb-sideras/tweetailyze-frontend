import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Cross2Icon } from '@radix-ui/react-icons';
import { TweetCellProps,CellVariants } from './interfaces';


export default function TweetCell({ open, num, cell_v, borderStyling, title, description }: TweetCellProps) {
  const [peak, setPeak] = React.useState(false);
  const handleClick = () => {
    setPeak(true);
  };
  const cellVariants: CellVariants = {
    'top_l': ['rounded-tl-xl', 'rounded-l-full'],
    'top_m': ['rounded-none', 'rounded-none'],
    'top_r': ['rounded-tr-xl', 'rounded-r-full'],
    'bot_l': ['rounded-bl-xl', 'rounded-none'],
    'bot_m': ['rounded-none', 'rounded-none'],
    'bot_r': ['rounded-br-xl', 'rounded-none'],
  }
  return (
    <div onMouseEnter={handleClick} className={`${borderStyling.join(' ')} flex w-full justify-center p-2 ${open ? `${cellVariants[cell_v][0]}` : `${cellVariants[cell_v][1]}`} col-span-1 hover:bg-l-blue border-l-blue border text-center w-full`}
    >
      <Popover.Root open={peak} onOpenChange={setPeak}>
        <Popover.Trigger className='w-full h-full'>
          {num}
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="rounded p-5 w-[260px] focus:shadow-transparent bg-m-blue shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            <div className="flex flex-col gap-2.5">
              <p className="text-h-blue text-[15px] leading-[19px] font-medium mb-2.5">{title}</p>
              <div className="flex gap-5 items-center">
                <label className="text-[13px] text-h-blue ">
                  {description}
                </label>
              </div>
            </div>
            <Popover.Close
              className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-h-blue bg-d-grey absolute top-[5px] right-[5px] focus:shadow-[0_0_0_2px] focus:shadow-transparent outline-none cursor-pointer"
              aria-label="Close"
            >
              <Cross2Icon />
            </Popover.Close>
            <Popover.Arrow className="fill-white" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
};
