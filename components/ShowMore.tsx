'use client';

import { useRouter } from 'next/navigation';
import { showMoreProps } from '@/types';
import CustomButton from './CustomButton';
import { updateSerchParams } from '@/utils/index';
const ShowMore = ({ pageNumber, isNext }: showMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSerchParams('limit', `${newLimit}`);
    router.push(newPathName, { scroll: false });
  };

  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          title='Show More'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
