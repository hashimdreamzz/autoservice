from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in autoservice/__init__.py
from autoservice import __version__ as version

setup(
	name="autoservice",
	version=version,
	description="Automotive Repair and Service",
	author="Hashim",
	author_email="hashimdreamzz@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
