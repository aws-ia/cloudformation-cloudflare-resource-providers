#!/bin/bash
#
# This script runs in the buildspec before testing

#!/bin/bash
#
# This script runs in the buildspec before testing

cat example_inputs/inputs_1_create.json | sed "s/ACCOUNT_ID/${ACCOUNT_ID}/g" | sed "s/IP_ADDRESS/${IP_ADDRESS}/g" | sed "s/IP_ADDRESS_2/${IP_ADDRESS_2}/g" | sed "s/MONITOR_ID/${MONITOR_ID}/g" > inputs/inputs_1_create.json
cat example_inputs/inputs_1_update.json | sed "s/ACCOUNT_ID/${ACCOUNT_ID}/g" | sed "s/IP_ADDRESS/${IP_ADDRESS}/g" | sed "s/IP_ADDRESS_2/${IP_ADDRESS_2}/g" | sed "s/MONITOR_ID/${MONITOR_ID}/g" > inputs/inputs_1_update.json
cat test/integ-template.yml | sed "s/ACCOUNT_ID/${ACCOUNT_ID}/g" | sed "s/IP_ADDRESS/${IP_ADDRESS}/g" | sed "s/IP_ADDRESS_2/${IP_ADDRESS_2}/g" | sed "s/MONITOR_ID/${MONITOR_ID}/g" > test/integ.yml