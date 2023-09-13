#!/usr/bin/env bash

if [ -z $1 ]; then #$1 - название слайса
  echo "Необходимо передать название слайса.";
  exit 1; # завершается скрипт с ошибкой
fi;

FSDlayerBaseNames=("app pages widgets features entities shared");

CDIR=$(pwd);
SHORTDIR=${CDIR##*/};
isIncludePath=false;
echo $SHORTDIR

for path in $FSDlayerBaseNames; do
  if [[ $SHORTDIR == *$path* ]]; then
    isIncludePath=true
  fi;
done;

if ! $isIncludePath; then
  echo "Вы находитесь в неверной папке. Запуск должен производиться из слоёв.";
  exit 1; # завершается скрипт с ошибкой
fi;
echo "OK";

mkdir -p $1/{ui,model,api,config}
touch $1/index.ts $1/ui/{index.tsx,styles.module.scss}

