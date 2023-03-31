import React from 'react'
import * as Separator from '@radix-ui/react-separator';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ArrowDownIcon, ArrowUpIcon } from '@radix-ui/react-icons';
import TweetCell from './TweetCell';
import { TweetDataProps } from './interfaces';


export default function TweetData(props: TweetDataProps) {
    const { pos, neg, neu, topic_weight, compound } = props
    const [open, setOpen] = React.useState(false);
    return (
        <div className='-mt-4 w-full'>
            <Collapsible.Root open={open} onOpenChange={setOpen}>
                <div className=' flex items-center justify-end'>
                    <Collapsible.Trigger asChild>
                        <button className="
                            rounded-full h-[25px] w-[25px] 
                            inline-flex items-center justify-center text-vl-grey outline-none data-[state=closed]:bg-d-grey
                            data-[state=open]:bg-d-grey hover:bg-l-grey data-[state=open]:text-l-blue 
                            data-[state=close]:text-vl-grey"
                        >
                            {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
                        </button>
                    </Collapsible.Trigger>
                </div>
                <div className={`group my-4 text-t-white bg-b-blue cursor-pointer grid grid-cols-3 ${open ? 'rounded-xl' : 'rounded-full'}`} >
                    <TweetCell open={open} num={pos} cell_v={'top_l'} borderStyling={['border-r-0']} title={'Positive Sentiment'} description={'Scale from 0-1 of tweet positivity'}/>
                    <TweetCell open={open} num={neg} cell_v={'top_m'} borderStyling={['']} title={'Negative Sentiment'} description={'Scale from 0-1 of tweet negativity'}/>
                    <TweetCell open={open} num={neu} cell_v={'top_r'} borderStyling={['border-l-0']} title={'Neutral Sentiment'} description={'Scale from 0-1 of tweet neutrality'}/>
                    
                    <Collapsible.Content>
                        <TweetCell open={open} num={compound} cell_v={'bot_l'} borderStyling={['border-r-0', 'border-t-0']} title={'Compound'} description={'The overall sentiment of the tweet between -1 (most extreme negative) and +1 (most extreme positive).'}/>
                    </Collapsible.Content>
                    
                    <Collapsible.Content>
                        <TweetCell open={open} num={topic_weight} cell_v={'bot_m'} borderStyling={['border-t-0']} title={'Topic'} description={'Relevance of the tweet to the given topic'}/>
                    </Collapsible.Content>

                    <Collapsible.Content>
                        <TweetCell open={open} num={1} cell_v={'bot_r'} borderStyling={['border-l-0', 'border-t-0']} title={'Confidence'} description={'Scale from 0-1 of confidence in analysis'}/>
                    </Collapsible.Content>
                </div>

            </Collapsible.Root>

        </div>
    )
}