#!/bin/bash
set -e
service mysql start
mysql < /db/temporadas.sql
service mysql stop