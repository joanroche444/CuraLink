import React from 'react'
import { Button } from './button';
import Image from 'next/image';
interface ButtonProps{
    isLoading :boolean,
    className?:string,
    children:React.ReactNode,
}
function Submitbuttom({isLoading,className,children}:ButtonProps) {
    return (
        <Button
          type="submit"
          disabled={isLoading}
          className={`${className ?? 'bg-[#f3bae0] hover:bg-white text-white hover:text-[#f3bae0] border border-[#f3bae0] rounded-full'} px-6 py-2 transition-all duration-300`}
        >
          {isLoading ? (
            <div className="flex items-center gap-4">
              <Image 
               src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"

              />
              Loading...
            </div>
          ) : (
            children
          )}
        </Button>
      );
    };
    
export default Submitbuttom