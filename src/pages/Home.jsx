import Content from "../ui/Content";
import FlexContainer from "../ui/FlexContainer";
import HorizontalLine from "../ui/HorizontalLine";
import Image from "../ui/Image";
import PhotoContainer from "../ui/PhotoContainer";
import Slider from "../ui/Slider";
import Button from "../ui/Button";
import { useRef } from "react";
import { AnimatePresence, useInView, motion } from "framer-motion";
import Modal from "../ui/Modal2";
import OrderForm from "../features/Order/OrderForm";
import MainText from "../ui/MainText";
import VerticalLine from "../ui/VerticalLine";

function Home() {
  // document.body.addEventListener("keypress", (key) => {
  //   if (key.key === "z") return console.log("yes");
  //   console.log("no");
  // });
  const ref = useRef();
  const isView = useInView(ref, { amount: 0.5 });

  // useEffect(() => {
  //   const main = document.querySelector(".main");
  //   const order = document.querySelector(".order");
  //   function calc() {
  //     const height = main.scrollTop;
  //     const orderHeight = order.clientHeight;
  //     if (height >= orderHeight - 200) setShow(true);
  //     else setShow(false);
  //   }
  //   main.addEventListener("scroll", calc);

  //   return () => {
  //     main.removeEventListener("scroll", calc);
  //   };
  // }, [show]);
  return (
    <div>
      <MainText />
      <motion.div
        initial={{ zIndex: -1000, opacity: 0 }}
        animate={{ zIndex: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <Slider isRun={isView ? "TRUE" : ""} />

        <HorizontalLine
          style={{ opacity: isView ? 1 : 0 }}
          width={"100%"}
          height={2}
          mt={15}
        />

        <FlexContainer
          ref={ref}
          direction="row"
          jc="space-between"
          ai="center"
          className="order"
          pt={80}
          pb={80}
          style={{ minHeight: "550px" }}
        >
          <PhotoContainer>
            <AnimatePresence>
              {isView && (
                <Image
                  src={"Home Images/order.png"}
                  width="55%"
                  variants="move"
                />
              )}
            </AnimatePresence>
          </PhotoContainer>
          <VerticalLine
            className="line"
            width="2px"
            height="75%"
            style={{ opacity: isView ? 1 : 0 }}
          />
          <FlexContainer
            style={{ opacity: isView ? 1 : 0 }}
            ai="center"
            fb="50%"
            gap={50}
          >
            <AnimatePresence>
              <Content fs={25} width={460} as={"p"} key={1}>
                يمكنــــك الأن اســتـخـــــدام خــدمــتــنـــــــا و تسجيــــــل
                بياناتــــــك
              </Content>
              <Modal key={2}>
                <Modal.Open id="Form">
                  <Button fs={22} width="fit-content">
                    تسجيــــل الطلب
                  </Button>
                </Modal.Open>

                <Modal.Window id="Form">
                  <OrderForm />
                </Modal.Window>
              </Modal>
            </AnimatePresence>
          </FlexContainer>
        </FlexContainer>
      </motion.div>
    </div>
  );
}

export default Home;
