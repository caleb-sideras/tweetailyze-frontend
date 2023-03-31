import React, { useState } from 'react'
import * as Toggle from '@radix-ui/react-toggle';
import { ArrowDownIcon, ArrowUpIcon, FontItalicIcon } from '@radix-ui/react-icons';
import { TweetCluster } from './interfaces';

type HandleToggleProps = () => void;

export default function ToggleSort({ handleToggle }: { handleToggle: HandleToggleProps }) {
  const [Asc, setAsc] = useState(true)
  const selectedItem = () => {
    setAsc(!Asc)
    handleToggle()
  }
  return (
    <Toggle.Root
      onPressedChange={ selectedItem}
      aria-label="Toggle italic"
      className="hover:bg-violet3 color-vl-grey data-[state=on]:bg-d-blue
      text-t-white data-[state=off]:bg-l-blue flex h-[35px] w-[35px] items-center 
      justify-center bg-white  text-base leading-4 rounded-full"
    >
      {Asc ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </Toggle.Root>
  )
}