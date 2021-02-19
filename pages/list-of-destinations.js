import { Fragment } from "react";
import Head from "next/head";
import generalStyle from "../src/styles/_general";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import IconButton from "@material-ui/core/IconButton";

const destinationsArray = [
  { c1: "Albania", z1: "H", c2: "Algeria", z2: "H" },
  { c1: "American Samoa", z1: "H", c2: "Aldorra", z2: "H" },
  { c1: "Angola", z1: "H", c2: "Anguilla", z2: "H" },
  { c1: " Antigua", z1: "H", c2: "Argentina", z2: "H" },
  { c1: "Armenia", z1: "H", c2: "Aruba", z2: "H" },
  { c1: "Austrailia", z1: "f", c2: "Austria", z2: "H" },
  { c1: "Azerbaijan", z1: "H", c2: "Bahamas", z2: "H" },
  { c1: "Bahrain", z1: "B", c2: "Bangladesh", z2: "C" },
  { c1: "Barbados", z1: "H", c2: "Belgium", z2: "C" },
  { c1: "Belize", z1: "H", c2: "Benin", z2: "H" },
  { c1: "Bermuda", z1: "H", c2: "Bhutan", z2: "H" },
  { c1: "Bolivia", z1: "H", c2: "Bonaire", z2: "H" },
  { c1: "Bosnia & Herzegovina", z1: "H", c2: "Botswana", z2: "H" },
  { c1: "Brazil", z1: "H", c2: "British Vvirgine", z2: "H" },
  { c1: "Islands", z1: "E", c2: "Brunei", z2: "F" },
  { c1: "Bulgaria", z1: "F", c2: "Burkina Faso", z2: "H" },
  { c1: "Burundi", z1: "H", c2: "Cambodia", z2: "G" },
  { c1: "Cameroon", z1: "H", c2: "Canada", z2: "H" },
  { c1: "Canary Islands", z1: "H", c2: "Cape Verde", z2: "H" },
  { c1: "Caymen Islands", z1: "H", c2: "Central African Republic", z2: "H" },
  { c1: "Chad", z1: "H", c2: "Channel Islands", z2: "H" },
  { c1: "Chile", z1: "H", c2: "China", z2: "F" },
  { c1: "Colombia", z1: "H", c2: "Comoros Islands", z2: "H" },
  { c1: "Congo", z1: "H", c2: "Cook Islands", z2: "H" },
  { c1: "Costa Rica", z1: "H", c2: "Croatia", z2: "H" },
  { c1: "Cuba", z1: "H", c2: "Curacao", z2: "H" },
  { c1: "Cyprus", z1: "G", c2: "Czech Republic", z2: "G" },
  { c1: "Denmark", z1: "F", c2: "Djibouti", z2: "H" },
  { c1: "Dominican Republic", z1: "H", c2: "Ecuador", z2: "H" },
  { c1: "Egypt", z1: "H", c2: "Eire", z2: "H" },
  { c1: "El Savador", z1: "H", c2: "Equitorial Guinea", z2: "H" },
  { c1: "Eritrea", z1: "H", c2: "Estonia", z2: "H" },
  { c1: "Ethopia", z1: "H", c2: "Falkland Islands", z2: "H" },
  { c1: "Faeroe Islands", z1: "H", c2: "Fiji", z2: "H" },
  { c1: "Finland", z1: "G", c2: "France", z2: "C" },
  { c1: "French Guyana", z1: "H", c2: "Gabon", z2: "H" },
  { c1: "Gambia", z1: "H", c2: "Georgia", z2: "H" },
  { c1: "Germany", z1: "C", c2: "Ghana", z2: "H" },
  { c1: "Gibraltar", z1: "G", c2: "Greece", z2: "G" },
  { c1: "Greenland", z1: "H", c2: "Grenada", z2: "H" },
  { c1: "Guadloupe", z1: "H", c2: "Guam", z2: "H" },
  { c1: "Guatemala", z1: "H", c2: "Guernesey", z2: "G" },
  { c1: "Guinea", z1: "H", c2: "Guinea Bissau", z2: "H" },
  { c1: "Guyana", z1: "H", c2: "Haiti", z2: "H" },
  { c1: "Honduras", z1: "H", c2: "Hong Kong", z2: "D" },
  { c1: "Hungary", z1: "G", c2: "Iceland", z2: "G" },
  { c1: "India", z1: "C", c2: "Indonesia", z2: "G" },
  { c1: "Iran", z1: "C", c2: "Ireland", z2: "G" },
  { c1: "Italy", z1: "C", c2: "Iraq", z2: "H" },
  { c1: "Jamaicca", z1: "H", c2: "Japan", z2: "G" },
  { c1: "JERSEY", z1: "G", c2: "JORDAN", z2: "C" },
  { c1: "KAZAKHSTAN", z1: "H", c2: "KENYA", z2: "H" },
  { c1: "KIRIBATI", z1: "H", c2: "KUWAIT", z2: "B" },
  { c1: "KYRGEYSTAN", z1: "H", c2: "LAOS", z2: "H" },
  { c1: "LATIVIA", z1: "H", c2: "LEBANON", z2: "c" },
  { c1: "LESOTHO", z1: "H", c2: "LIBERIA", z2: "H" },
  { c1: "LIBYA", z1: "H", c2: "LIECTENSTEIN", z2: "H" },
  { c1: "LITHUANIA", z1: "H", c2: "LUXEMBOURG", z2: "H" },
  { c1: "MACAU", z1: "H", c2: "MADAGASCAR", z2: "H" },
  { c1: "MALAWI", z1: "H", c2: "MALYISIA", z2: "H" },
  { c1: "MALDIVES", z1: "G", c2: "MALI", z2: "H" },
  { c1: "MALTA", z1: "H", c2: "MARCEDONIA", z2: "H" },
  { c1: "MARSHALL ISLANDS", z1: "H", c2: "MARTINIQUE", z2: "H" },
  { c1: "MAURIEANIA", z1: "H", c2: "MAURITIUS", z2: "H" },
  { c1: "MEXICO", z1: "H", c2: "MOLDOVA", z2: "H" },
  { c1: "MONACO", z1: "H", c2: "MONGOLIA", z2: "H" },
  { c1: "MONTSERRAT", z1: "H", c2: "MOROCCO", z2: "H" },
  { c1: "MOZAMBIQUE", z1: "H", c2: "MYANMAR (BURMA)", z2: "H" },
  { c1: "NAMIBIA", z1: "H", c2: "NAURU", z2: "H" },
  { c1: "NEPAL", z1: "G", c2: "NETHERLANDS", z2: "C" },
  { c1: "NEVIS", z1: "H", c2: "NEW CALENDONIA", z2: "H" },
  { c1: "NEA ZEALAND", z1: "G", c2: "NICARAGUA", z2: "H" },
  { c1: "NIGER", z1: "H", c2: "NIGERIA", z2: "H" },
  { c1: "NIUE", z1: "H", c2: "NORFOLK ISLANDS", z2: "H" },
  { c1: "NORWAY", z1: "G", c2: "OMAN", z2: "B" },
  { c1: "PAKISTAN", z1: "", c2: "PANAMA", z2: "H" },
  { c1: "PAPUA NEW GUINEA", z1: "H", c2: "PARAGUAY", z2: "H" },
  { c1: "PERU", z1: "H", c2: "PHILIPPINES", z2: "G" },
  { c1: "POLAND", z1: "G", c2: "PORTUGAL", z2: "G" },
  { c1: "PUERTO RICO", z1: "H", c2: "QUTAR REUNION ISLAND", z2: "B" },
  { c1: "ROMANIA", z1: "H", c2: "RUSSIAN FEDERATION", z2: "H" },
  { c1: "RWANDA", z1: "H", c2: "SAIPAN", z2: "H" },
  { c1: "SAO TOM &  PRINCIPE", z1: "H", c2: "SAUDI ARABIA", z2: "F" },
  { c1: "SENEGAL", z1: "H", c2: "SERBIA", z2: "H" },
  { c1: "SEYCHELLES", z1: "H", c2: "SIERRA LEONE", z2: "H" },
  { c1: "SINGAPORE", z2: "D", c2: "SLOVAKIA", z2: "H" },
  { c1: "SLOVENIA", z1: "H", c2: "SOLOMON ISLANDS", z2: "H" },
  { c1: "SOMOLIA", z1: "H", c2: "SOUTH AFRICA", z2: "H" },
  { c1: "SOUTH KOREA", z1: "F", c2: "SPAIN", z2: "H" },
  { c1: "SRI LANKA", z1: "C", c2: "ST. BARTHELEMEY", z2: "H" },
  { c1: "ST.CROIX", z1: "H", c2: "ST.EUSTATIUS", z2: "H" },
  { c1: "ST.KITTS", z1: "H", c2: "ST.LUCIA", z2: "H" },
  { c1: "ST.MAARTEN", z1: "H", c2: "ST.VINCENT", z2: "H" },
  { c1: "SUDAN", z1: "H", c2: "SURINAME", z2: "H" },
  { c1: "SWAZILAND", z1: "H", c2: "SWEEDEN", z2: "G" },
  { c1: "SWITZERLAND", z1: "C", c2: "SYRIA", z2: "G" },
  { c1: "TAHITI", z1: "H", c2: "TAIWAN", z2: "G" },
  { c1: "TAJIKISTAN", z1: "H", c2: "TANZANIA", z2: "H" },
  { c1: "THAILAND", z1: "G", c2: "TOGO", z2: "H" },
  { c1: "TONGA", z1: "H", c2: "TORTOLA", z2: "H" },
  { c1: "TRINIDAD / TOBAGO", z1: "H", c2: "TUNISIA", z2: "H" },
  { c1: "TURKEY", z1: "H", c2: "TURKMENISTAN", z2: "H" },
  { c1: "TURKS & CAICOS ISLANDS", z1: "H", c2: "TUVALU", z2: "H" },
  { c1: "UGANDA", z1: "H", c2: "UKRAIN", z2: "H" },
  { c1: "UNITED KINGDOM", z1: "C", c2: "UNITED STATE", z2: "F" },
  { c1: "UAE", z1: "B", c2: "U.S. VIRGIN ISLANDS", z2: "H" },
  { c1: "URUGUAY", z1: "H", c2: "UZBEKISTAN", z2: "H" },
  { c1: "VANUVATU", z1: "H", c2: "VENEZUELA", z2: "H" },
  { c1: "VIETNAM", z1: "G", c2: "WESTERN SAMOA", z2: "H" },
  { c1: "YEMEN", z1: "C", c2: "YUGOSLAVIA", z2: "G" },
  { c1: "ZAIRE", z1: "E", c2: "ZAMBIA", z2: "H" },
  { c1: "ZIMBABWE", z1: "H" }
];

export default function Destinations() {
  const classes = generalStyle();

  return (
    <Fragment>
      <Head>
        <title>List of Destinations | Turbo Express Delivery</title>
        <meta name="description" key="description" content="List of Destinations at Turbo Express Delivery" />
        <meta property="og:title" content="Global Shipping | Turbo Express Delivery" key="og:title" />
      </Head>
      <Grid className={classes.mainContainer} container alignItems="center" direction="column">
        <Zoom clear>
          <Typography variant="h3" component="h2" gutterBottom>
            <IconButton>
              <LocationCityIcon className={classes.titleIcon} color="primary" />
            </IconButton>{" "}
            List of Destinations
          </Typography>
        </Zoom>

        <Grid justify="space-around" container item>
          <Grid xs={5} md={4} item>
            <Typography className={classes.bgPrimary + " " + classes.textWhite + " " + classes.pxy2 + " " + classes.textCenter + " " + classes.mb3} variant="body1" gutterBottom>
              Country
            </Typography>
          </Grid>
          <Grid xs={5} md={4} item>
            <Typography className={classes.bgSecondary + " " + classes.textWhite + " " + classes.pxy2 + " " + classes.textCenter + " " + classes.mb3} variant="body1" gutterBottom>
              Zone
            </Typography>
          </Grid>
          {destinationsArray.map(item => (
            <Fragment>
              <Grid key={item.c1} xs={12} md={6} lg={5} container item>
                <Grid xs={10} item>
                  <Typography className={classes.bgPrimary + " " + classes.textWhite + " " + classes.pxy2} variant="body1" gutterBottom>
                    {item.c1}
                  </Typography>
                </Grid>
                <Grid xs={2} item>
                  <Typography className={classes.bgSecondary + " " + classes.textWhite + " " + classes.pxy2 + " " + classes.textCenter} variant="body1" gutterBottom>
                    {item.z1}
                  </Typography>
                </Grid>
              </Grid>
              <Grid key={item.c2} xs={12} md={6} lg={5} container item>
                <Grid xs={10} item>
                  <Typography className={classes.bgPrimary + " " + classes.textWhite + " " + classes.pxy2} variant="body1" gutterBottom>
                    {item.c1}
                  </Typography>
                </Grid>
                <Grid xs={2} item>
                  <Typography className={classes.bgSecondary + " " + classes.textWhite + " " + classes.pxy2 + " " + classes.textCenter} variant="body1" gutterBottom>
                    {item.z1}
                  </Typography>
                </Grid>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
}
