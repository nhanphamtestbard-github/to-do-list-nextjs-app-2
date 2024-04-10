"use client";

import Modal from "@/app/components/Modal";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add New Task <FaPlus className="ml-2" size={18} />
      </button>

      <Modal />
    </div>
  );
};

export default AddTask;
