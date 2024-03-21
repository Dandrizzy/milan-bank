import { Box, Card, Flex, Text } from "@radix-ui/themes";
import { FaCheck, FaDollarSign } from "react-icons/fa6";
const About = () => {
 return (
  <div className=" p-4 grid lg:grid-cols-2">
   <div className="">
    <img src="/bank.jpg" alt="bank" className=" mx-auto" />
   </div>
   <div className="">
    <div className="font-bold p-8 text-center ">
     <p>⭐⭐⭐⭐⭐</p>
     <p>5 Star Rating Bank</p>
    </div>
    <div className="font-bold text-red-50 bg-red-600 p-8 text-center ">
     <p className=" text-6xl  ">40</p>
     <p>Years of Experience</p>
    </div>
    <div className="">
     <p className="py-5 font-bold text-red-600">About US</p>
     <p className=" pb-5 text-2xl font-bold">Financial Guidance for Every Stage of Life.</p>
     <p className="pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>
     <div className=" flex gap-8 flex-col">
      <Card variant="ghost">
       <Flex gap="3" align="center">
        <FaDollarSign className=" h-14 w-20 bg-red-200 rounded-full text-red-500 p-3" />
        <Box>
         <Text as="div" size="2" weight="bold">
          Solution Focused
         </Text>
         <Text as="div" size="2" color="gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt feugiat
         </Text>
        </Box>
       </Flex>
      </Card>
      <Card variant="ghost">
       <Flex gap="3" align="center">
        <FaCheck className=" h-14 w-20 bg-red-200 rounded-full text-red-500 p-3" />
        <Box>
         <Text as="div" size="2" weight="bold">
          99.99% Success
         </Text>
         <Text as="div" size="2" color="gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt feugiat
         </Text>
        </Box>
       </Flex>
      </Card>

     </div>
    </div>
   </div>
  </div>
 );
};

export default About;