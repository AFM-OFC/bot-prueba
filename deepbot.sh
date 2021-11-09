#!/usr/bin/bash
NOCOLOR='\033[0m'
RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
LIGHTGRAY='\033[0;37m'
DARKGRAY='\033[1;30m'
PURPLE='\033[1;31m'
LIGHTGREEN='\033[1;32m'
YELLOW='\033[1;33m'
LIGHTRED='\033[1;34m'
LIGHTPURPLE='\033[1;35m'
LIGHTCYAN='\033[1;36m'
WHITE='\033[1;37m'

 echo -e " ${YELLOW}Iniciando..."
sleep 4
clear

echo -e " ${YELLOW}Utilizando apt-get update..."
sleep 4
apt-get update
echo -e " ${YELLOW}Utilizando apt-get upgrade..."
sleep 4
apt-get upgrade
echo -e " ${YELLOW}Utilizando apt-get install nodejs..."
sleep 4
apt-get install nodejs
echo -e " ${YELLOW}Utilizando apt-get install libwebp..."
sleep 4
apt-get install libwebp
echo -e " ${YELLOW}Utilizando apt-get install mc..."
sleep 4
apt-get install mc
echo -e " ${YELLOW}Utilizando pt-get install ffmpeg..."
sleep 4
apt-get install ffmpeg
echo -e " ${YELLOW}Utilizando apt-get install wget..."
sleep 4
apt-get install wget
echo -e " ${YELLOW}Utilizando apt-get install tesseract..."
sleep 4
apt-get install tesseract
echo -e " ${YELLOW}Utilizando apt-get install nmap..."
sleep 4
apt-get install nmap
echo -e " ${YELLOW}Utilizando wget..."
sleep 4
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
echo -e " ${YELLOW}Utilizando npm install..."
sleep 4
npm install
echo -e " ${YELLOW} Todo lo necesatio fue imstalado."
echo -e " ${YELLOW} No hay actualizaciones"
echo -e " ${YELLOW} Use o comando: ${GREEN}npm start ${YELLOW}para iniciar el bot."
