import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import router from "next/router";
import Typography from "./Typography";
import { format } from "date-fns";
import { useTheme } from "../context/themeContext";

const Post = ({ slug, title, subtitle, created_at, categories, image }) => {
  const { theme } = useTheme();

  return (
    <Wrapper>
      <Link href={`${router.route}/${slug}`}>
        <a>
          <Inner>
            <ImageWrapper>
              <img src={image} alt={title} />
            </ImageWrapper>
            <ContentWrapper className="card-shadow" activeTheme={theme}>
              <CategoriesWrapper>
                {categories.map((category) => (
                  <Tag
                    key={category}
                    fontSize={15}
                    color="gray"
                    fontWeight={500}
                    activeTheme={theme}
                  >
                    {category}
                  </Tag>
                ))}
              </CategoriesWrapper>
              <Typography
                tag="h2"
                fontSize={22.4}
                color="black"
                fontWeight={700}
                lineHeight={1.2}
              >
                {title}
              </Typography>
              <Typography
                tag="h2"
                fontSize={12}
                color="gray"
                fontWeight={400}
                lineHeight={1.2}
              >
                {format(new Date(created_at), "MMM do, yyyy")}
              </Typography>

              <Typography
                tag="p"
                fontSize={15}
                color="gray"
                fontWeight={400}
                lineHeight={1.2}
                textAlign="justify"
              >
                {subtitle}
              </Typography>
            </ContentWrapper>
          </Inner>
        </a>
      </Link>
    </Wrapper>
  );
};

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
};

const Wrapper = styled.article`
  a {
    display: block;

    &:hover {
      text-decoration: none;

      main {
        transform: scale(1.03);
      }
    }
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-width: 100%;
    display: block;
    width: 100%;
    border-radius: 0.5rem;
    height: 200px;
    object-fit: cover;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const ContentWrapper = styled.main`
  padding: 15px;
  border-radius: 0.5rem;
  width: 90%;
  margin: 0 auto;
  z-index: 10;
  position: relative;
  transition: all 200ms ease;
  margin-top: -2.5rem;
  background-color: ${(props) =>
    props.activeTheme === "light"
      ? props.theme.colors.white
      : props.theme.colors.darkLightBackground};

  h2 {
    margin: 0;
    margin-top: 0.5rem;
  }
`;

const CategoriesWrapper = styled.div`
  display: flex;

  p {
    margin: 0;
    margin-right: 10px;
  }
`;

const Tag = styled(Typography)`
  background-color: ${(props) =>
    props.activeTheme === "light" ? "#77777717" : "#070919"};
  padding: 0.5rem 0.8rem;
  border-radius: 20px;
`;

export default Post;
