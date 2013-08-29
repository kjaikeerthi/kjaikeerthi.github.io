---
layout: post
title: Install Rails 3 on Ubuntu 10.4
header: Install Rails 3 on Ubuntu 10.4
meta_keywords: Install Rails 3 on Ubuntu 10.4
meta_keywords: Install Rails 3 on Ubuntu 10.4 using rvm with git integration
categories: rvm rails ubuntu rubygem
---
Lets install Rails 3 stable on ubuntu 10.4. I am going to use Ruby 1.9.2 with Ruby Version Manager and Ubuntu 10.4 32 bit version

Initially, install the necessary tools for our installation

{% highlight bash %}
sudo apt-get install gcc g++ build-essential libssl-dev libreadline5-dev zlib1g-dev linux-headers-generic libsqlite3-dev
{% endhighlight %}

Install  Ruby 1.9.2 from Ruby version Manager (RVM).  Official Rvm references available at [here](http://rvm.beginrescueend.com/). Make sure that curl and git installed (from above).
{% highlight bash %}
bash < <( curl http://rvm.beginrescueend.com/releases/rvm-install-head )
{% endhighlight %}
After installing Rvm for the first time in your machine, you must write the following script in your profile page at very end after the load path.
{% highlight bash %}
[[ -s "$HOME/.rvm/scripts/rvm" ]] && . "$HOME/.rvm/scripts/rvm"
{% endhighlight %}
After adding the above lines in to the profile, you have to make some more changes in Ubuntu.
{% highlight bash %}
[ -z "$PS1" ] && return
{% endhighlight %}
You need to replace the above statement with if and indent code stated below till rvm loads script and add fi to the end of if statement. After the changes, your code will look like
{% highlight bash %}
if [[ -n "$PS1" ]]; then
# Existing code here...
fi
[[ -s "$HOME/.rvm/scripts/rvm" ]] && . "$HOME/.rvm/scripts/rvm" # Loads RVM into terminal.
{% endhighlight %}
we can make sure that the rvm is installed successfully on our machine by using the following command in the new terminal
{% highlight bash %}
$ type rvm | head -n1
{% endhighlight %}
if your rvm installed properly, you will get response as,
{% highlight bash %}
rvm is a function
{% endhighlight %}
Now we have successfully installed our RVM. Next we have to install Ruby 1.9.2. Just enter the below code in you terminal.
{% highlight bash %}
$ rvm install 1.9.2
{% endhighlight %}

IIt will take several minutes to install in your machine. After it has been installed we have to make Ruby 1.9.2 as default ruby version on to our machine.The following code will help you to achieve that
{% highlight bash %}
$ rvm --default 1.9.2
{% endhighlight %}

you can test your ruby version by
{% highlight bash %}
$ ruby -v
ruby 1.9.2p0 (2010-08-18 revision 29036) [i686-linux]
{% endhighlight %}

Lets install Rails 3, simply typing following command in your terminal
{% highlight bash %}
gem install rails
{% endhighlight %}

make sure rails 3 is installed
{% highlight bash %}
rails -v
{% endhighlight %}

After installing rails we have to install sqllite3, to install use following lines on your terminal

{% highlight bash %}
sudo apt-get install sqlite3 libsqlite3-dev
{% endhighlight %}

Lets finally install sqllite gem by using

{% highlight bash %}
sudo gem install sqlite3-ruby
{% endhighlight %}

Now all your dependecies for installing rails3 are completed, create your "hello world" project and run it.
