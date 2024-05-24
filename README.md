## Get started

Prior to running HousingPad, ensure that postgres, and icu4c is installed

Make sure that postgres is installed on your computer with username='postgres' and password='postgres' or change the postgress credentials in config/database.yml
`brew install postgresql@15`

Install icu4c
`brew install icu4c`

Install gems with these commands
`gem install pg -- --with-pg-config=/opt/homebrew/opt/libpq/bin/pg_config`
`gem install pg -v '1.5.3' --source 'https://rubygems.org/'`
`gem install pg -- --with-pg-config=/opt/homebrew/opt/libpq/bin/pg_config`

Finally run the app by running these commands
`cd frontend`  
`npm install`  
`cd ..`  
`bundle`  
`bundle exec rake db:setup`  
`bundle exec rails s`  

## Example routes
localhost:3000/#
localhost:3000/#/homes/1
