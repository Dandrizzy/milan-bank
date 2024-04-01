import { formatCurrency, formatDate } from "@/Hooks/helpers";
import { Table } from "@radix-ui/themes";

const TransactionList = ({ userTransactions, acc }) => {
 return (

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
       <span className=" text-xs text-neutral-500">{formatDate(t.created_at)}, Checking</span>
      </div>
     </Table.RowHeaderCell>
     <Table.Cell className={t.type === 'deposit' ? ' text-right text-green-400' : ' text-right text-red-400'}>{t?.type === 'deposit' ? '+' : '-'}{formatCurrency({ value: t.amount, currency: acc.currency })}</Table.Cell>
    </Table.Row>)}
   </Table.Body>
  </Table.Root>

 );
};

export default TransactionList;