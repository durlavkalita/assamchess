import tournament from "/assets/featured_tournament.jpeg";

export default function FeaturedTournament() {
  return (
    <div className="relative pt-32 pb-16 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
      ></div>
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 items-center">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <p className="text-purple-500 text-lg font-bold">
                  Featured Tournament
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  7th Kurukshetra Open Fide Rating Chess Tournament
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Second seeded Khumukcham Sanjoy Singh scored an unbeaten
                  8.5/10 to win 7th Kurukshetra Rating Open 2022. Three players
                  - Soram Rahul Singh, Bhogen R K Singh and the top seed Y
                  Dhanabir Singh scored 8/10 each. They were placed second to
                  fourth respectively according to tie-breaks.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:px-8 md:px-16 sm:py-4">
            <img
              src={tournament}
              alt="Tournament Image"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
