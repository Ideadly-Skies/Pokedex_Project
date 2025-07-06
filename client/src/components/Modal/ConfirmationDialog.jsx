const ConfirmationDialog = ({ ref, action, children }) => {
  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Warning !</h3>
        <div className="py-4">{children}</div>
        <div className="modal-action">
          <form method="dialog" className="flex gap-3">
            <button className="btn btn-error text-white" onClick={action}>
              Confrim
            </button>
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ConfirmationDialog;
