bundle exec rake assets:clobber
cd frontend
npm install
cd ..
bundle exec rake assets:precompile
bundle exec rails server