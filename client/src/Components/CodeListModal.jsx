export function CodeListModal({ isOpen, onClose, codes, onSelect }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto z-50"
      style={{ isolation: "isolate" }}
    >
      <div className="flex items-center justify-center text-[#ECDFCC] min-h-screen p-4">
        <div
          className="bg-[#161e18] rounded-lg p-6 w-full max-w-2xl relative"
          style={{ maxHeight: "80vh", overflowY: "auto" }}
        >
          <h2 className="bg-[#161e18] text-2xl font-bold mb-4 sticky top-0 py-2">
            Your Saved Code
          </h2>
          <div className="grid gap-4">
            {codes.length === 0 ? (
              <div className="text-gray-300">No code saved</div>
            ) : (
              codes.map((code) => (
                <div
                  key={code._id}
                  className="border border-[#ECDFCC] p-4 rounded-lg hover:bg-[#C4DAD2] hover:text-black cursor-pointer transition duration-150"
                  onClick={() => onSelect(code)}
                >
                  <h3 className="font-bold">{code.name}</h3>
                  <p className="text-sm text-[#ECDFCC] hover:text-black">
                    Language: {code.language}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="sticky bottom-0 bg-[#161e18] pt-4">
            <button
              onClick={onClose}
              className="w-full border border-[#ECDFCC] bg-[#161e18] py-2 px-4 rounded hover:bg-[#C4DAD2] hover:text-black transition duration-150"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
