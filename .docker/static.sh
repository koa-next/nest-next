#!/usr/bin/env /bin/sh

dir="./client/.next"
dest="${dir}/_next/"

mkdir -p ${dest}

cp -r ${dir}/static ${dest}
