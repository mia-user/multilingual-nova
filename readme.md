# Multilingual Nova (using default nova fields)

This field allow you to support multilingual index/forms/deatils CRUD using [Laravel Nova](https://nova.laravel.com) and [Spatie Translatable](https://github.com/spatie/laravel-translatable).

### Screenshots

TBD

### Install

Run this command into your nova project:
`composer require digitalcloud/multilingual-nova`

### Add it to your Nova Resource:

```php
use Digitalcloud\MultilingualNova\Multilingual;

Multilingual::make('translations'),
```

Note that "Translations" is not a database column like Most of Nova Fields, it's just a Label. the field will only appear in index and details pages, no forms feilds will be added.

### Defining Locales
Locales can be defined via config file ```config/translatable.php``` (config file can be created via [spatie/laravel-translatable](https://github.com/spatie/laravel-translatable#installation) package) by adding a ```locales``` array:

```
// config/translatable.php
return [
    ...
    'locales' => [
        'ar' => 'Arabic',
        'en' => 'English',
        'de' => 'German',
    ],
];
```

Alternatively you can "override" the config locales with the ```setLocales(...)``` method:

```
Multilingual::make('Description')->setLocales([
        'ar' => 'Arabic',
        'en' => 'English',
        'de' => 'German',
]),
```

### Features

* Display supported locales in the index view
* Allow you to edit any resource in any supported locale
* NO ADDITIONAL FIELDS, just use the default laravel form fields
* Quick switch between languages in the details view
* Support Relations fields and sub tables
* Autofill form fields with default/fallback language content
* Display translated/untranslated status for each locale
* List the supported locale using Config file

### Roadmap

* [x] Display translated/untranslated status for each locale
* [x] List the supported locale using Config file
* [ ] Manage the supported locale using Database resource
* [ ] Autodetect translatable Models
* [ ] Better support for untranslatable fields 
