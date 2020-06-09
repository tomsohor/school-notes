import React from "react";
import { Button } from "@material-ui/core";

const Welcome = () => {
  return (
    <div>
      <Button variant="contained" color="secondary" href="/login">
        login
      </Button>
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        href="/signup"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Welcome;
