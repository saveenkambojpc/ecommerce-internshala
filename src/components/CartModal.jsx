import { Button, Modal } from "flowbite-react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useModalState } from "../misc/helper";
import Cart from "./Cart";

const CartModal = () => {
  const { isOpen, open, close } = useModalState();

  return (
    <React.Fragment>
      <button
        className="bg-purple-100 flex items-center px-3 py-2 rounded-lg text-purple-800 font-semibold"
        onClick={open}
      >
        <span className="mx-2">Cart</span>
        <AiOutlineShoppingCart className="text-xl" />
      </button>
      <Modal show={isOpen}>
        <Modal.Header onClick={close}>Shopping Cart</Modal.Header>
        <Modal.Body>
          <Cart />
        </Modal.Body>
        <Modal.Footer>
          <Button color="purple" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CartModal;
