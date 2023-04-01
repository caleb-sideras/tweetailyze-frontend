import React from 'react'
import * as Avatar from '@radix-ui/react-avatar';
import { ProfileProps } from './interfaces';

export default function Profile(profileProps: ProfileProps) {
    const {id, name, username} = profileProps
    const getInitials = (name:string) => {
        const words = name.split(" ");
        let initials = "";
        for (let i = 0; i < words.length; i++) {
            initials += words[i].charAt(0);
        }
        return initials
    }
    return (
        <a href={`https://twitter.com/${username}`} target="_blank" rel="noopener noreferrer">
            <div className='overflow-hidden w-full gap-4 flex flex-row bg-b-blue justify-center rounded-xl p-4'>
                <Avatar.Root className="bg-m-blue inline-flex h-16 w-16 select-none items-center justify-center overflow-hidden rounded-full align-middle">
                    <Avatar.Image
                        className="h-full w-full rounded-[inherit] object-cover"
                        src=""
                        alt="Colm Tuite"
                    />
                    <Avatar.Fallback
                        className="text-b-blue font-extrabold text-xl leading-1 flex h-full w-full items-center justify-center bg-white text-[15px]"
                    //   delayMs={600}
                    >
                        {getInitials(name)}
                    </Avatar.Fallback>
                </Avatar.Root>
                <div className=' justify-center flex flex-col'>
                    <div className='text-xl text-h-blue font-bold'>{name}</div>
                    <div className='text-lg text-white'>
                        @{username}
                    </div>
                </div>
            </div>
        </a>
    )
}