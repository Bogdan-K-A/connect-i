import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { MContainer } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";
import {
  StyledSwiperList,
  StyledSwiperItem,
  StyledTitle,
  StyledText,
  StyledName,
  StyledItemContent,
} from "./Reviews.styled";

import "swiper/css";
import "swiper/css/effect-creative";
import { params } from "./swiperParams";

export const Reviews = () => {
  return (
    <MContainer>
      <motion.div>
        <Box sx={{ display: "flex", alignItem: "center" }}>
          <Title margin="0 auto 30px">Відгуки</Title>
        </Box>
      </motion.div>
      <motion.div>
        <StyledSwiperList {...params}>
          <StyledSwiperItem>
            <StyledItemContent>
              <StyledTitle>Тренування 🔥🔥🔥</StyledTitle>
              <StyledText>
                Під супровід Сергія ноги неслись і кріпатуру не чула 😂 На
                останньому колі на підтюпці вже хотілось перейти на крок 🤪Але
                по закінченню тренування така легкість і заряд енергії, що не
                передать!!!
              </StyledText>
              <p>
                <b>Дякую @baskarabas за тренування! ❤️❤️❤️</b>
              </p>

              <StyledName>
                <p>Олена</p>
              </StyledName>
            </StyledItemContent>
          </StyledSwiperItem>
          <StyledSwiperItem>
            <StyledItemContent>
              <StyledTitle>Не тренування, а одна насолода ☺️</StyledTitle>
              <StyledText>
                Вже відчуваю зміни в організмі. Не тільки фізичні, а й в
                настрої! Класне тренування, тренер супер, прямо те, що я шукала.
                Зняла відео форми, буду чекати на коментарі щодо покращення.
              </StyledText>
              <p>
                <b>Дякую! 💕</b>
              </p>

              <StyledName>
                <p>Дарина</p>
              </StyledName>
            </StyledItemContent>
          </StyledSwiperItem>

          <StyledSwiperItem>
            <StyledItemContent>
              <StyledTitle>Як я кайфую від тренувань!</StyledTitle>
              <StyledText>
                Яка я щаслива що все ж таки не тільки купила цей марафон а і
                виконую кожну тренировку! І навіть трошки сумно що це
                закінчується 🥹 вже хочу іти на другий марафончик))
              </StyledText>
              <p>
                <b>Дякую тренеру!! Та дівчаткам за підтримку 🫶🏻</b>
              </p>

              <StyledName>
                <p>Міла</p>
              </StyledName>
            </StyledItemContent>
          </StyledSwiperItem>

          <StyledSwiperItem>
            <StyledItemContent>
              <StyledTitle>На лєгках 💪😎</StyledTitle>
              <StyledText>
                Якби мені раніше хтось сказав, що так можна бігати, я б не
                повірила 😅 Коли пульс підскокував, трохи збавляла швидкість.
                Взагалі, сподобалося дуже, хоча було страшно. Але розумію, що
                все від голови, бо ноги біжуть і дихання не зупиняється. І хочу
                ще зазначити свій фізичний стан, який значно покращився. І ног
                із сідницями в мене і справді таких не було, навіть з регулярним
                спортзалом.
              </StyledText>
              <p>
                <b>Дякую, Тренере 🤝😊</b>
              </p>

              <StyledName>
                <p>Катерина</p>
              </StyledName>
            </StyledItemContent>
          </StyledSwiperItem>

          <StyledSwiperItem>
            <StyledItemContent>
              <StyledText>
                Всім добрий вечір. Як і радить тренер ділюся фідбеком після
                тренування.
              </StyledText>
              <StyledText>
                Перше що зразу далось взнаки, з аудіосупроводом біжиться по
                іншому/краще/, хоть і воював з плеєрами додатками 10хв. Минулий
                марафон не було змоги слухати і бігти одночасно.
              </StyledText>
              <StyledText>
                Ну і вправи то моя болячка. Першу зі скрипом виконав, далі всьо.
                На жаль не було ані місця ані тех.можливості відзняти щоб
                надіслати.
              </StyledText>

              <StyledName>
                <p>Ярослав</p>
              </StyledName>
            </StyledItemContent>
          </StyledSwiperItem>
        </StyledSwiperList>
      </motion.div>
    </MContainer>
  );
};
