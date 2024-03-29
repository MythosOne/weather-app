import React from 'react';

//Header
export const MenuBurgerImg = ({ fill }) => {
  return (
    <svg
      stroke="currentColor"
      fill={fill}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 15L17.999 18H21V20H17.999L18 23H16L15.999 20H13V18H15.999L16 15H18ZM11 18V20H3V18H11ZM21 11V13H3V11H21ZM21 4V6H3V4H21Z"></path>
    </svg>
  );
};

//WeatherCity

export const WeatherCityClose = ({ fill }) => {
  return (
    <svg
      width="16"
      stroke="currentColor"
      fill={fill}
      height="16"
      viewBox="0 0 32 32"
    >
      <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
    </svg>
  );
};

export const Search = ({ fill }) => {
  return (
    <svg
      // stroke="currentColor"
      // fill="currentColor"
      fill={fill}
      strokeWidth="0"
      version="1.1"
      viewBox="0 0 16 16"
      height="18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
    </svg>
  );
};

export const CorrectListImg = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="mdi-format-list-bulleted"
      fill={fill}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" />
    </svg>
  );
};

//IconCard

export const CloseCardImg = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
      strokeWidth="4"
      stroke={stroke}
    >
      <linearGradient
        id="wRKXFJsqHCxLE9yyOYHkza"
        x1="9.858"
        x2="38.142"
        y1="9.858"
        y2="38.142"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f44f5a" />
        <stop offset=".443" stopColor="#ee3d4a" />
        <stop offset="1" stopColor="#e52030" />
      </linearGradient>
      <path
        fill="#e52030"
        d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
      />
      <path
        d="M33.192,28.95L28.243,24l4.95-4.95c0.781-0.781,0.781-2.047,0-2.828l-1.414-1.414 c-0.781-0.781-2.047-0.781-2.828,0L24,19.757l-4.95-4.95c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414 c-0.781,0.781-0.781,2.047,0,2.828l4.95,4.95l-4.95,4.95c-0.781,0.781-0.781,2.047,0,2.828l1.414,1.414 c0.781,0.781,2.047,0.781,2.828,0l4.95-4.95l4.95,4.95c0.781,0.781,2.047,0.781,2.828,0l1.414-1.414 C33.973,30.997,33.973,29.731,33.192,28.95z"
        opacity=".05"
      />
      <path
        d="M32.839,29.303L27.536,24l5.303-5.303c0.586-0.586,0.586-1.536,0-2.121l-1.414-1.414 c-0.586-0.586-1.536-0.586-2.121,0L24,20.464l-5.303-5.303c-0.586-0.586-1.536-0.586-2.121,0l-1.414,1.414 c-0.586,0.586-0.586,1.536,0,2.121L20.464,24l-5.303,5.303c-0.586,0.586-0.586,1.536,0,2.121l1.414,1.414 c0.586,0.586,1.536,0.586,2.121,0L24,27.536l5.303,5.303c0.586,0.586,1.536,0.586,2.121,0l1.414-1.414 C33.425,30.839,33.425,29.889,32.839,29.303z"
        opacity=".07"
      />
      <path
        fill="#fff"
        d="M31.071,15.515l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L18.343,32.485 c-0.391,0.391-1.024,0.391-1.414,0l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414l14.142-14.142 C30.047,15.124,30.681,15.124,31.071,15.515z"
      />
      <path
        fill="#fff"
        d="M32.485,31.071l-1.414,1.414c-0.391,0.391-1.024,0.391-1.414,0L15.515,18.343 c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0l14.142,14.142 C32.876,30.047,32.876,30.681,32.485,31.071z"
      />
    </svg>
  );
};

//IconsWeather

export const SunriseImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <image
        width="24"
        height="24"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEpElEQVR4nO2X21OUZRzHnwURwUFBkAQEDNMsy2NRoIL7Yk39BXVjXXnZNHnTRRdpTVPTYNM0TVPNNI28m40VmQsa6MLuorscPXISEBJPFy2wu+IJ9vBpnvfBLpxJEIVdmv3O/OZ99/TO5/t7nuf3+60QMf2PpeneTWUHvBvFXFSZxfeGVjESMOvDQXPFyFtiLsJruhfNMoIyMTQ3TGgVvje1Cq+CnzCgTAwFy/Sht0X0w/sCmu7jfgOaZRizxROKWhPm/f6d5gpfUNP9/JcBzTKEWfcEzRbPThFtMus3BhX8gw0Yof99SUS7tPsMiLkmLWYgwoqtQKQVW4FIy6x7T/w7C1mGGyLNE1NMMU1DWMUHMkS0C6vQsYrd2MUC4/WHIo7apL0cS8aI2sQ98j3jM7tYYHzXKnQRDaJKFFKbBHWLwZnh5eQyG+7s6zTmQlOeCnnvyrrGicw6HOk+bClQk4j8bWTh/0zOwpHRgXs5tBbA6TVw7jloXw8dG6Bzowp5374Ozq2FU6uh5UlwZYMjvR178rLZA64Su7CKLo4tPETD0sM05vk5/bQC7n4Bel+G/q3wVylcMsOgWV0vbYeBEri4BXpegq7NcP55OLUK3Dk+7EsOU5t4yHh2ldg1cwaOJuzDngaNyzHAZWYlkIQbLCXct55QRy7BtlQCrvmMO+MYt8cx5pjP+IlUAi25hDrWKYPS6IUX1cq0PQUns8C2CKpN+2bOgHNpq7H8Mns9hRPgWwl35RJsiSfYKAi4BIEGwbhDMF4vGLMJxo4J7tYI7h4V3KmWEc+YO5dwb7EyIlfv7LPqvNhTm2cG3pH5rpEpmfWLxTCoEe4pINRmItgspg5vFdz+Q3CrUkYcY64CGChV208mpnkF2Je88/j2/NGEcpyZrbStgs5N0L8NLm8jdD6FUKuYPvyvgpsHBTd/FtyuTiMsn9tXrM6TNFGf1kK1qfyRzgRH4rtwpEPrSlVNBiT8FkJnEh8b/OhPglFdMHowiVB30YSJddCUr0pzleicvgHbokqa81VW5F69XDIj8Df2C278KBg9kET44sR2kiXXlQO1yZXTN3By2e+cXQu9RXBlB6Hzi2cM3v+DwP+9XIlUwgPbVYWSPcOR8dv04J0ZWbQW+OnebNTzcO/KGYf3fWvC942JO3WrVYWTBaMx14tt4RMPB1+TVIgru8OoCrL5XCl5tGrzEPDer+U1gVB/qeoxsrs3ZLRTNW9qYwdWYaF+sRoNjOxrhLvzZg3e+5WJkS9N3KpeMbEK69UsJYdCq7BMbuBI3G4aMuHMM9BXBFd3PFyTegzwI1/I6zzCA2Z1FmT/qU+TBt6b3IAcd905XqPyDJQQ7t846/DD5SaGPzcx5t6gyqrs0g2Z3nvj+uQmmvKdxsA1WEaoMz8i8EOfmrhZma+2kewLrmz71OB/EfG0rbzOhUK4+irBU2kRgR/6xIT3uyVqopVNtCnv6r0/RZNsofS9xqQpm8m11wi4EyMC7/lYvl4Al3eoYU8OkcdT9jwYvlq8jzMDzqxRB/j662okjgC8Z68Jz0fxcOUVdZDlOFO3SB7kz6a0lWKKKaaYxGzoH7eEr/rSF/chAAAAAElFTkSuQmCC"
      />
    </svg>
  );
};

export const SunsetImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <image
        width="24"
        height="24"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEoklEQVR4nO2X21OUdRjHfwsqB0cFQRIQMEyzLJAsCg/gLtbUX+BV3XnZNHnTRRdpTVPTaNM0TVPNNE29m40VmQuaKLC76C5HTxwVgTjpTOzCcvIAe/g0v/cHheUEosDutN+ZZ97Dvu87n+/v8DzPChFWWMEpkzbiMGkjyDBqw2dFqMmkDTM9RKjJFPoGhpgeItRkCn0DHqaHCDWZQt6AeZDpIYJdRm2w55/Qd8fA36G5u0SwyWh2vWrU3L67QO8R8hn5rAhGFZoH9po0t/ff4G49jJrLZ/zO/ZoIZhXqJlzeKeiQgr+3CRdGrT904KdUaO7fa9L6vSEJP6XCI/05BeY/tv51I6yw/mfCIt6WIYJdWISGRezHKqL163dEBKUxBzkdix6lUQfkPf03q4jWn7UITQSDKBa5lMZA+SqwJ3o4t7YMZ8oNqtKgOl2FPHckX+dsUjm2hCHKVsCpKOS7iwv/W2wytsQmnOugLhMubIbLT0FjNjRtheYcFfK8MQsub4Hzm6D2UXCkgC2hEWvs2oUDLhb7sIgWTi8/RuWa41SlD3PhcQXc+iy0vQAdO+H3AugyQrdRHbt2Q2c+tO+Aq89DyzZoeBrObwRn6hDW1ccpjTqmf7tY7Js/AyeXHsYaD1Xr0MHlyEogCdddQOBaNv6mNHz1cXgdy5iwRzBhjWDctoyJs3F4a9PwN2Upg9LolefUzNQ/BueSoWwllBgOz58B+5o6ffrl6F3NnQTfSaAlDV9tJL4qgdch8FYKJmyCiQrBeJlg/LTgzinBnZOC2yUyIhl3phFo266MyNm79KTaL9a4mvmBtyW9oY+UHPX27dBtInA1E3+9AV+NmD28RXDrV8HNIhkRjDsyobNALT85MDXrwbr69Ye35k8uPYQ9qY76jdD8DHTsgp5d+BtW4K8Tc4f/STB2VDD2g+BWSTwB+d1r29V+kiYq4mspMRx6oD3BicgWbAlQt0Flk04JvwP/xaiHBj/6vWBUE4wejcHfmjdpIguqM1RqLhbNczdQtrKImgw1KnKt9uTPC/zIt4KRbwSjR2IItE8uJ5lyHalQGls0dwPn1v7CpS3Qlge9e/A3rJo3+OGvBcNfyZmII9C5W2UoWTNsiT/PDd6emExd5jCt2/R8HmjbMO/wQ18YGPrcwO3yTSrDyYRRleahbPkj9wd/KiYXR0qTnhVk8enNf7Bscx/wns/kcSn+jgJVY2R1r0xspHjJ7NoOLMJMxSrVGuijbyLQmr5g8J5PDQx+YuBmyfrJWchWvZRsCi3CPLOBExH7qUyCi0/AtTzo23N/ReohwA9+LI9LCHQa1V6Q9aciXhp4c2YDst11pnr0zNOZT6AjZ8HhBw4ZGPjIwLhzq0qrskpXJnmm2vWZTVRn2PWGq7sQf3PGosC7PzAwVpShlpGsC44U6+zgfxSR1G+4wZVc6HsJ3/n4RYF3v2/A8+Vq1dHKIlqd3jf1p2iGJZRwUO80ZTG5/jJeZ9SiwLvek9fR0LNHNXuyiTyz4sB/w5eIt7AnwsXNagPfeEW1xIsA7zpowPVuJPS+qDaybGfKV8qN/OGsllJYYYUVllgI/Ql63q/E0UYj0AAAAABJRU5ErkJggg=="
      />
    </svg>
  );
};

export const WindImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <image
        width="48"
        height="48"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcUlEQVR4nO2YW2sTQRTHT8ULeKO2mszGV30RxGJ3pfUbiMVLFf0QFbUV3I0WixdQfLJekMz4olUEv4IP7gaUPthWulstVSQzSREr0pm0aAu1KxsvbSZJczFNN5gfnIfdDeT/nznnzHAAatSoUeMPLa94g2byi5rJ+1VTfNUsMa1aYkg1xdWmaHIb+Jl9ljiomkJolnCzhfdNtSaPgR/RzORR1eJzucT/DZPP+85E68upgGbyibziF+2Er9JJNcUZaZVnm6OiU3suGve8mKzXTHFas/iMZOIK+AXVnGxPE2fxjnwmvcIG3+C6darFw6rFo5rFu73nrN0pfQeSUE20ZBoQUE2oljgrFfMgVMvKq554k89KBi5XTIQWFW2ayccLbZMFBG9+kdxaMQOqxRNlE2/yH96hVzHxZTbAKy6+DCk0pZliwDu4Kpo2NWr8zwRxrA1hNq4Q5q5YYDqNMB1FmD4JYnpi1zNnbcEGEKGJFRVPssYHROLt1WzA/RX0JvS4q/yfQiSPCb8TfPRpQwDHWxChtxFms5k1wip/opdKCCea5LRGmL4vqrB9YQKn7wTCseNQTSBM76QZIPTxwlfDbgPDHgfDcUuIadDtIdCdaxAeXLZxSQDHW9INsHcLX3UnUaL49NBtAbq9LIOrxgdfNqUXMk2W30Aq7PnlMNHQN7ZZ6kSiXCmUfSdypFPoYaIxiFlHqhW6mSOYXIQeJFqlTjRanqXpGaoHY/g0GPaMZCJz+tbjrlYwG1mUx5cK/RuF0LtSCvVBWdHtM5KBjOnb9vvxnVIhzgQibHde8ZHY3uVvo8bwFqkWMqZv3uGDCKVSO4wvZUIhtFm+2iBCxyDyek0R6tw6MJww6HYUdLs79SzT6TTkM+DhrZx8NUCYfUeE3QoStk+JjK/fdvfzxlAktl8h9F7GVQLT+VCEHipCPACE7XapUE9l/EZ3OiUDOadvCLPeUi9zCLPrxYnPnt+zYDhdYLxt/JU69tnf7xYbyD19c926Ukwgwm7kvU5n5dybAOjORBGtlBdyKqNI/JiCWSy/cDqmYHoY/onwyBEwnLkCzoAfoA8XfN3d0Tu2LkToSUToU4Wwj4jQbwqhUwpmb71Wmeo2xRXsEpwfOZA6pJZa+SLErwxet9HtC6Db/WDYX1PdRrcHUjnfNVqbvtWAKuMn4cJk6muVN9gAAAAASUVORK5CYII="
      />
    </svg>
  );
};

export const SnowImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <image
        width="48"
        height="48"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE1ElEQVR4nO3XW2/bZBjA8QBigg+AlHTbHQeJ7lOA4JJNMPgUVEVcABJXcAEaSBViE2jJDhdMaNI0bkCFaQV1PbAkTZyTnThxnMRO4pxs55zYVseDXr+J6ybNoUnUZlMe6a/lqvo97/tWzSyWxSxmMYt5JgYAXt/f3/9C07QHmqZxmqY1VVVTVFUVVFV9qCjal4qivGGZt1FVdVlVtd9VVX2iaRqoKkoFBaWgFGh3arXa/7VarT/qqro8Dyf+nKIon7cVReliu9B2W4FWu41rtaHZauk1mqgm1BsNrdZofIZ+xmnhX2gpyo1RUIzt1oBaHVet16Faq0OlVr+JftaJL9BotdZ0bNN8qv3QWgeKsTWoVHFlVKWqJ1cqayeKr9WaH0wGrYJcroDUTS6D2KkkympJkhtFSaZLovxrUZI+AoAzM8cDwMvVWo0zsEOg8hFQUSpDSZJxogxFUdIrlFCiXr6IKkGuWIoLBfH9mS4gVyofTwMt9kFFjC10K4KQx2XzBcjmUPnvAeD5mSwgyRWPJJuws4LmMTajl4eMkIe0Xg74bA64jHBlcrQkXShJ5R9LohzsYg2o6frzh6//AGpgh0PTWYzlswICd8pCKo1L8tlLx4Ink8mXiqJ0rVASnwx5pzOCCgYUYzNGCS6tx6bSDEmSZ8bGF4rixnBocWwofxwoh7C8XhyVRHHAoBLch2MtkMsXfzoKmp05ND0ICkwiBTEUm4Iom8QxiTsj8YIgvJkR8k8GQ3PHgiYmgcaTQOslgGYSENFjgYrF6ZELpDPC1aOg3EBopg/6zj0e3r03DJoaCo3EWAjrxYGKHhSimdrIBbh0Jjwu1HyiuzQH325ysBflwObg9dw0B99spmCHSo2AsoegJM0YhegYhCIxCEZiEAhHRy/AptKNXijbe/WdU42ZTvXTBykd/dptjEe92vn8yV/JA6jpVMloPxRjoxAMRxEYR9Hgp2jwUZHIyAXiKa42DNp9p8aJxvGJbpEJuPQbXsLcxfsp2AzGB0BjR0L1yAj4OhGhcLdfRi4QZZNU/y/UAbR7/eGed7oZZHVs7wLv3U/CP35mLKjvAAreIIrS8wRQJOwFyMsjF6AZ9odh0EFXv/pnAj+bW6Yn1Pm8ss72QCNDoR6E9aNC4Eb5QuAiQuxYf8jC8fgFkmb2MdYMZfqu3jhVioa/iSh8vcHCIz9tLLDpo+Grh3HY8EZGQEmM9XWwviC4CJyTCIDTG0D/XrSMO8FI7Nog6MHV00eeKBEMw1t3k/D23eRkUG8AHnv98Njjh3877bqJ432ZQ1flJyMbo6BTnagODehQA7vng91ubgJ23ARsu4krE32dRksQIeoqEaT2D0OpgVA3gvpMUMIEPXSqJugehuK8sO3Cbbk8zCMnMf6zGTQuH7Xs9ofW9nyhkMsXrM8GShjQbSNPfcvpjWw5vXe2nMRlj8fz4tT4xTzrY3Xwu1Y7v2N5mmbpVua87Tq3ar0pvNL9e6F/vs6tnrWnz1nmfWwO7jsdbefLxgKdz1Y7N/l/3k9q0CnbHNx673cmm4NbP5UbOO471p/QaS+wNMU7nosnZJsCce5n/qzNzq/0LW/nV87f4JaeqndstfM7Vge/bTnpmYt3PM3MxTueZubiHc9qTu0dL2YxlpnM/8cbDEQQwtMuAAAAAElFTkSuQmCC"
      />
    </svg>
  );
};

export const HumidityImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <image
        width="48"
        height="48"
        href="data:image/png;base64,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"
      />
    </svg>
  );
};

export const PressureImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <image
        width="48"
        height="48"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACS0lEQVR4nO2ZPWgUQRiGF4KCYiwEFcFGOW8nh2JxvWJjYZPCMnannUUsxQNtLFOLhY2nmblJI+bAKkfI5QotLBQxFjYBzX7fJqhYCClcmd25U8KGC3tf3kL2heke9uXZ35nZIChTpsz/H2W4rzSvoji72O0vdLrJYNjFpZHH3DXhi3hSGU5CzT9R3EJnqfevgBuFBWqWKq5QGf6M5AYZWyA0dN0XvkJykgJzvvA+khMTUJrW0kLLl5GciEBoowvpA2c4CmwygeLkBDQ9SM+W5kdITlCA32eFdBXJiQiENg6z9zVt1R8nB1CcS2O22b95p5m4UVxA8z1/tp4gOZfGbLM3voCht65wyvA1JLczhQSqduOMv9zfajY5iOLEBJSm2/5yP0NyYgKhpvm0sM23kJykwAdXeM7QRSQnKbDlCmv2+zEkJydgaNsVjnpfS3OCDzGzK6zYr8eRnNiHTBn6mN6zenMKyYl9yJTmnv/oXEJyeSkq0EoLNTeQXF6K3kJ3s3k7zSE5uamEjqb3sm6V5sQEBjsHoaF1JJeXYrNRm0wow7+Upt81S0dgXE4KT6eV5nfZ4juuIzlBAWq7wmo7uoHkBFdkfgFu6CGSE1yRxTN+EaKR3M6MI3DFFy4jOTGB6vNY+VffJyQnJnB+Pjo53EUDcmICldbmUf/Q/UByYgJu8eEv+TaSk9qVeOPnLn+Hptf7zYkJnH26cWK4j5mVrakWn9pvbrd/ZIVuoWHpiDJpLu8fme10V4Iiqb/8cvi0XT+E5sqUKRPsOX8ACGi51LdwvQwAAAAASUVORK5CYII="
      />
    </svg>
  );
};

export const PrecipitationImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <image
        width="48"
        height="48"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEw0lEQVR4nO2Yy08bVxjFL7axY3CwMcZADBiwA0kW2VTKpqqi/geNonbR7tpFu4gxdsDg8DDvhEB4mzclIeoi3bRdZJM/oFEXCDVKpY7fD/x+GylSK+GvumOP7biotfBYmkg+0pG8mLn3jOU53+8aoYoqqqgixuva0+Sd64fJz9CHKOXzcN3V/YRbsRfzyg9iIvShqWM7tt65FYWOzSjIjZG1cu1z/fnpFzcOTz+ndVGZMXqzfT101rYWhrbVMLSuBM9ky/6btG6CEOr+ISnpeZoI9hwkgt3bSQltC8sWA79cWQpCy2IQWp4EoBl7IfAzolnK/fjB1f0EKPfjoNiLf0/Lok2PfLea5nwp6WM/SOd80PgobcmsJyWe9t2iZROEUOdO9BPFTiyl2IlBF/ZWNKXYjn1a8sKSGc9hw6wXGmY8IJ72gHjKA/VTJyCaPAHh+MkzOsLfNgCnYyvyO/WOkd6IQocx8sdH21Bd0uKiCXdAOOEG4bgb6gzYLqgbc8Fl7BFngI4HaN+IDMqNEVwO0L6OHSaN37n2tdBgSYsLRp1JwagTBCNOqMUedkDtAwfUPHAAX2+Plxq+ecXb2LoaiuNyIAtiNQStK2nLlrGDSemyv+nCG9QMOX7i6+3AH7LDJexBG2mezga8AcuLUh9AthQ0ZoICLgrSi2m3LAbI0mhZ8BsvvAF3wNbD7bdEuf1WqMa+byHN0VrCSGdqLSX8lYVIW/Ni4C8yZLrZMvZD03zG6fL4u3neK7/4TlpzG7vP/COrz5xgqYlElZp4gVSlhceSzvvXqZBNOGim6fLbjmy8h17ssg3PC0m4ZBdJHvreFYQECW48yjOebPvVT3neCQ125iBMw6z3u8KQ4oxxTZOeTNc16YkTqBt3f4uYItHUyavzQooylU05W90GsrpfIaZIOO4KnBeyjpox2KPYThBQHqZn7tCiy2POZC6kKxd0JOfa4czcycwevt6RQEyRYMR5fF7IGsp6bDtQM4icQ4O2o7KGwizfUyTL8/X2yfNC8gsGZnZokoPTOl628NeeJRq6MccfxIP48/9dL9CbGi/pbIl/hdSRQYFLuT/t6vvWONL+Sd8ZoVCK3fieci8Oyt04dO3Ed4u5h9tvvcsdsKSyIfMmPTnt0xMfOBrzGVtrLt9ZvGsz8jHm987tGGAk7tyMpDqM0dvF3MvWWO9ytJYEGVRrBrYmz31mYKlNcbaGuFO28Jjl5RvhN/KNNA7nkDj0BhmAU9QiKlNjlZqYZPUSRyy16bSq15SsUhFHVb3ERFl/Nljtq+FvsmflfBReCWGy/BoxWTcMwJUthWyFKExhcPNCwKlcMfEQU9WyEFC9h8H5CJw7Q99DTFTrExdfOufzSR9n8Df/wJ9HluIZjw9fi5imhlnPV+/hbyFVZg7/GNbqJ11fIqZJPO15mR8yR5RuoP4EyILamPMlYpqEE8XQJAMpkpJg1HlK0eR/UWQN0yiSUu2w47f8kDmKLCDIITvwBq2vEdPE19tURdAjCWQ8nZWBVaoy8Xg66zFPdw455kEZW2s5Roa3XMRE8TWEjKO1HGepMU2OWRhj9ZmPkYaQIUbL8JbL6jXfY6mJ1xjE0jBG/Ip6iXuM/eYrqqiiihDd+gdQ+insMppLvAAAAABJRU5ErkJggg=="
      />
    </svg>
  );
};

export const VisibilityImg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <image
        width="48"
        height="48"
        href="data:image/png;base64,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"
      />
    </svg>
  );
};

//Footer
export const ArrowUpImg = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M3.95312 6.37988L7.99979 2.33322L12.0465 6.37988"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13.667L8 2.44699"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const GitImg = () => {
  return (
    <svg
      height="28"
      viewBox="0 -3.1 2490.3 2493"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="1245.2" cy="1243.4" fill="#fff" rx="1217.6" ry="1246.5" />
      <path
        d="m1245.2 1.6c-687.6 0-1245.2 557.4-1245.2 1245.1 0 550.2 356.8 1016.9 851.5 1181.5 62.2 11.5 85.1-27 85.1-59.9 0-29.7-1.2-127.8-1.7-231.8-346.4 75.3-419.5-146.9-419.5-146.9-56.6-143.9-138.3-182.2-138.3-182.2-113-77.3 8.5-75.7 8.5-75.7 125 8.8 190.9 128.3 190.9 128.3 111.1 190.4 291.3 135.3 362.3 103.5 11.2-80.5 43.4-135.4 79.1-166.5-276.6-31.5-567.3-138.3-567.3-615.4 0-135.9 48.6-247 128.3-334.2-12.9-31.3-55.5-157.9 12.1-329.4 0 0 104.6-33.5 342.5 127.6 99.3-27.6 205.8-41.4 311.7-41.9 105.8.5 212.4 14.3 311.9 41.9 237.7-161.1 342.1-127.6 342.1-127.6 67.8 171.5 25.1 298.2 12.2 329.5 79.8 87.2 128.1 198.3 128.1 334.2 0 478.2-291.3 583.6-568.6 614.4 44.7 38.6 84.5 114.4 84.5 230.6 0 166.6-1.4 300.7-1.4 341.7 0 33.1 22.4 72 85.5 59.7 494.5-164.8 850.8-631.4 850.8-1181.4 0-687.7-557.5-1245.1-1245.1-1245.1"
        fill="#2977bd"
      />
    </svg>
  );
};

export const LinkedinImg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="34"
      height="34"
    >
      <path fill="#2977bd" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
      <path
        fill="#fff"
        d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"
      />
    </svg>
  );
};

export const TelegramImg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="34"
      height="34"
    >
      <path fill="#2977bd" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
      <path
        fill="#fff"
        d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
      />
      <path
        fill="#b0bec5"
        d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
      />
      <path
        fill="#cfd8dc"
        d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
      />
    </svg>
  );
};
