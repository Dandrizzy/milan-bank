import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { HamburgerMenuIcon, Cross1Icon, } from '@radix-ui/react-icons';
import { formatCurrency } from '@/Hooks/helpers';
import { Avatar, Table } from '@radix-ui/themes';
import TransferPopUp from '@/ui/TransferPopUp';
import DepositPopUp from '@/ui/DepositPopup';
import { useGetApi } from '@/Hooks/Get/useGetApi';
import { useGet } from '@/Hooks/Get/useGet';
import Spinner from '@/ui/Spinner';
import { useUser } from '../authentication/useUser';

const navigation = [
  { name: 'Products', nav: '#' },
  { name: 'Investments', nav: '#' },
  { name: 'Marketplace', nav: '#' },
  { name: 'Company', nav: '#' },
];

export default function UserHero() {
  const { fetch: fn } = useGetApi({ key: 'transactions' });
  const { fetch: transactions = [], isFetching: isFetchingTransaction } = useGet({ key: ['transaction'], fn });
  const { user } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { fetch: fetchFn } = useGetApi({ key: 'accounts' });
  const { fetch: acc, isFetching } = useGet({ key: ['account', user?.id], fn: fetchFn });

  if (isFetching || isFetchingTransaction) return <Spinner />;

  const currentUser = acc?.find(ac => ac?.userId === user?.id);
  const userTransactions = transactions.filter(t => t.userId === user?.id);
  console.log(userTransactions);


  return (
    <div className="bg-white pt-8">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/"
                alt="Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <span key={item.name} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </span>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end" >
            <span className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </span>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <Cross1Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="max-w-2xl sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="grid grid-cols-2 gap-2 text-neutral-100 ">
            <div className=" text-neutral-700">Hi, <span className=" font-bold">{currentUser?.name}</span></div>
            <div className=" text-right">
              <Avatar fallback={currentUser?.name.at(0)} radius='full' />
            </div>
            <div className=" text-xs sm:text-base text-slate-600">Account</div>
            <div className=""></div>
            <div className="bg-red-600 p-3 flex items-center rounded-lg justify-between ">
              <div className="gap-4 grid">
                <p className=' font-semibold text-sm'>Checking</p>
                <p className='text-xs'>xxx1245</p>
              </div>
              <div className="gap-4 grid">
                <p className=' font-semibold text-sm'>{formatCurrency({ value: currentUser?.checking, currency: acc?.currency })}</p>
                <p className='text-xs text-right'>Available</p>
              </div>
            </div>
            <div className="bg-red-600 p-3 rounded-lg  flex items-center justify-between">
              <div className="gap-4 grid">
                <p className=' font-semibold text-sm'>Saving</p>
                <p className='text-xs '>xxx1245</p>
              </div>
              <div className="gap-4 grid">
                <p className=' font-semibold text-sm'>{formatCurrency({ value: currentUser?.savings, currency: acc?.currency })}</p>
                <p className='text-xs text-right'>Available</p>
              </div>
            </div>
            <div className="">
              <TransferPopUp userId={user?.id} />
            </div>
            <div className="">
              <DepositPopUp />
            </div>
            <div className=" col-span-2 mt-4">
              <Table.Root variant='surface'>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>Transactions</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell >
                    </Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {userTransactions.reverse().map(t => <Table.Row key={t.id}>
                    <Table.RowHeaderCell>
                      <div className=" grid gap-1">
                        <p className="">{t.name}</p>
                        <span className=" text-xs text-neutral-500">25 Nov, Checking</span>
                      </div>
                    </Table.RowHeaderCell>
                    <Table.Cell className={t.type === 'deposit' ? ' text-right text-green-400' : ' text-right text-red-400'}>{t?.type === 'deposit' ? '+' : '-'}{formatCurrency({ value: t.amount, currency: acc.currency })}</Table.Cell>
                  </Table.Row>)}
                </Table.Body>
              </Table.Root>

            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
