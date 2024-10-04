# TCR Versie van [whatthecommit.com](https://whatthecommit.com/)

Meer weten? Ga naar de orginele [repo](https://github.com/ngerakines/commitment)

Net als Commitment heeft de TCR versie ook een plain text output hier: https://whatthecommit.com/index.txt
Automatiseer die shit (soortvan):

```
git config --global alias.yolo '!git commit -m "$(curl -s https://whatthecommit.com/index.txt)"'
```

# License

Copyright (c) 2010-2024 Nick Gerakines <nick@gerakines.net>

This project and its contents are open source under the MIT license.

Forked door Benno van Dorst <9024828@tcrmbo.nl>

Ik ben niet aansprakelijk voor de PR die gesubmit worden!
