import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Container, ScrollIcon } from "./ScrollArrowStyles";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(function mount() {
    function onScroll() {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <Container>
      {showScroll && (
        <ScrollIcon onClick={scrollToTop}>
          <FaArrowCircleUp size="4em" />
        </ScrollIcon>
      )}
    </Container>
  );
};

export default ScrollArrow;
