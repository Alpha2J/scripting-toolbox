# .zshrc if not exists, create one
# source ~/.bash_profile

# maven env
export M2_HOME=/Users/jeb/apps/maven-3.8.6
export PATH=$PATH:$M2_HOME/bin

# java env
export JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk1.8.0_341.jdk/Contents/Home"

# 新版git默认分支都是main，改回master
git config --global init.defaultBranch master



