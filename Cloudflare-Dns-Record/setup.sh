#!/bin/bash
#
# This script runs in the buildspec before testing

cat example_inputs/inputs_1_create.json | sed "s/ZONE_ID/${ZONE_ID}/g" | sed "s/DNS_NAME/${DNS_NAME}/g" | sed "s/IP_ADDRESS/${IP_ADDRESS}/g" > inputs/inputs_1_create.json
cat example_inputs/inputs_1_update.json | sed "s/ZONE_ID/${ZONE_ID}/g" | sed "s/DNS_NAME/${DNS_NAME}/g" | sed "s/IP_ADDRESS/${IP_ADDRESS}/g" > inputs/inputs_1_update.json
cat test/integ-template.yml | sed "s/ZONE_ID/${ZONE_ID}/g" | sed "s/DNS_NAME/${DNS_NAME}/g" | sed "s/IP_ADDRESS/${IP_ADDRESS}/g" > test/integ.yml