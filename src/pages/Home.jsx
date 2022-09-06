import React from "react";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import productData from "../assets/fake-data/products";

import banner from "../assets/images/banner.png";
import HeaderConstant from "../components/HeaderConstantChinese";
import OurAstrolCard from "../components/OurAstrolCard";
import CardSliderProfile from "../components/CardSliderProfile";
import TrustScore from "../components/TrustScore";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <HeaderConstant />

      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to={item.path}>
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>

      <OurAstrolCard />
      <CardSliderProfile />
      <TrustScore />

      {/* 
      hero slider
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        timeOut={2500}
      /> */}
      {/* end hero slider */}
      {/* end policy section */}

      {/* best selling section */}
      {/* <Section>
        <SectionTitle>our top home crystal</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                skll={item.skills}
                lang={item.languages}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section> */}
      {/* end best selling section */}

      {/* new arrival section */}
      {/* <Section>
        <SectionTitle>ASTROTALK REVIEWS FROM OUR CUSTOMERS</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                skll={item.skills}
                lang={item.languages}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section> */}
      {/* end new arrival section */}

      {/* banner */}
      {/* <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section> */}
      {/* end banner */}

      {/* popular product section */}
      {/* <Section>
        <SectionTitle>phổ biến</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(12).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                skll={item.skills}
                lang={item.languages}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section> */}
      {/* end popular product section */}

      {/* Constant header */}
      
    </Helmet>
  );
};

export default Home;
