import Link from "next/link";
import Styles from './Logo.module.scss';

export default function Logo() {
    return (
        <Link href={"/"}>
            <svg className={Styles.logo} viewBox="0 0 371 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M152 4.5L156.3 13.8L138.9 18.9L136.5 13.3L152 4.5ZM121.6 64.2H117.6H102.6H98.6V55H102.6V18.1H98.6V8.9H102.6H116.5H117.6V55H121.6V64.2ZM52.1 64.2H48.8H34.1V55V42.2C34.1 40.1 33.7 38.5 32.8 37.2C31.9 36 30.5 35.3 28.6 35.3C26.7 35.3 25.3 36 24.2 37.4C23.1 38.8 22.6 40.6 22.6 42.8V54.8H26.9V64H22.7H8H3.8V54.8H8V18.1H3.8V8.9H8H21.8H22.7V29.3H22.9C24.4 27.6 26.1 26.2 27.9 25.2C29.8 24.1 32.1 23.6 34.9 23.6C39.5 23.6 43 25 45.3 27.8C47.6 30.6 48.8 34.3 48.8 38.8V55.1H52.1V64.2ZM147.8 19.7L157.2 17L160.8 16L159.2 12.6L154.9 3.2L153.4 0L150.4 1.7L134.9 10.5L132.4 11.9L133.6 14.6L136 20.2L136.4 21C129.4 23.6 124 29.2 121.5 36.2V8.8V5H117.7H116.6H102.7H98.7H94.9V8.8V18V21.8H98.7H98.9V34.6C95.1 25.8 86.2 19.5 75.9 19.5C65 19.5 55.8 26.5 52.4 36.3C52 31.9 50.6 28.2 48.1 25.3C45 21.6 40.6 19.7 34.8 19.7C31.6 19.7 28.7 20.3 26.4 21.6V8.8V5H22.6H21.7H8H3.8H0V8.8V18V21.8H3.8H4.2V51.1H3.8H0V54.9V64.1V67.9H3.8H8H22.6H26.9H30.7H34.1H48.7H52H55.9V64.1V58.8C60.4 65 67.7 69 75.9 69C83.5 69 90.2 65.6 94.8 60.3V64.1V67.9H98.6H102.6H117.6H121.6H125.4V64.1V59.6C129.9 65.3 137 69 144.8 69C158.5 69 169.6 57.9 169.6 44.2C169.7 31.6 160.1 21.1 147.8 19.7Z" fill="#322A7E" />
                <path d="M352.8 4.49998L357.1 13.8L339.7 18.9L337.3 13.3L352.8 4.49998ZM322.4 64.2H318.4H303.4H299.4V55H303.4V18.1H299.4V8.89997H303.4H317.3H318.4V55H322.4V64.2ZM254.1 64.1H250H235.4V54.9V42C235.4 40 235 38.4 234.3 37.2C233.6 36 232.2 35.4 230.4 35.4C228.6 35.4 227.2 36.1 226.3 37.5C225.4 38.9 224.9 40.7 224.9 42.9V54.9H228.4V64.1H224.9H211.8H210.3V42C210.3 40 209.9 38.4 209.2 37.2C208.5 36 207.1 35.4 205.3 35.4C203.5 35.4 202.1 36.1 201.2 37.5C200.3 38.9 199.8 40.7 199.8 42.9V54.9H204.1V64.1H199.8H185.2H180.9V54.9H185V33.9H180.9V24.7H198.9H199V30.5H199.2C200.6 28.2 202.3 26.4 204.3 25.2C206.3 24 208.8 23.4 211.8 23.4C214.4 23.4 216.7 24 218.6 25.2C220.5 26.4 222 28.1 223 30.3H223.2C224.9 27.7 226.8 25.9 229 24.9C231.2 23.9 233.5 23.4 236.1 23.4C238.5 23.4 240.6 23.8 242.4 24.6C244.2 25.4 245.6 26.5 246.7 27.9C247.8 29.3 248.6 31 249.2 32.9C249.7 34.8 250 36.9 250 39.2V54.8H254.1V64.1ZM348.6 19.7L358 17L361.6 16L360 12.6L355.7 3.29998L354.2 0.0999756L351.2 1.79998L335.6 10.5L333.1 11.9L334.3 14.6L336.7 20.2L337.1 21C330.1 23.6 324.7 29.2 322.2 36.2V8.79998V4.99998H318.4H317.3H303.4H299.4H295.6V8.79998V18V21.8H299.4H299.6V34.6C295.9 25.7 287 19.4 276.7 19.4C266.2 19.4 257.2 26 253.6 35.2C253.4 34 253.2 32.9 252.9 31.8C252.2 29.4 251.2 27.3 249.8 25.5C248.3 23.6 246.4 22.1 244.1 21.1C241.9 20.1 239.2 19.6 236.2 19.6C233.1 19.6 230.2 20.2 227.5 21.4C226 22.1 224.7 23 223.4 24.2C222.6 23.4 221.7 22.6 220.7 22C218.2 20.4 215.2 19.6 211.8 19.6C208.3 19.6 205.3 20.3 202.8 21.7V20.8H177.1V21.7V24.6V33.8V37.6H180.9H181.2V51H180.9H177.1V54.8V64V67.8H180.9H185H199.6H203.9H207.7H210.1H211.6H224.7H228.2H232H235.3H249.9H254H257.8V64V60.5C262.3 65.7 269.1 69.1 276.5 69.1C284.1 69.1 290.8 65.7 295.4 60.4V64.2V68H299.2H303.2H318.2H322.2H326V64.2V59.7C330.5 65.4 337.6 69.1 345.4 69.1C359.1 69.1 370.2 58 370.2 44.3C370.4 31.6 360.9 21.1 348.6 19.7Z" fill="#F14E0D" />
                <path d="M250 54.9V39.3C250 37 249.7 34.9 249.2 33C248.7 31.1 247.8 29.4 246.7 28C245.6 26.6 244.2 25.5 242.4 24.7C240.6 23.9 238.6 23.5 236.1 23.5C233.5 23.5 231.1 24 229 25C226.8 26 224.9 27.8 223.2 30.4H223C222 28.2 220.5 26.5 218.6 25.3C216.7 24.1 214.4 23.5 211.8 23.5C208.8 23.5 206.3 24.1 204.3 25.3C202.3 26.5 200.6 28.3 199.2 30.6H199V24.7H180.9V33.9H185V54.9H180.9V64.1H185H199.6H203.9V54.9H199.6V42.9C199.6 40.7 200.1 38.9 201 37.5C201.9 36.1 203.3 35.4 205.1 35.4C207 35.4 208.3 36 209 37.2C209.7 38.4 210.1 40 210.1 42V64.2H211.6H224.7H228.2V55H224.7V43C224.7 40.8 225.2 39 226.1 37.6C227 36.2 228.4 35.5 230.2 35.5C232.1 35.5 233.4 36.1 234.1 37.3C234.8 38.5 235.2 40.1 235.2 42.1V55V64.2H249.8H253.9V55H250V54.9ZM291.5 29.5C283.3 21.3 270.1 21.3 261.9 29.5C253.7 37.7 253.7 50.9 261.9 59.1C270.1 67.3 283.3 67.3 291.5 59.1C299.7 50.9 299.7 37.6 291.5 29.5ZM318.4 64.2H322.4V55H318.4V8.8H317.3H303.4H299.4V18H303.4V54.9H299.4V64.1H303.4H318.4V64.2ZM337.2 13.3L339.6 18.9L357 13.8L352.8 4.5L337.2 13.3ZM341.3 35.1C342.4 33.8 344 33.2 346 33.2C347.8 33.2 349.2 33.8 350.4 35.1C351.6 36.3 352.3 38.1 352.6 40.3H339C339.4 38 340.1 36.3 341.3 35.1ZM366.3 47.9C366.5 46.7 366.7 45.5 366.7 44.2C366.7 32.6 357.3 23.3 345.7 23.3C334.1 23.3 324.7 32.7 324.7 44.2C324.7 55.7 334.1 65.1 345.7 65.1C354.4 65.1 361.9 59.8 365.1 52.2H352.3C351.2 54.2 349.4 55.1 346.8 55.1C344.6 55.1 342.8 54.5 341.6 53.2C340.3 51.9 339.5 50.1 339.1 47.8L366.3 47.9Z" fill="#322A7E" />
                <path d="M136.4 13.3L138.8 18.9L156.2 13.8L152 4.5L136.4 13.3ZM140.5 35.1C141.6 33.8 143.2 33.2 145.2 33.2C147 33.2 148.4 33.8 149.6 35.1C150.8 36.3 151.5 38.1 151.8 40.3H138.2C138.6 38 139.4 36.3 140.5 35.1ZM165.5 47.9C165.7 46.7 165.9 45.5 165.9 44.2C165.9 32.6 156.5 23.3 144.9 23.3C133.3 23.3 123.9 32.7 123.9 44.2C123.9 55.7 133.3 65.1 144.9 65.1C153.6 65.1 161.1 59.8 164.3 52.2H151.5C150.4 54.2 148.6 55.1 146 55.1C143.8 55.1 142 54.5 140.8 53.2C139.5 51.9 138.7 50.1 138.3 47.8L165.5 47.9ZM117.6 64.2H121.6V55H117.6V8.8H116.5H102.6H98.6V18H102.6V54.9H98.6V64.1H102.6H117.6V64.2ZM75.9 23.3C64.3 23.3 55 32.7 55 44.2C55 55.7 64.3 65.2 75.9 65.2C87.5 65.2 96.8 55.8 96.8 44.3C96.8 32.8 87.5 23.3 75.9 23.3ZM34.1 54.9V64.1H48.7H52V54.9H48.7V38.6C48.7 34.1 47.5 30.4 45.2 27.6C42.9 24.8 39.5 23.5 34.9 23.5C32.1 23.5 29.8 24 27.9 25.1C26 26.2 24.4 27.5 22.9 29.2H22.7V8.8H21.8H8.00005H3.80005V18H8.00005V54.9H3.80005V64.1H8.00005H22.6H26.9V54.9H22.7V42.9C22.7 40.7 23.2 38.9 24.3 37.5C25.4 36.1 26.8 35.4 28.7 35.4C30.6 35.4 32 36 32.9 37.3C33.8 38.5 34.2 40.2 34.2 42.3L34.1 54.9Z" fill="#F14E0D" />
                <path d="M85.5 35.7C85.5 36.4 84.9 37 84.2 37C83.5 37 82.9 36.4 82.9 35.7C82.9 35 83.5 34.4 84.2 34.4C84.9 34.4 85.5 35 85.5 35.7ZM81.0999 33C81.0999 33.9 80.4 34.6 79.5 34.6C78.6 34.6 77.9 33.9 77.9 33C77.9 32.1 78.6 31.4 79.5 31.4C80.4 31.3 81.0999 32.1 81.0999 33ZM84.9 28.9C84.9 30.1 84 31 82.8 31C81.6 31 80.7 30.1 80.7 28.9C80.7 27.7 81.6 26.8 82.8 26.8C84 26.8 84.9 27.8 84.9 28.9ZM83.8 43.5C83.6 44.1 82.9 44.5 82.3 44.3C81.7 44.1 81.3 43.4 81.5 42.8C81.7 42.2 82.4 41.8 83 42C83.6 42.2 84 42.9 83.8 43.5ZM87.3 40.5C87.1 40.4 86.9 40.3 86.7 40.2C84.3 39.2 79.4 38.1 73.9 41.2C68.8 44.1 66.9 48.4 66.2 51.2C65.2 50.3 62.7 48.7 59.4 49.9C59.3 49.9 59.2 50 59.2 50.1C59.2 50.2 59.2 50.3 59.2 50.4L59.3 50.5C63.8 54.2 64.7 59.4 64.7 59.5C64.7 59.6 64.8 59.7 64.9 59.8C65 59.8 65.2 59.8 65.3 59.7C67.4 58 68 55.9 67.7 54.3C70.2 54.8 75 55.6 80 52.8C85.5 49.7 87.6 45.7 88.4 43.6C88.4 43.5 88.4 43.4 88.4 43.3C88.3 43.2 88.1999 43.1 88.0999 43.1L86.3 42.9L87.4 41.1C87.5 41 87.5 40.9 87.4 40.8C87.5 40.6 87.4 40.6 87.3 40.5Z" fill="#322A7E" />
                <path d="M289.5 45C289 45.5 288.1 45.5 287.6 45C287.1 44.5 287.1 43.6 287.6 43.1C288.1 42.6 289 42.6 289.5 43.1C290 43.6 290 44.5 289.5 45ZM288.4 40C287.8 40.6 286.7 40.6 286.1 40C285.5 39.4 285.5 38.3 286.1 37.7C286.7 37.1 287.8 37.1 288.4 37.7C289 38.3 289 39.3 288.4 40ZM293.9 39.8C293.1 40.6 291.8 40.6 290.9 39.8C290.1 39 290.1 37.7 290.9 36.8C291.7 36 293 36 293.9 36.8C294.7 37.6 294.7 39 293.9 39.8ZM282.8 49.3C282.2 49.6 281.5 49.4 281.2 48.8C280.9 48.2 281.1 47.5 281.7 47.2C282.3 46.9 283 47.1 283.3 47.7C283.6 48.2 283.4 49 282.8 49.3ZM287.4 49.7C287.3 49.5 287.2 49.3 287.1 49.1C286.1 46.7 283.4 42.5 277.3 40.7C271.7 39.1 267.2 40.9 264.8 42.3C264.7 41 264.1 38.1 260.9 36.6C260.8 36.6 260.7 36.5 260.6 36.6C260.5 36.6 260.4 36.7 260.4 36.8V36.9C261 42.7 257.9 47 257.9 47.1C257.8 47.2 257.8 47.4 257.9 47.5C258 47.6 258.1 47.7 258.2 47.7C260.9 48 262.8 46.9 263.8 45.6C265.2 47.7 268 51.6 273.6 53.2C279.6 54.9 284 53.6 286.1 52.6C286.2 52.6 286.3 52.5 286.3 52.3C286.3 52.2 286.3 52.1 286.2 52L285.1 50.6L287.2 50.1C287.3 50.1 287.4 50 287.4 49.9C287.4 49.9 287.4 49.8 287.4 49.7Z" fill="#F14E0D" />
            </svg>
        </Link>
    );
}