import { Link } from 'react-router-dom';

const CategoryCard = ({ animal }) => {
  return (
    <img
      className='w-[263px] lg:w-[580px] h-[260px] lg:h-[320px] flex-shrink-0 bg-cover bg-no-repeat rounded-[12px] '
      src={animal?.img}
      alt={animal?.name}
    />
  )
};

export default CategoryCard
