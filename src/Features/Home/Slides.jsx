
import { Card, CardContent } from "@/components/ui/card";
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel";
import Testimonies from "./Testimonies";
const data = [
 { id: 1, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'Judith Black', position: 'CEO of Workcation', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.' },
 { id: 2, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'Judith Red', position: 'Manager of Workcation', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.' },
 { id: 3, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'Red Black', position: 'Senior Manager of Workcation', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.' },
 { id: 4, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'Judith Black', position: 'CEO of Workcation', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.' },
 { id: 5, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'Judith Black', position: 'CEO of Workcation', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.' }
];
export function Slides() {
 return (
  <Carousel className=" w-3/4 mx-auto">
   <CarouselContent>
    {data.map((testimony) => (
     <CarouselItem key={testimony.id}>
      <div className="p-1">
       <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
         <Testimonies testimony={testimony} />
        </CardContent>
       </Card>
      </div>
     </CarouselItem>
    ))}
   </CarouselContent>
   <CarouselPrevious />
   <CarouselNext />
  </Carousel>
 );
}
