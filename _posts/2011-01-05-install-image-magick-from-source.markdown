---
layout: post
title: Install ImageMagick from source
header: Install ImageMagick from source
meta_keywords: Install ImageMagick from source
meta_keywords: Install ImageMagick from source
categories: rubygem imagemagick
---

Lets start install ImageMagick 6.6.6-10 on Ubuntu 10.4 LTS

First remove existing version of ImageMagick if it was already installed.
{% highlight bash %}
sudo apt-get remove imagemagick
{% endhighlight %}

Update your machine with required application dependencies
{% highlight bash %}
sudo apt-get update
sudo apt-get install libperl-dev gcc libjpeg62-dev libbz2-dev libtiff4-dev libwmf-dev libz-dev libpng12-dev libx11-dev libxt-dev libxext-dev libxml2-dev libfreetype6-dev liblcms1-dev libexif-dev perl libjasper-dev libltdl3-dev graphviz gs-gpl pkg-config
{% endhighlight %}

Get your latest source ImageMagick.tar.gz or select your download from Archive
Download using
{% highlight bash %}
wget ftp://ftp.imagemagick.org/pub/ImageMagick/ImageMagick.tar.gz
{% endhighlight %}

extract source from tar using
{% highlight bash %}
tar -xzf ImageMagick.tar.gz
cd ImageMagick-6.5.0-0
{% endhighlight %}

Just configure, compile, make and install using
{% highlight bash %}
./configure
make
sudo make install
{% endhighlight %}

Now image magick got installed in your ubuntu box, but you are need to add the following lines to ~/.bashrc

{% highlight bash %}
export LD_LIBRARY_PATH=/usr/local/lib
{% endhighlight %}

ImageMagick installation is now completed lets check them,
{% highlight bash %}
convert --version
{% endhighlight %}

The above comand will respond you
{% highlight bash %}
Version: ImageMagick 6.6.2-6 2010-12-02 Q16 http://www.imagemagick.org
Copyright: Copyright (C) 1999-2010 ImageMagick Studio LLC
Features: OpenMP
{% endhighlight %}
