export default function PriceBlock({ time, cost, numPhotos, timeRange, color = "#4EA09D" }) {
    return (
      <div className="inline-block w-[90vw] sm:w-[400px] lg:w-[500px] 2xl:w-[600px] p-4 sm:p-10 text-white garamond sm:h-[300px]">
        <div style={{ backgroundColor: color }} className="text-center p-2 sm:p-5">
          <p className="garamond text-xl sm:text-2xl lg:text-3xl">{time}</p>
        </div>
        <ul style={{ listStyle: 'disc' }} className="pl-10 pt-3 text-lg sm:text-xl lg:text-2xl text-black">
          <li>{`Cost of $${cost}`}</li>
          <li>{`${numPhotos} photos`}</li>
          <li>{`Receive photos within ${timeRange}`}</li>
        </ul>
      </div>
    );
  }

export function PriceBlockSubscription({time, cost, numPhotos}){
    return (
        <div className="inline-block w-[90vw] sm:w-[400px] lg:w-[500px] 2xl:w-[600px] p-4 sm:p-10 text-white garamond sm:h-[300px]">
            <div className="bg-[#FF89A4] text-center p-2 sm:p-5">
                <p className="garamond text-xl sm:text-2xl lg:text-3xl">{`${time}: $${cost}`}</p>
            </div>
            <ul style={{ listStyle: 'disc' }} className="pl-10 pt-3 text-lg sm:text-xl lg:text-2xl text-black">
                <li>A weekly OR bi-weekly 1-hour session</li>
                <li>{`${numPhotos} photos per session`}</li>
                <li>Edited to match branding by request</li>
            </ul>
        </div>
        );
}