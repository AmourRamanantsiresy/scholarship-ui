export const scrollTo = (n: number) => {
  window.scrollTo(0, window.innerHeight * n);
};

export const generateScrollCondition = (
  n: number,
  p: number,
  currentPosition: number
) => {
  const positionZero = window.innerHeight * n;
  const positionDB3 = window.innerHeight / 6;
  const notN = currentPosition !== n;
  const pStart = p >= positionZero - positionDB3;
  const pEnd = p <= positionZero + window.innerHeight;

  return notN && pStart && pEnd;
};

export type TUseScroll = [number, (e: number) => void];

export const noUseScroll: (params: TUseScroll) => void = ([
  currentPosition,
  setPosition,
]) => {
  window.addEventListener("scroll", (e) => {
    const position = window.scrollY;
    if (generateScrollCondition(0, position, currentPosition)) {
      setPosition(0);
    } else if (generateScrollCondition(1, position, currentPosition)) {
      setPosition(1);
    } else if (generateScrollCondition(2, position, currentPosition)) {
      setPosition(2);
    } else if (generateScrollCondition(3, position, currentPosition)) {
      setPosition(3);
    } else if (generateScrollCondition(4, position, currentPosition)) {
      setPosition(4);
    }
  });
};
