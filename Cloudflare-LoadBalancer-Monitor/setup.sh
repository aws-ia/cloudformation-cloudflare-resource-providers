#!/bin/bash
#
# This script runs in the buildspec before testing

cat example_inputs/inputs_1_create.json | sed "s/ACCOUNT_ID/${ACCOUNT_ID}/g" > inputs/inputs_1_create.json
cat example_inputs/inputs_1_update.json | sed "s/ACCOUNT_ID/${ACCOUNT_ID}/g" > inputs/inputs_1_update.json
cat test/integ-template.yml | sed "s/ACCOUNT_ID/${ACCOUNT_ID}/g" > test/integ.yml