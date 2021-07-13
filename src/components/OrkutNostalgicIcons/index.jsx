import * as Styled from "./styles";

const infoIcons = [
  { name: "Recados", slug: "recados", icon: "book" },
  { name: "Fotos", slug: "fotos", icon: "camera" },
  { name: "Videos", slug: "videos", icon: "video-camera" },
  { name: "Fãs", slug: "fas", icon: "star" },
  { name: "Mensagens", slug: "mensagens", icon: "email" },
];

const statusIcons = [
  { name: "Confiável", slug: "confiavel", icon: "smile" },
  { name: "Legal", slug: "legal", icon: "cool" },
  { name: "Sexy", slug: "sexy", icon: "heart" },
];

export const OrkutNostalgicIcons = (props) => {
  return (
    <Styled.List>
      {infoIcons.map(({ name, slug, icon }) => (
        <Styled.Item key={`orkut__icon_set__${slug}`}>
          <Styled.ItemTitle style={{ gridArea: "title" }}>
            {name}
          </Styled.ItemTitle>
          <Styled.ItemNumber style={{ gridArea: "number" }}>
            <img
              key={`orkut__icon_set__${slug}_img`}
              className="OrkutNostalgicIconSet__iconSample"
              src={`https://alurakut.vercel.app/icons/${icon}.svg`}
            />
            {props[slug] ? props[slug] : 0}
          </Styled.ItemNumber>
        </Styled.Item>
      ))}
      {statusIcons.map(({ name, slug, icon }) => {
        const total = props[slug] ? props[slug] : 2;
        return (
          <Styled.Item key={`orkut__icon_set__${slug}`}>
            <Styled.ItemTitle>{name}</Styled.ItemTitle>
            <Styled.ItemNumber
              className="OrkutNostalgicIconSet__iconComplex"
              style={{ gridArea: "number" }}
            >
              {[0, 1, 2].map((_, index) => {
                const isHeartActive = index <= total - 1;
                return (
                  <img
                    key={`orkut__icon_set__${slug}_img_${index}`}
                    src={`https://alurakut.vercel.app/icons/${icon}.svg`}
                    style={{
                      marginRight: "2px",
                      opacity: isHeartActive ? 1 : "0.5",
                    }}
                  />
                );
              })}
            </Styled.ItemNumber>
          </Styled.Item>
        );
      })}
    </Styled.List>
  );
};
