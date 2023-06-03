export default function PriceBlock({time, cost, numPhotos, timeRange}){
    return (
        <div className="inline-block w-full p-4 sm:p-10 text-white garamond">
            <div className="bg-[#362417] text-center p-2 sm:p-5">
                <p className="yeseva text-xl sm:text-3xl">{time}</p>
            </div>
            <ul style={{ listStyle: 'disc' }} className="pl-10 pt-3 text-lg sm:text-2xl">
                <li>{`Cost of $${cost}`}</li>
                <li>{`${numPhotos} photos`}</li>
                <li>{`Receive photos within ${timeRange}`}</li>
            </ul>
        </div>
    );
}

export function PriceBlockSubscription({time, cost, numPhotos}){
    return (
        <div className="inline-block w-full p-4 sm:p-10 text-white garamond">
            <div className="bg-[#F87666] text-center p-2 sm:p-5">
                <p className="text-xl xs:text-3xl yeseva">{`${time}: $${cost}`}</p>
            </div>
            <ul style={{ listStyle: 'disc' }} className="pl-10 pt-3 text-lg sm:text-2xl">
                <li>A weekly OR bi-weekly 1-hour session</li>
                <li>{`${numPhotos} photos per session`}</li>
                <li>Edited to match branding by request</li>
            </ul>
        </div>
        );
}