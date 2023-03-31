import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { TweetCluster } from './interfaces';

interface SortProps {
    handleSort: (property: keyof TweetCluster) => void;
  }

export default function Sort({handleSort }: SortProps) {
    const handleItemSelected = (selectedItem: Select.ItemValueType) => {
        console.log('Selected item:', selectedItem);
        handleSort(selectedItem)
      }

    const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
        return (
            <Select.Item
                className={classnames(
                    'text-[13px] leading-none text-t-white rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-l-blue data-[highlighted]:text-t-white',
                    className
                )}
                {...props}
                ref={forwardedRef}
            >
                <Select.ItemText>{children}</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                    <CheckIcon />
                </Select.ItemIndicator>
            </Select.Item>
        );
    });

    return (
        <Select.Root onValueChange={handleItemSelected}>
            <Select.Trigger
                className="inline-flex font-bold items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-m-blue text-h-blue data-[placeholder]:text-h-blue outline-none"
                aria-label="Food"
            >
                <Select.Value placeholder="Positive" />
                <Select.Icon className="text-h-blue">
                    <ChevronDownIcon />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content className="overflow-hidden bg-b-blue rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                    <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-b-blue  text-t-white cursor-default">
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="p-[5px]">
                        <Select.Group>
                            <SelectItem value="pos">Positive</SelectItem>
                            <SelectItem value="neg">Negative</SelectItem>
                            <SelectItem value="neu">Neutral</SelectItem>
                            <SelectItem value="compound">Compound</SelectItem>
                            <SelectItem value="topic_weight">Topic Weight</SelectItem>
                        </Select.Group>
                    </Select.Viewport>
                    <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                        <ChevronDownIcon />
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}


