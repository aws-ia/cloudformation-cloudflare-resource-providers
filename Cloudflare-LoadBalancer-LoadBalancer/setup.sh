#!/bin/bash
#
# This script runs in the buildspec before testing

cat example_inputs/inputs_1_create.json | sed "s/ZONE_ID/${ZONE_ID}/g" | sed "s/DOMAIN_NAME/${DOMAIN_NAME}/g" | sed "s/POOL_ID/${POOL_ID}/g" > inputs/inputs_1_create.json
cat example_inputs/inputs_1_update.json | sed "s/ZONE_ID/${ZONE_ID}/g" | sed "s/DOMAIN_NAME/${DOMAIN_NAME}/g" | sed "s/POOL_ID/${POOL_ID}/g" > inputs/inputs_1_update.json
cat test/integ-template.yml | sed "s/ZONE_ID/${ZONE_ID}/g" | sed "s/DOMAIN_NAME/${DOMAIN_NAME}/g" | sed "s/POOL_ID/${POOL_ID}/g" > test/integ.yml