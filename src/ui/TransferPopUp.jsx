import { ExitIcon } from '@radix-ui/react-icons';
import { Button, Dialog, Flex, TextField, Text } from '@radix-ui/themes';
import SpinnerMini from './SpinnerMini';
import { Form } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCreateApi } from '@/Hooks/Create/useCreateApi';
import { useCreate } from '@/Hooks/Create/useCreate';
import { useGetApi } from '@/Hooks/Get/useGetApi';
import { useGet } from '@/Hooks/Get/useGet';
import Spinner from './Spinner';
import { useState } from 'react';
import { formatCurrency } from '@/Hooks/helpers';
import { useEditApi } from '@/Hooks/Edit/useEditApi';
import { useEdit } from '@/Hooks/Edit/useEdit';

const TransferPopUp = ({ className = ' w-full', color = 'red', userId }) => {
 const [name, setName] = useState(null);
 const [valid, setValid] = useState(false);
 let notValid = !valid;
 const { reset, register, handleSubmit, getValues, formState: { errors } } = useForm();
 const { create: fn } = useCreateApi({ key: 'transactions' });
 const { create, isCreating } = useCreate({ fn, key: ['transaction'] });
 const { fetch: fetchFn } = useGetApi({ key: 'accounts' });
 const { fetch: acc, isFetching } = useGet({ key: ['account', userId], fn: fetchFn });
 const acn = acc?.find(ac => ac?.userId === userId);
 const { editFn } = useEditApi({ key: 'accounts', id: acn?.id });
 const { edit, isEditing } = useEdit({ key: ['accounts'], fn: editFn });

 if (isFetching) return <Spinner />;

 const bal = acc?.find(ac => ac?.userId === userId)?.checking;

 const onSubmit = data => {
  if (!data || data === undefined) return;
  const amount = bal - data?.amount;
  create({ ...data, userId, author: 'milan', type: 'transfer', name }, {
   onSuccess: () => {
    edit({ name: acn.name, checking: amount, account: acn.account, admin: acn.admin, email: acn.email, routing: acn.routing, savings: acn.savings, userId });
    setValid(false);
    setName(null);
    reset();
   }
  });
 };
 const onClick = () => {
  const accounts = acc?.find(ac => ac.account === +getValues('account'));
  if (!accounts) return setValid(false);
  if (accounts) {
   setName(accounts?.name);
   setValid(true);
  }
 };
 return (
  <Dialog.Root>
   <Dialog.Trigger>
    <Button color={color} className={className}><ExitIcon />Transfer</Button>
   </Dialog.Trigger>

   <Dialog.Content style={{ maxWidth: 450 }}>
    <Dialog.Title>Transfer</Dialog.Title>
    <Dialog.Description size="2" mb="4">
     Checking Balance: <span className=" font-bold">{formatCurrency({ value: bal, currency: acc?.currency })}</span>
    </Dialog.Description>
    <Form onSubmit={handleSubmit(onSubmit)}>
     <Flex direction="column" gap="3">
      <label>
       <Text as="div" size="2" mb="1" weight="bold">
        Amount
       </Text>
       <TextField.Input
        max={bal}
        type='number'
        required
        {...register('amount', {
         required: 'This field is required',
         max: { value: bal, message: 'Amount should be less than checking balance' }
        })} id='amount'
        placeholder="Enter amount to deposit"
       />
       {errors?.amount?.message && <div className="pt-2">
        <span className=' text-rose-800 bg-rose-200 text-xs py-2 px-4 rounded-full'>{errors?.amount?.message}</span>
       </div>}
      </label>
      <label>
       <Text as="div" size="2" mb="1" weight="bold">
        Account
       </Text>
       <TextField.Input
        type='number'
        required
        minLength={10}
        {...register('account', {
         required: 'This field is required',
         minLength: {
          value: 10,
          message: 'Should be 10 digits'
         }
        })} id='account'
        placeholder="Enter account number/routing number"
       />
       {errors?.account?.message && <div className="pt-2">
        <span className=' text-rose-800 bg-rose-200 text-xs py-2 px-4 rounded-full'>{errors?.account?.message}</span>
       </div>}
      </label>
      <p className=' text-neutral-500 uppercase font-bold'>{name}</p>
      {!notValid && <p className=' text-rose-500 uppercase text-xs font-bold'>No account found</p>}
     </Flex>

     {valid && <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
       <Button variant="soft" color="gray" type='reset'>
        Cancel
       </Button>
      </Dialog.Close>

      <Button color='green' type='submit'>
       {isCreating || isEditing ? <SpinnerMini /> : 'Send'}
      </Button>
     </Flex>}

     {!valid && <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
       <Button variant="soft" color="gray" type='reset'>
        Cancel
       </Button>
      </Dialog.Close>
      <Button color='green' type='button' onClick={handleSubmit(onClick)}>
       {isCreating ? <SpinnerMini /> : 'Next'}
      </Button>
     </Flex>}

    </Form>
   </Dialog.Content>
  </Dialog.Root>

 );
};

export default TransferPopUp;