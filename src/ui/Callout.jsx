import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";

const CalloutCard = () => {
 return (
  <Callout.Root color="red">
   <Callout.Icon>
    <ExclamationTriangleIcon />
   </Callout.Icon>
   <Callout.Text>
    Your Account has been restricted please contact the bank.
   </Callout.Text>
  </Callout.Root>

 );
};

export default CalloutCard;