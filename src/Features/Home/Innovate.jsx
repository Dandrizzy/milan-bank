import { Card, Strong, Text } from '@radix-ui/themes';
import { FaCheckCircle, FaArrowCircleDown } from "react-icons/fa";
import { FaClock, FaSquarePhone } from "react-icons/fa6";
const Innovate = () => {
 return (
  <div className='flex flex-col gap-4 items-center justify-center sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:place-items-center'>
   <Card size="2" style={{ maxWidth: 400 }}>

    <FaCheckCircle className=' h-16 w-16 text-red-500' />

    <div className="py-8">
     <Text as="p" size="4">
      <Strong>Secure International Transaction</Strong>
     </Text>
    </div>
    <Text as="p" size="4">
     Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.
    </Text>
   </Card>

   <Card size="2" style={{ maxWidth: 400 }}>

    <FaSquarePhone className=' h-16 w-16 text-red-500' />

    <div className="py-8">
     <Text as="p" size="4">
      <Strong>24/7 Support from the Expert Team</Strong>
     </Text>
    </div>
    <Text as="p" size="4">
     Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.
    </Text>
   </Card>

   <Card size="2" style={{ maxWidth: 400 }}>

    <FaArrowCircleDown className=' h-16 w-16 text-red-500' />

    <div className="py-8">
     <Text as="p" size="4">
      <Strong>Lowest Processing Fee than Other Banks</Strong>
     </Text>
    </div>
    <Text as="p" size="4">
     Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.
    </Text>
   </Card>

   <Card size="2" style={{ maxWidth: 400 }}>

    <FaClock className=' h-16 w-16 text-red-500' />

    <div className="py-8">
     <Text as="p" size="4">
      <Strong>Less Time in any Loans Approval</Strong>
     </Text>
    </div>
    <Text as="p" size="4">
     Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.
    </Text>
   </Card>

  </div>
 );
};

export default Innovate;