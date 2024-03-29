import { Dialog, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";

const AdminEdit = ({ id, children }) => {
 const { register, handleSubmit } = useForm();
 const onSubmit = data => {
  console.log(data);
 };
 return (
  <div>
   <Dialog.Root>
    <Dialog.Trigger>
     <div>
      {children}
     </div>
    </Dialog.Trigger>

    <Dialog.Content >
     <Dialog.Title>Edit profile</Dialog.Title>
     <Dialog.Description size="2" mb="4">
      {id}
     </Dialog.Description>

     <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="3">
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Amount
        </Text>
        <TextField.Input
         type='number'
         required
         {...register('amount')} id='amount'
         placeholder="Enter amount to deposit"
        />
       </label>
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Bank Name
        </Text>
        <TextField.Input
         type='text'
         required
         {...register('bankName')} id='bankName'
         placeholder="Enter bank name to deposit"
        />
       </label>
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Account Number
        </Text>
        <TextField.Input
         type='number'
         minLength={10}
         required
         {...register('account')} id='account'
         placeholder="Enter amount to deposit"
        />
       </label>
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Sender&apos;s full name
        </Text>
        <TextField.Input
         required
         {...register('name')} id='name'
         placeholder="Enter sender's name"
        />
       </label>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
       <Dialog.Close>
        <Button variant="soft" color="gray" type='reset'>
         Cancel
        </Button>
       </Dialog.Close>

       <Button color='green' type='submit' >
        Deposit
       </Button>


      </Flex>
     </Form>


    </Dialog.Content>
   </Dialog.Root>

  </div>
 );
};

export default AdminEdit;