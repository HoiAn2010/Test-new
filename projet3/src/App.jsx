import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
// import MuiTypography from './components/MuiTypography';
// import MuiAutoComplete from './components/MuiAutoComplete';
// import MuiButton from './components/MuiButton';
// import MuiSelectCheckmarks from './components/MuiSelectCheckmarks';
import MuiCard from "./components/MuiCard";
import CountryCard from "./components/CountryCard";
import MuiSelectDefault from "./components/MuiSelectDefault";
// import MuiScrollTop from "./components/MuiScrollTop";
// import ButtonsSkills from "./components/ButtonsSkills";
// import ButtonMail from "./components/ButtonMail";
import CardGrid from "./components/CardGrid";
import { Stack } from "@mui/material";



function App() {
  const [country, setCountry] = useState([]);
  const [selectRegions, setSelectRegions] = useState("");

    const getCountries = () => {
      axios.get("https://restcountries.com/v3.1/all").then((response) => {
        setCountry(response.data);
      });
    };

    useEffect(() => {
      getCountries();
    }, []);

  const handleSelectRegionsChange = (event) => {
    setSelectRegions(event.target.value);
  };
  return (
    <div className="App">
      {/*<MuiTypography />
       <MuiSelectCheckmarks />
       <MuiSelectDefault />
      // <MuiCard />
      <MuiScrollTop /> 
      <ButtonsSkills /> 
      <ButtonMail /> */}
      <CardGrid />
      <br />
      <Stack direction="column">
        <MuiSelectDefault handleRegionChange={handleSelectRegionsChange} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="flex-start"
          alignItems="flex-start"
          mt="2"
          sx={{ flexWrap: "wrap", gap: 2 }}
        >
          {country
            .filter((countryFilter) => {
              return selectRegions
                ? countryFilter.region === selectRegions
                : true;
            })
            .map((countryMap) => {
              return (
                <CountryCard
                  name={countryMap?.name?.common}
                  flag={countryMap?.flags?.png}
                  capital={countryMap?.capital?.[0]}
                  region={countryMap?.region}
                />
              );
            })}
          ;
          <MuiCard />
          <MuiCard />
          <MuiCard />
          <MuiCard />
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
