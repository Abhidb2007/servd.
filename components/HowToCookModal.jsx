"use client";
import React from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const HowToCookModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-stone-600 hover:text-orange-600">
          How to Cook
        </Button>
      </DialogTrigger>
      <DialogContent>
        <h2>How to Cook</h2>
        <p>Instructions here...</p>
      </DialogContent>
    </Dialog>
  );
};

export default HowToCookModal;