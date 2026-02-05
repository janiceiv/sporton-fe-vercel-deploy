import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";

type TBankInfoModalProps = {
  isOpen: boolean;
  onClose:() => void;
}

const BankInfoModal =({isOpen,onClose}:TBankInfoModalProps)=>{
  return(
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Bank Account">
      <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="bankName">Bank Name</label>
              <input type="text" name="bankName" id="bankName" placeholder="e. g. Mandiri, BCA, BRI" />
            </div>
            <div className="input-group-admin">
              <label htmlFor="accountNumber">Account Number</label>
              <input type="text" name="AccountNumber" id="AccountNumber" placeholder="123123123" />
            </div>
            <div className="input-group-admin">
              <label htmlFor="accountHolder">Account Holder</label>
              <input type="text" name="accountHolder" id="accountHolder" placeholder="Holder Name as registered on the account" />
            </div>
        </div>
        <Button className= "ml-auto mt-3 rounded-lg">Create Bank Account</Button>
      </div>
    </Modal>
  )
}

export default BankInfoModal;