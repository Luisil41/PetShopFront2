import React, { useEffect, useState } from "react";
import { deleteShelter, profileShelter } from "../../../api/shelter.api";
import { Button } from "../../shared/Button/Button";
import { Forms } from "../../shared/Forms/Forms";
import { Logout } from "../../shared/Logout/Logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { getAllPets } from "../../../api/pet.api";
import { PetCard } from "../../shared/PetCard/PetCard";

// esto no sirve import PetCard from "../../shared/PetCard/PetCard";
import "./ShelterProfile.scss";

export const ShelterProfile = ({ id }) => {
  const [shelter, setShelter] = useState({});

  const getShelter = async () => {
    const shelterFetch = await profileShelter(id);
    setShelter(shelterFetch);
  };
  const url =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRUYGBgaGRwZHBoZGhgcGRkYHBgZHBgYGhocIS4lHB4rHxkYJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKQBMgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYHAwj/xAA4EAACAgAFAgQEBQQCAgIDAAABAgARAwQSITEFQQYiUWETcYGRMlKhscEHFELw0eFykqLCI2KC/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAQEBAQEAAgMBAAAAAAAAARECITESA2EiQVEE/9oADAMBAAIRAxEAPwDktxREiiSFuGqLUAIBcIERQICQhpi1AaTFEUrCoCRagojisBkS46ooWA2KsUrHIkBhiVPQiMIgIYaoFYAQFuJAwEAuEQwgBjSI8CFQG6YkfGkQGmEdUKgNhUcBAwG6YCLEMAMQRSIkBYsbFJgLUItwgIBFhACA4RRCtouFR4gGmKEj6Nz00wPHTFCT1KRib36evr8oDSkbpnvoMZpgMUR5jaiwFCR+mNBjwICaYaZ6Kk9cHKu/4EZv/FSf2gRGWMIk/FyrJ+JWX/yBH7zxOHAilYmmSdMa6QI5ESo9hCoDCIVFIiGAQiGKBAKiEQgTAUCEbcLgLCNi1AKikRAYEwGmNi3FgIIVHRDASEIQHCeiCMEWB7JPXByDOD8NSXXsoJJHbYCeSGanwnm1wtTuEX0bhz7We1iU6uTVuZtwnTcngph3nMu4e/LTkahW+pa/Yy8yuYyBYD+zY+WxbliSPQTLeJuu/FxFIFH8O26gi7APflT9pE6L1Nkx0JUtoNAKDe9gChzZKj3uZ2dWbrWfncw7O4RxMZmbBODhrygvTt2s7meOIwvYD6cTp69Rws7lmVVRMVlohl2v6ixOd57o+NgpqdGADFCQDpBHG42GxEtx1tyo74ybFeRBVgI/VNmLxdI0LPRjFQSA0LLvwz0B825UMERBbuew9AO7Hf7SrqdK8N4a4OXwVc6S4LsOD5za3/8Azp+5lOusi3PO165Dw7lkKomEHPd387H3o7L9BNtkcggWkAAG20wmH47y2HinC+C7mmLOpUaAqlmrURZVQTQ3PG52m08J5xMTB1o+tbIs83z+1TPb/trk/wBJz5FGsOFI9GAr9ZmureBMq5JCFCf8sM6f/j+E/aajM4exYnYDeZ7O+NcpgEYTs5IALMqllQM1KXYbKLIETr/hedc88UeCcTKJ8RX+Jh3uwUqVB4JFn7zJOk+hs/mf/wAYdQHQ1qXYgo2xPuOD9TONeLeiNlsZqQjCY2jUdNHfTfFjfb0Evz3txn1zk1mThxhWTGTaRiu80UeJEYRJLpPLTA8yIk9CsQrA82EIpEAICVCo6oVAQiNj6hpgeZiGepWNZYHmYRagBALgYVACAtQiwgCGPQTzUz0WBe9A6Q2Kb02OB8/5nt1jpuJgOCUJA2/BqUj14k7wXnwj27AIOSSL+QHP8ToGcGBmUGkA7WNQ7cA1seZh1b+m3Oflx7qpGLpIWnZvNX+WwFgdjQ39Z75PFxMFsVDgK4xAoIdSdhuG9aJ/Ue01PUvDLPioLKqp5I1AD0Gmvt29ZddK8GjBxFJxtV99BDjt32J9zJvUxM59Zrw3ksRswuIVZQFoak0XsAAO1VsPlOm4eRrCcOoJYaqIBA7cH2riXOX6XgooOhbA2Y7n/i5F6pmVRHxGsKiMzEflVSSR9BM8v61fZmOE9XoYjiqpiKAoDfiu0gES/wDE74T4mvCfWrcN5ftY9Pff1lAZ1T45r9MKx6RKj1WoQv8Awn05MbHQPuNaDT2JY9/baajxK5Z2aq8xUDsAvFTLeD8crmsOuNQY+wQFr/Q/eXOP1BcTLpik7tu3szHcGY9brbnMSMt0LJZrz6Ww8UbMqmhqr8QHvd2JtvDOVTAwRhqfIhr32UCz9pjejqAwYDzNS32/33mwTThqWZ1Clr5Hp+8x6taySr+1dWU7hgQa+VbTnXUf6f68QscVQgJqwbKFgwVqPmFjg95sen9Sw3OhXF9t+ZYPh6qvbSQY5tL4jdJyfw0CCyqgKNW50hQN5VeNEUZLHDqNIS1PbVflr0IYDb3mkwMRdRX0G8y/iYNjo+VBA+ImtCbrUrqQDL5JZWft1xrVYng43k3PZV8J2R1Kupoj+R6j3kUrOlg82E89M8cwjhtQN87ey1e3f/uScFgyhh3/ANqJU2Y89MaySUFkTHxNyF5HJPA9ovhJppWLpjkNgH1FxwEIM0xAssul9JxcyxXCXUQLYkgKoPFk+v8AvBiZTpWLiYvwETzgsCCQNOnZrPoDI2Jyq2oVJOcyj4TsjrpdTRG22wI45BBBv3kdjJQSohEuOrdI+EA6MWQje6tTdE7crfftYHpdOxkSy/E2WfTCI2OIgiFiFUEkmgByT6CSgyOAlh1LouLl1RsTTT3QBJKkUabYb0e1jYyuuRLvxNmfTqhEuElBqyZ01FdjqOyi9pABlh4fW3cXW3t6+8pfi3P1e9PdEeio0nvW4+U2PR8JUckkBDRDEkLdUNR9B6TF5dN975nQOk5hMQBFAscjSCB9Tx+/843W0a7+x8iAH8Vlmr/1odrMk5jDo6aFjj1raiPWROk4wDUzagx29BpBFD9ZYZxw1aRZVz7eULwD62R+smZZqLsry3XZzse/oZWeIGQZbGVgSHw3QUPzIV+28sXdWFi/r/vM5t/ULxEUIwEYg/5DajfajxHM2l8jmDn4TUp1KaNfTmv9ueyZixek/TcR7ZXWV33AArkiv4gNKuFPuNr4+X0E21lhpxdrCmp4Ymb1bA0PX95MxAXJVLoVY7bgH/mRMDCJvUOBQFe97Rpiyyea03oNEqV9wp5r022+s98vnyg+Gd0Y/wCiUGKSN17SbgYgcAn6+0izYS5Wv6DnyrtR3UgqfY/785X5zxGxx3bFBYBytdkU1VDsNibkD45RdS/47mu/r+lfaOZ8LGslyjj/ACom/YgDff8AeU/MraWz4vsfq+CpUIrI5bysNqqjersbnU8HqDtllxQvnbDQkerED7bmch8P5VCU+Jiq6CyUXbfuGvcjnbb7bTrPS8UugIFJuADtuDX22lPziervqViZlgqgAAsDqPezzQkh8qmIFLL+BSAeD2rcccSI+N5gqi+1j19JcKmhKPJ/mTPVLXPvG/SRi4TOB58OyD3IG7L9RvOXlZ3frODps9jz8x/1OCdXJTEfDS9nYfJQxA/QTXmqdQvxBTAEXdWQrVsOxBoe49PaeOXy+m2bEAUmztV7b0PtxI2TzChwG2Q0CQN6sbzQeI+mYWGEdcXUrYvkU2SMKkosSBTWHsWRxVVu3KnNisxkbT5XQn2u67fIyTgthjLOtLq2vY6tRFgarIK7VwORJ2U6AmYbEZHAKFCEDIrMrFAWUsQpIUu1E/4gd5VdV6eMJ3RXDoG8jj/Kjz7j34PIkfrbhmeoyithFIjcF7G8mZHIvjPpQe5NbKPU/wDE01m6L/TnKj+1Ld3xiT8lAX7bfrIvgDIF8bM5hvxF2RfmXLOb/wDQfeaXwV08YeVKLrbztVgWLAs7drupO8O9NXATEVdS+csusbsXJP1BJ7dhOa7tn/XR5k/pyXx3jB89i0PwaMP5lUUE/ex9Jnmml8aeGcXJOGxX+IcQs5xAmlNbFmZRbEs3c7DnvMxdzo5kkkYW7ddE6WEzOSQAgOoKvqqtVVdb2DzVd/pMxj+HiL0srUVumAIBscEnbVtz7cyb4VwwbTWLP5nKIGKmlDBTRJrn1vaXX9m2GXGJhBGCKpAfUr4eHinS41WwPnU7neuBW/Pestxtmyax+S8Pu66mZVW/VfQ6eTtdH6AzWeDPClYmt6bTQ23PyrsPobks9NUYeCUT4hGJ8RcJWVdgqYfxXIBLadQOkC6UyZlmfLnQbUlGDDWGXXZ2BXj8IYWq7du0i/yWpnMlZP8AqXmAcwuErWUBZ64DNppfmFUf+0xtyb1l2bMYzOAHOIxNcWWPHtVSAZ0c/GPV3qluESoSyrzBnvgYuk2JHuAaQNNkMcuQCaB25r5C5pehO6PpT8Ju6I5vv3/SY7p+KhUavqPUiXuS6zoXRpG/4WH7biY9eN+fXRemZrzhCbqip7GrJ+uxmhzLk0B+bUpHvMX0rOF9LONPlBsVsxr+CR9ZaZPqelU17gEq3zZSRXyqvrInwu6n9Tz64WC2I+40kkD2H6Tg+fzD5h3xmJJ1X60tnSu3psJufHHiBGwXwkJ3NexF7/Ljj2mByGIVfSdgwrfgektxPNV6q2yOKiNh/HUkBg3nDqrre66hxcOvZfBTHwmwQ9MWcggfnJUKFZgaUqtg76bocSJmX1UjID97/Rh+wkxcwisugboupdVsAyhhooeoJ72Od5fPdV/pL8O4GWJxHxVxHcYoKouyth6SSp866SSynUbA08SHh5YomIWKgFiQAQ1A8AmSf7hCTuoB1M6i1IsbADc3fJ9pX4+Y1LYGhKog/wCVcfX3kZ7qyqzK0duDxJHTMIsfawf9+08XUlA1d/8Aami6JlQQR3Ak6rnpRkDYobMKA9SdqmnwPDCACwNXJPqZCw8I6flvt2llg58f5vRoUeA3uD/Eztdn/nnN2V5dM6KiOb/MSPvNzgYwXAUd/MPegxAmLwM+cU0nmbUeO1GrNcCbPp2WUhRzQ5PfuTK9VP8ANOZJE7o2U3DnjsDLPFbU3sJ5q+kUIiiTzHL1SZnADjfcTinjXwbi4b4mPhHVh6izDfUncnb8S977frO3s4AlbjIAHJI35/4l5cUfOmDkAwFPZvelsX2tgaH1Ik/+wxAyIFxMQCjoAs0CDtpLaZdYjplc3iqEDqG3VjQTDYBwEFUCPbihyT5dX4Uy2DjkZjCS9LMhGICWvhjd7kg1ZlrSMSmAVDaUCklSUfVdgAVsOb34295AxmJfSx35O5Nbbjcf8TsniTC1YLg4QpVsFj5VA+fYek5C6ABiKP7KL2o8hTyPl7REqzI4et1S9mYrfsD7+xnaOidJwMtli5qtJI99tzORdNpmQhQtk1Vk7tV7zq3U1dsli6N6TQg5INVddzZJ+ki1EjedBy6pgLp4I1bdyeTPfMLq03VBwfcelSP0FCuWwlv8KIp+ii5W9VLjOZXTfwyX1gatzp8n4ffffbb5StpJ6sOqZBMZHwnVWV1rzC+b/UT5z6l04YOYxcJrIw3K2bUtW4G/rPo/PPQB7AkX7bH+ZwXxPh6s9mG5PxNtya2r2rjce5+ctb4jmem4BxF0KiaFYatQXZtRF2wuqtvQfYTQp0/Ex9LlwVwlY1qu05YJWxcFQdN70Jl8PqhUNhM5VLtWO+k9tP5SQdtuOd+LvoWaQPWIQ6sKsOQCK9CaHvzMOuY6Oa0GT6e2CQzOR8QC6c6fh3qUMQNmFny8bmOz+GEY4b0ymiHQFGRhwAGNEbjjftLRUwFKOitqA8ofEbQO62Loj2Epup9RUOdLq+ITZagVTngGwp54lLMW3XM/EGGUx31Dc0QSNjsAaHz9zKvVNH4uUDEGk15VBHK3v2N0ePWZkmdfF3mOXqZ1T9UIy4S6psJ5lolyBKwVYhioJ0izXYXVy86IwY87j1Ht/v3lh0fxBk8BQEwnVtPmYhWLH0PqO/tKx+ufEzRxSNKk0AK2G+5rk/72lOpsacWSt90fD1IQWrUQK9+AR6HYfaRvEL42WcoKOGaN7Xuu/wAv+pVY3U2wsF2A3UqQDwfMu3tYue2d68ubUYgBA0hWBrYjb67TGT/Frb/kxvV8YlgDdk2d95FbBJ78fpf7T06vi3jMR2oD7c/rGYWZ0ksN75B7TfmZIxt205cwVGm/mT3PAH/iJG+I2qxd3t/FSeMD4gLA0o243v0AjclhsXHluhQvgbVZ9hZP2jTEdcdlNk7+/vzH4+MzkWfl8iP4k3N5VDTHETV3W+CfWpFbApdW1D0v1I2/0cwJuXw/JXK83NR0rpblBi1R0gg/SZHAx9RTCwxeogGrsgkWDf1na8rlLw1BFeXj09qlevi0+sTkOoAOVfY2QR/v3mxyXTkrWvJ+285L4hzwTN4ujcBgD6EqoDV6cTU+HPG6qul2qvX5+srebif1Nx1Dp+WUbHTvzVbywwsFVG3EyHTvEeHifgYHayQePnJ2D15FO7qR8xYkYloGFRrOACx2AmM63/UHLYRrVrb0Tcj2PYfWM8P9afPecjSimlTayfzNXJ9B2/ab5FZ7WhxM6WPk39zx/wByB1TNpl8J8R2ulLV60PSWr4SKpZjQAJPyA5nKvHaZjML/AHCYbf2oHlYHfEYmhiMvOn8u3AvvHMt+nVz4y+PnRmMw2I3l1spob7AAAe9AWfedq8AZLDw8upRmYMdVsANJ7gAcd58+4BKkNvsdu24m56V4ozCYRXXQNDt6sSR6D8O//M0qkdD/AKgday5y74fxV16hsrLex3v2FftOM5zMEJTKRrUVt/gPKG9+B+sl4HUsEPrzLNihd9C/5GydJY8DiROsdYTGZmVCtigCQQm4/DXHlFRInYdknpcJvyuV+1G/1nUPD/WNCMrjUB5q7knj9ZzLwnkMbM4y4KLqFgsWDaMMfnJUeX097nQev9N/ttF4i2QShoKfLQIok+vPfeR1CV0bpdNoxNbCkCnD12qsaJsfmAr7yxxMdVXVqB9/b2nKOneJ8F2QuELjZ6xKV1CkAMmoAmyOb4lhm/FuXZvNioqKT5Fcduxrb6cSuYtbK1HW+rjDyxc/iJJQerHyoK72anHcy9YzYj6jqNvq7t+Y2F5urArtdzeeI+o4GYTC+DiBypN8lPwkG9JHmG/eqJmY6kE+G2ohggLDt5lUtQobAhStAfxKddTZFuefNUOew1ZS1agRfH+J2JNd1P7iWXhzpI0/E0h8MXttuxvSp4F7d+ZUjE+E4CurrdkGxQ5IB7bDf5GXeBm8AoUJ0ox1EA6GYrYFkbGtR5rtKdbI05x5ZjALNTMUXikb09b2A+Vz3yDgeTCW17sRe3Nt6Abf7tIhTA1AU76qpQ7NfJ7Eqf07yb/cuPKiKFX/AA4PF3Wkhzt+aZ5qdVfiXDUuFIO4Ar9qI44BmSzOFparscg+3v7za9Y6nh6SXUG6o6WV732o2jC+4JHtMVm8bUxaqGwHF7Dk1tc6/wCPcc/ePGESE0ZmQhCATVeCPDWLm8QlAoVOSxIBJ4GwPf8An0mVnvl80+Gbw3dD6qxU+24MizZiZcutn436bmMupTGTSNYAYMGRxpBOg7Ha12IHB9DKbw4SzDBR0V8S/NinThpQJ8x7kgbfOVme6rj49fGxsTErjW7MBtWwJobSDInPmJvV3W/8Y5Dp2FgIMPGL5ohSzIwZTsLDgHSo9K32HMwS13jYS0mRFupmOBpGkj5A8CvTm9jf0iLtYLdq2NrZ9a7cyJCRhpZ7Y+YZ6uqAoAeg/czwgBJQ3/8ATLoPxHOO48q+Vfn3P8feddYqFJ7KN/pvMz4Kyowk+GvCIu/q7KGP13E9vHvU/g5LEZOWGgEbUW8tj5Xf0mVu1rJjjniwoc3jNhsGRmDgj/8AZQx+xJH0lNcITVnXtg5h1DBWIDCjXcA3X3if3Dfmb7ntdfufvPKEILdzrH9M88i4CpwwLX72xInJp0j+nx8qsfUj6b7ynfxbn61fjbqowsu7myGVkFUDqYaQfpdznvTP6iZzAwVwV+GyIAql0tgosAWCARRrccCb3+oWW+JkXIA8lP8A+rC/0ucRkcfE9fXri4pYkmh7AAAewA4E8rhCaKC4XCECTlc9iYd/DxHS+dDMt1xdHeNzGZZ21OzOx5ZmLE73yd54QgEl9ORWxFDHy3v2sAE19eJEhFG7zXVdCjDDqqql+TDq6NMBdCv3mXz/AFNnGgbLqLcm2J2sn0529zK93J5JPzNxkpOJPV71b49kx2U2GIPrclYfVHAryn1tbv2PtK+EtZKrLY2vhYtjM+I+nygKB+ECtztx3H6egmjfyo7k7ojtYrdACxD39K5ojY77VHg7BBy4CsNbM2x40gi/4+4k3xZijBybKNncqnPIOosQO2ykfWc3U3vG8ucudZzNtiMWat+w2A9gJHuJCdTnFwhCAQhCAQhCAQhCAQhCAQhCARVNGJCB2fwp1ADLo7uLKl2J9Tx/9vsJivGXiYZhEwkuhTsb2LEE0B8z+gmYbPOU0ajp22vkDgH2kSUnGXV715ghCEuoIQhAJuf6fZ4AnCO9m14scX/P6zDSZ03NnCxFcdv2/wB3kdTYtzcruedCvhvgtuCvHfcftOEZ3BCYjoDYV2UH1AYi/wBJvvEXixDgo2ESXddJ/LpBBKtW9gnb5mc7Y2blOJU92GwhCaKCEIQCEIQCEIQCEIQCEIQL/wAPdbXADK4Yg3pKn8JIFmvel+08vEPWfjlFQMMNFAUMbYmt2b3u5Swkfmbq36uYIQhJVEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgf/Z";
  const prueba = {
    backgroundImage: `url(${url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const pets = shelter.pets;

  useEffect(() => {
    getShelter();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();

    await deleteShelter(id);
  };

  return (
    <>
      <div className="b-container">
        <div style={prueba} className="b-container__boximg">
        </div>
        <div className="b-container__boxinfo">
          <h3 className="b-container__name">{shelter?.name}</h3>
          <p className="b-container__address">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {shelter?.address},{" "}
            {shelter?.province}
          </p>
          <p className="b-container__phone">
            <FontAwesomeIcon icon={faPhoneAlt} /> {shelter?.phone}
          </p>
        </div>
        <div className="b-container__boxdesc">
          <h4 className="b-container__titledesc">Descripción</h4>
          <p className="b-container__desc">{shelter?.description}</p>
        </div>
        <div className="b-container__boxpets">
          <h4 className="b-container__titlepets">Mascotas</h4>
          {/* {pets.map((el) => (<PetCard key={el._id} pet={el}/>))} */}
        </div>
        <div className="b-container__boxbtn">
          <Button type="button" className="button">
            Editar
          </Button>
          <Forms onSubmit={submitForm} method="DELETE">
            <Button type="submit" className="button">
              Eliminar
            </Button>
          </Forms>
        </div>
        <div>
          <Logout />
        </div>
      </div>
    </>
  );
};
