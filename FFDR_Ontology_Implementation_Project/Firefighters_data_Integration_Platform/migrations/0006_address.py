# Generated by Django 4.0.2 on 2022-02-25 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Firefighters_data_Integration_Platform', '0005_remove_alarmsystemannunciatorpanel_controlpanel_ptr_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
    ]