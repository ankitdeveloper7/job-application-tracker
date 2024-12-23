import React from 'react';

function Documents() {

  function upload() {
    alert("Upload the documents");
  }

  return (
    <>
      <section
        id="documents"
        className="h-full w-full pt-5 pb-5 px-[2%] box-border grid justify-items-center justify-center grid-cols-[repeat(auto-fit,_207px)] grid-rows-[min-content] gap-4"
      >
        <nav className="overflow-x-auto flex items-center">
          <div className="text-left transition ease-out duration-200 font-lato m-0 font-semibold text-[#6a4feb] text-[13px] tracking-[-0.1px] overflow-hidden whitespace-nowrap text-ellipsis leading-[26px]">
            All
          </div>

          <button
            className="ml-20 p-2 rounded-lg bg-customColor text-white hover:bg-customHoverColor focus:outline-none"
            onClick={upload}
          >
            <span className="material-symbols-outlined align-bottom">add</span>
            Create
          </button>
        </nav>
      </section>
    </>
  );
}

export default Documents;
