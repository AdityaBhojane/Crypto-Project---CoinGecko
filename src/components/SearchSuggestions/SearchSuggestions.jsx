import { Suspense } from "react";

function SearchSuggestions({ coinNames, showSuggestion,showOutput,setUserInput }) {
  return (
    <>
      <Suspense>
        <ul
          className={`menu bg-[#2b2b2b] rounded-box w-56 absolute right-20 top-12 z-10 ${
            showSuggestion ? "hidden" : "block"
          }`}
        >
          {showOutput ? (
            coinNames.map((item, index) => {
              return (
                <li key={index} onClick={()=>setUserInput(item.name)}>
                  <a>{item.name}</a>
                </li>
              );
            })
          ) : (
            <li>
              <a>No Coin available</a>
            </li>
          )}
        </ul>
      </Suspense>
    </>
  );
}

export default SearchSuggestions;
