import Link from 'next/link'
import { BsWallet2 } from 'react-icons/bs'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Home() {
  const activity = [
    {
      title: 'Hit your savings goal',
      amount: '$500',
      desc: 'received',
    },
    {
      title: 'Broke your savings goal',
      amount: '$300',
      desc: 'sent',
    },
    {
      title: 'Hit your savings goal',
      amount: '$500',
      desc: 'received',
    },
    {
      title: 'Hit your savings goal',
      amount: '$500',
      desc: 'received',
    },
    {
      title: 'Hit your savings goal',
      amount: '$1500',
      desc: 'received',
    },
    {
      title: 'Broke your savings goal',
      amount: '$500',
      desc: 'sent',
    },
    {
      title: 'Hit your savings goal',
      amount: '$500',
      desc: 'received',
    },
  ]
  return (
    <div className=" h-auto">
      <main className="w-full">
        <section className="bg-[#222] text-[#fafaff] p-10">
          <h1 className="text-center text-3xl font-bold mb-4">
            0x<span className="bg-gray-700 w-10 h-10 p-1">Vest</span>
          </h1>
          <h2 className="text-center font-bold text-xl underline">Dashboard</h2>
          <div className="flex justify-between">
            <div className="w-1/3 flex justify-between">
              {' '}
              <p>
                Wallet Balance: <span className="text-[10px] mr-1"></span>
              </p>
              <p>Address: </p>
            </div>

            <Link href={'/'}>
              <a className="bg-[#fafaff] text-[#222] w-30 h-10 rounded-md px-8 pt-2 pb-2">
                Disconnect
              </a>
            </Link>
          </div>
          <div>
            <p>Projected Earnings</p>
            <div className="w-1/3 flex justify-between items-center mt-4">
              <div className="bg-gray-700 h-20 w-32 rounded-md shadow-inner"></div>
              <div className="bg-gray-700 h-20 w-32 rounded-md shadow-inner"></div>
              <div className="bg-gray-700 h-20 w-32 rounded-md shadow-inner"></div>
            </div>
          </div>
        </section>
        <section className="bg-[#fafaff] text-[#222] px-10 py-3">
          <h2 className="text-lg font-semibold">Your Activity</h2>
          <div>
            <div className="h-80 overflow-y-scroll mt-3 flex flex-col">
              {activity.map((saving, index) => (
                <div
                  key={index}
                  className="flex w-96 bg-white shadow-md justify-between mt-4 h-20 items-center py-10 px-2 rounded-md"
                >
                  <div
                    className={`text-[40px] ${
                      saving.desc === 'received'
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`}
                  >
                    <BsWallet2 />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{saving.title}</p>
                    <p className="capitalize text-[10px]">
                      {saving.desc} from walletAddress{' '}
                    </p>
                  </div>

                  <p
                    className={`text-[20px] font-semibold ${
                      saving.desc === 'received'
                        ? 'text-green-700'
                        : 'text-red-700'
                    }`}
                  >
                    {saving.desc !== 'received' && '-'}
                    {saving.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
