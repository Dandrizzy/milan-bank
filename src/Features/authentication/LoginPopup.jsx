import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import { useLogin } from "./useLogin";
import SpinnerMini from '@/ui/SpinnerMini';

function LoginPopup() {


 const { register, handleSubmit, reset } = useForm();
 const { login, isLoading } = useLogin({ route: '/dashboard' });

 const onSubmit = (data) => {
  console.log(data);
  if (!data) return;
  login(
   data,
   {
    onSuccess: () => {
     reset();
    },
   }
  );
 };

 return (
  <>
   <Dialog.Root>
    <Dialog.Trigger>
     <Button variant='ghost'>

      <span className="text-sm font-semibold leading-6 text-gray-900">
       Login <span aria-hidden="true">&rarr;</span>
      </span>

     </Button>
    </Dialog.Trigger>

    <Dialog.Content style={{ maxWidth: 450 }}>
     <Dialog.Title>Edit profile</Dialog.Title>
     <Dialog.Description size="2" mb="4">
      Make changes to your profile.
     </Dialog.Description>

     <Form >
      <Flex direction="column" gap="3">
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Email
        </Text>
        <TextField.Input
         {...register("email", {
          required: "This field is required",
          pattern: {
           value: /\S+@\S+\.\S+/,
           message: "Please provide a valid email address",
          },
         })}
         required
         id='email'
         type='text'
         placeholder="example@email.com"
        />
       </label>

       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Password
        </Text>
        <TextField.Input
         required
         {...register("password", {
          required: "This field is required",
          minLength: {
           value: 8,
           message: "Password needs a minimum of 8 characters",
          },
         })}
         id='password'
         type='password'
         placeholder="Enter your password"
        />
       </label>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
       <Dialog.Close>
        <Button variant="soft" color="gray">
         Cancel
        </Button>
       </Dialog.Close>

       <Button onClick={handleSubmit(onSubmit)} color='green'>{isLoading ? <SpinnerMini /> : 'Log in'}</Button>

      </Flex>
     </Form>
    </Dialog.Content>
   </Dialog.Root>

  </>
 );
}

export default LoginPopup;
