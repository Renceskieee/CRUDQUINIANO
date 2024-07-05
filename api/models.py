from django.db import models

class Item(models.Model):
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female')
    ]
    CIVIL_STATUS_CHOICES = [
        ('single', 'Single'),
        ('married', 'Married'),
        ('widowed', 'Widowed'),
        ('divorced', 'Divorced')
    ]
    
    first_name = models.CharField(max_length=100, null=True)
    middle_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    address = models.CharField(max_length=100, null=True)
    email = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=100, null=True)
    
    sex = models.CharField(max_length=6, choices=GENDER_CHOICES, null=True)
    birthday = models.DateField(null=True)
    place_of_birth = models.CharField(max_length=100, null=True)
    civil_status = models.CharField(max_length=10, choices=CIVIL_STATUS_CHOICES, null=True)
    religion = models.CharField(max_length=100, null=True)
    citizenship = models.CharField(max_length=100, null=True)
    
    father_first_name = models.CharField(max_length=100, null=True)
    father_middle_name = models.CharField(max_length=100, null=True)
    father_last_name = models.CharField(max_length=100, null=True)
    father_occupation = models.CharField(max_length=100, null=True)
    
    mother_first_name = models.CharField(max_length=100, null=True)
    mother_middle_name = models.CharField(max_length=100, null=True)
    mother_last_name = models.CharField(max_length=100, null=True)
    mother_occupation = models.CharField(max_length=100, null=True)
    
    elementary = models.CharField(max_length=100, null=True)
    secondary = models.CharField(max_length=100, null=True)
    vocational_trade_course = models.CharField(max_length=100, null=True)
    college = models.CharField(max_length=100, null=True)
    course_program = models.CharField(max_length=100, null=True)
    favourite_group = models.CharField(max_length=100, null=True)

    def __str__(self):
        return f"{self.first_name} {self.middle_name} {self.last_name}"
