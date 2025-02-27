import Link from "next/link";
import Styles from './Logo.module.scss';

export default function Logo() {
    return (
        <svg viewBox="0 0 310 156" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.logo}>
            <g clipPath="url(#clip0_298_33)">
                <path d="M190.4 5.90001L195.8 17.5L174 23.8L171 16.9L190.4 5.90001ZM152.5 80.3H147.5H128.8H123.8V68.8H128.8V22.8H123.8V11.3H128.8H146.2H147.5V68.8H152.5V80.3ZM65.7999 80.3H61.5999H43.3999V68.8V52.9C43.3999 50.3 42.8999 48.3 41.7999 46.7C40.6999 45.2 38.9999 44.4 36.5999 44.4C34.2999 44.4 32.4999 45.3 31.0999 47.1C29.7999 48.9 29.0999 51.1 29.0999 53.8V68.8H34.3999V80.3H29.0999H10.8999H5.5999V68.8H10.8999V22.8H5.5999V11.3H10.8999H27.9999H29.0999V36.7H29.3999C31.2999 34.6 33.3999 32.9 35.6999 31.5C37.9999 30.2 40.8999 29.5 44.3999 29.5C50.0999 29.5 54.3999 31.2 57.2999 34.7C60.1999 38.2 61.5999 42.7 61.5999 48.4V68.7H65.7999V80.3ZM185.1 24.8L196.9 21.4L201.4 20.1L199.4 15.8L194 4.20001L192.2 0.200012L188.4 2.30001L169 13.3L165.8 15.1L167.2 18.4L170.2 25.3L170.7 26.4C162 29.6 155.2 36.6 152.2 45.4V11.3V6.60001H147.5H146.2H128.8H123.8H119V11.3V22.8V27.5H123.7H124V43.5C119.3 32.3 108.3 24.5 95.4999 24.5C81.8999 24.5 70.3999 33.2 66.2999 45.4C65.7999 40 63.9999 35.4 60.9999 31.7C57.1999 27.1 51.5999 24.8 44.3999 24.8C40.3999 24.8 36.7999 25.6 33.8999 27.1V11.3V6.60001H29.1999H27.9999H10.8999H5.5999H0.899902V11.3V22.8V27.5H5.5999H6.0999V64H5.5999H0.899902V68.7V80.2V84.9H5.5999H10.8999H29.0999H34.3999H39.0999H43.3999H61.6999H65.8999H70.5999V80.2V73.6C76.1999 81.3 85.2999 86.3 95.5999 86.3C105 86.3 113.4 82.1 119.1 75.4V80.2V84.9H123.8H128.8H147.5H152.5H157.2V80.2V74.6C162.9 81.7 171.6 86.3 181.4 86.3C198.5 86.3 212.3 72.5 212.3 55.4C212.4 39.7 200.5 26.6 185.1 24.8Z" fill="#1E120D" />
                <path d="M286.7 74.7L292.1 86.3L270.4 92.6L267.4 85.7L286.7 74.7ZM248.9 149H243.9H225.2H220.2V137.5H225.2V91.5H220.2V80H225.2H242.6H243.9V137.5H248.9V149ZM163.8 149H158.7H140.5V137.5V121.4C140.5 118.9 140 116.9 139.1 115.4C138.2 113.9 136.5 113.1 134.2 113.1C131.9 113.1 130.2 114 129.1 115.8C127.9 117.6 127.4 119.8 127.4 122.5V137.5H131.7V149H127.4H111H109V121.4C109 118.9 108.5 116.9 107.6 115.4C106.7 113.9 105 113.1 102.7 113.1C100.4 113.1 98.7 114 97.6 115.8C96.4 117.6 95.9 119.8 95.9 122.5V137.5H101.3V149H95.9H77.7H72.6V137.5H77.7V111.3H72.6V99.7H95V107H95.3C97 104.1 99.1 101.9 101.6 100.4C104.1 98.9 107.2 98.1 110.9 98.1C114.2 98.1 117 98.9 119.4 100.4C121.8 101.9 123.6 104 124.9 106.7H125.2C127.3 103.4 129.7 101.2 132.4 99.9C135.1 98.7 138.1 98.1 141.3 98.1C144.3 98.1 146.9 98.6 149.1 99.6C151.3 100.6 153.1 102 154.5 103.8C155.9 105.6 156.9 107.7 157.6 110.1C158.3 112.5 158.6 115.1 158.6 118V137.5H163.7V149H163.8ZM281.5 93.5L293.2 90.1L297.7 88.8L295.7 84.5L290.4 73L288.6 69L284.8 71.1L265.4 82.1L262.2 83.9L263.6 87.2L266.6 94.1L267.1 95.2C258.4 98.4 251.6 105.4 248.6 114.2V80V75.3H243.9H242.6H225.2H220.2H215.5V80V91.5V96.2H220.2H220.5V112.2C215.8 101 204.8 93.2 192 93.2C178.9 93.2 167.7 101.4 163.2 112.9C163 111.4 162.7 110 162.3 108.7C161.5 105.7 160.1 103 158.4 100.8C156.5 98.4 154.1 96.6 151.3 95.3C148.5 94 145.2 93.4 141.5 93.4C137.6 93.4 134 94.2 130.7 95.7C128.9 96.5 127.1 97.7 125.6 99.2C124.6 98.2 123.4 97.3 122.2 96.5C119.1 94.5 115.3 93.5 111.2 93.5C106.9 93.5 103.1 94.4 100 96.1V95H68V96.1V99.8V111.3V116H72.7H73.1V132.7H72.7H68V137.4V149V153.7H72.7H77.8H96H101.4H106.1H109.1H111H127.4H131.7H136.4H140.5H158.7H163.8H168.5V149V144.5C174.2 151 182.5 155.2 191.9 155.2C201.3 155.2 209.7 151 215.4 144.3V149.1V153.8H220.1H225.1H243.8H248.8H253.5V149V143.4C259.2 150.5 267.9 155.1 277.7 155.1C294.8 155.1 308.6 141.3 308.6 124.2C308.8 108.4 296.8 95.3 281.5 93.5Z" fill="#1E120D" />
                <path d="M158.7 137.4V118C158.7 115.2 158.4 112.5 157.7 110.1C157 107.7 156 105.6 154.6 103.8C153.2 102 151.4 100.6 149.2 99.6C147 98.6 144.4 98.1 141.4 98.1C138.2 98.1 135.2 98.7 132.5 99.9C129.8 101.1 127.4 103.4 125.3 106.7H125C123.7 104 121.9 101.9 119.5 100.4C117.1 98.9 114.3 98.1 111 98.1C107.3 98.1 104.2 98.9 101.7 100.4C99.2 101.9 97.1 104.1 95.4 107H95V99.6H72.5V111.1H77.6V137.3H72.5V149H77.6H95.8H101.2V137.5H95.8V122.5C95.8 119.8 96.4 117.6 97.5 115.8C98.7 114 100.4 113.1 102.6 113.1C104.9 113.1 106.5 113.9 107.5 115.4C108.4 116.9 108.9 118.9 108.9 121.4V149H110.8H127.2H131.5V137.5H127.2V122.5C127.2 119.8 127.8 117.6 128.9 115.8C130.1 114 131.8 113.1 134 113.1C136.3 113.1 137.9 113.9 138.9 115.4C139.8 116.9 140.3 118.9 140.3 121.4V137.5V149H158.5H163.6V137.5H158.7V137.4ZM210.4 105.7C200.2 95.5 183.7 95.5 173.5 105.7C163.3 115.9 163.3 132.4 173.5 142.6C183.7 152.8 200.2 152.8 210.4 142.6C220.6 132.5 220.6 115.9 210.4 105.7ZM243.9 149H248.9V137.5H243.9V80H242.6H225.2H220.2V91.5H225.2V137.5H220.2V149H225.2H243.9ZM267.4 85.6L270.4 92.5L292.1 86.2L286.7 74.6L267.4 85.6ZM272.4 112.7C273.8 111.1 275.8 110.3 278.3 110.3C280.5 110.3 282.3 111.1 283.8 112.6C285.2 114.1 286.2 116.3 286.6 119.1H269.6C270 116.4 271 114.3 272.4 112.7ZM303.6 128.8C303.9 127.3 304 125.8 304 124.2C304 109.8 292.3 98.1 277.8 98.1C263.3 98.1 251.6 109.8 251.6 124.2C251.6 138.6 263.3 150.3 277.8 150.3C288.7 150.3 298 143.7 302 134.3H286C284.6 136.7 282.4 138 279.1 138C276.3 138 274.2 137.2 272.6 135.6C271 134 270 131.7 269.5 128.8H303.6Z" fill="white" />
                <path d="M171 16.9L174 23.8L195.7 17.5L190.3 5.90002L171 16.9ZM176 44C177.4 42.4 179.4 41.6 181.9 41.6C184.1 41.6 185.9 42.4 187.4 43.9C188.8 45.4 189.8 47.6 190.2 50.4H173.2C173.7 47.7 174.6 45.6 176 44ZM207.2 60.1C207.5 58.6 207.6 57.1 207.6 55.5C207.6 41.1 195.9 29.4 181.4 29.4C166.9 29.4 155.2 41.1 155.2 55.5C155.2 69.9 166.9 81.6 181.4 81.6C192.3 81.6 201.6 75 205.6 65.6H189.6C188.2 68 186 69.3 182.7 69.3C179.9 69.3 177.8 68.5 176.2 66.9C174.6 65.3 173.6 63 173.1 60.1H207.2ZM147.5 80.3H152.5V68.8H147.5V11.3H146.2H128.8H123.8V22.8H128.8V68.8H123.8V80.3H128.8H147.5ZM95.5001 29.4C81.1001 29.4 69.4001 41.1 69.4001 55.5C69.4001 69.9 81.1001 81.6 95.5001 81.6C109.9 81.6 121.6 69.9 121.6 55.5C121.6 41.1 109.9 29.4 95.5001 29.4ZM43.4001 68.8V80.3H61.6001H65.8001V68.8H61.6001V48.5C61.6001 42.8 60.2001 38.3 57.3001 34.8C54.4001 31.3 50.1001 29.6 44.4001 29.6C40.9001 29.6 38.0001 30.3 35.7001 31.6C33.4001 32.9 31.3001 34.6 29.4001 36.8H29.1001V11.3H28.0001H10.9001H5.6001V22.8H10.9001V68.8H5.6001V80.3H10.9001H29.1001H34.4001V68.8H29.1001V53.8C29.1001 51.1 29.8001 48.9 31.1001 47.1C32.4001 45.3 34.2001 44.4 36.6001 44.4C39.0001 44.4 40.7001 45.2 41.8001 46.7C42.9001 48.2 43.4001 50.3 43.4001 52.9V68.8Z" fill="white" />
                <path d="M107.5 44.8C107.5 45.7 106.8 46.5 105.8 46.5C104.9 46.5 104.1 45.8 104.1 44.8C104.1 43.9 104.8 43.1 105.8 43.1C106.7 43.2 107.5 43.9 107.5 44.8ZM102 41.4C102 42.5 101.1 43.4 100 43.4C98.9 43.4 98 42.5 98 41.4C98 40.3 98.9 39.4 100 39.4C101.1 39.4 102 40.3 102 41.4ZM106.7 36.4C106.7 37.8 105.5 39 104.1 39C102.7 39 101.5 37.8 101.5 36.4C101.5 35 102.7 33.8 104.1 33.8C105.6 33.8 106.7 34.9 106.7 36.4ZM105.3 54.5C105.1 55.3 104.2 55.7 103.5 55.5C102.7 55.3 102.3 54.4 102.5 53.7C102.7 52.9 103.6 52.5 104.3 52.7C105.1 52.9 105.5 53.8 105.3 54.5ZM109.7 50.8C109.5 50.7 109.2 50.6 108.9 50.5C105.9 49.3 99.8 47.9 92.9 51.7C86.5 55.3 84.2 60.7 83.3 64.1C82 63 79 61 74.8 62.5C74.7 62.5 74.6 62.7 74.5 62.8C74.4 62.9 74.5 63.1 74.5 63.2C74.5 63.3 74.6 63.3 74.6 63.3C80.2 67.9 81.4 74.4 81.4 74.5C81.4 74.7 81.5 74.8 81.7 74.9C81.9 75 82 74.9 82.2 74.8C84.8 72.7 85.5 70 85.2 68C88.3 68.6 94.3 69.6 100.6 66.1C107.4 62.3 110.1 57.3 111.1 54.6C111.2 54.5 111.1 54.3 111.1 54.2C111 54.1 110.9 54 110.7 54L108.4 53.7L109.8 51.4C109.9 51.3 109.9 51.1 109.8 51C110 51 109.9 50.9 109.7 50.8Z" fill="#1E120D" />
                <path d="M207.9 125.1C207.3 125.7 206.2 125.7 205.6 125.1C205 124.5 205 123.4 205.6 122.8C206.2 122.2 207.3 122.2 207.9 122.8C208.5 123.4 208.5 124.5 207.9 125.1ZM206.5 118.8C205.7 119.6 204.4 119.6 203.7 118.8C202.9 118 202.9 116.7 203.7 116C204.5 115.2 205.8 115.2 206.5 116C207.3 116.8 207.3 118.1 206.5 118.8ZM213.4 118.6C212.4 119.6 210.7 119.6 209.7 118.6C208.7 117.6 208.7 115.9 209.7 114.9C210.7 113.9 212.4 113.9 213.4 114.9C214.4 115.9 214.4 117.6 213.4 118.6ZM199.5 130.4C198.8 130.8 197.9 130.5 197.5 129.8C197.1 129.1 197.4 128.2 198.1 127.8C198.8 127.4 199.7 127.7 200.1 128.4C200.5 129.2 200.2 130.1 199.5 130.4ZM205.3 130.9C205.2 130.7 205.1 130.4 205 130.1C203.7 127.1 200.4 121.8 192.8 119.7C185.8 117.7 180.3 119.9 177.2 121.7C177.1 120 176.3 116.5 172.4 114.6C172.3 114.5 172.1 114.5 172 114.6C171.9 114.7 171.8 114.8 171.7 114.9C171.7 115 171.7 115 171.7 115.1C172.4 122.4 168.6 127.8 168.6 127.8C168.5 127.9 168.5 128.1 168.6 128.3C168.7 128.5 168.8 128.6 169 128.6C172.4 129 174.7 127.6 175.9 126C177.7 128.6 181.2 133.5 188.1 135.5C195.6 137.6 201 136 203.6 134.8C203.7 134.7 203.8 134.6 203.9 134.5C203.9 134.4 203.9 134.2 203.8 134.1L202.4 132.3L205 131.6C205.1 131.6 205.2 131.5 205.3 131.4C205.3 131.2 205.3 131.1 205.3 130.9Z" fill="#1E120D" />
            </g>
            <defs>
                <clipPath id="clip0_298_33">
                    <rect width="309.1" height="155.7" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}