import git
import win32process
import win32event
import time
import threading




class AutoUpdate:
    def __init__(self,path):
        self.path = path
        self.w = "master"
        self.r = "origin/master"
        try:
            self.repo = git.Repo.init(self.path)
            self.repo.remotes.origin.fetch("master")
            self.repo.git.checkout(self.w)
            print("master:",self.repo.commit(self.w))
            print("origin/master:",self.repo.commit(self.r))
            if self.repo.commit(self.w) != self.repo.commit(self.r):
                print("need update")
                print("process update.....")
                self.repo.git.merge(self.r)
            else:
                print("It's up to date  ")
        except git.exc.GitCommandError as err:
            print(err)

    def run(self):
        while True:           
            cmd = self.path + "/upsms.exe -p 7100"
            self.handle = win32process.CreateProcess(None,'c:/upsms_x64/upsms.exe -p 7100',None,None,0,win32process.CREATE_NO_WINDOW,None,'c:/upsms_x64',win32process.STARTUPINFO())
            win32event.WaitForSingleObject(self.handle[0], -1)
            time.sleep(5)
            print("reboot:%s" % time.ctime())

    def checkandupdate(self):
        while True:
            time.sleep(60)
            try:
                self.repo.remotes.origin.fetch("master")
                self.repo.git.checkout(self.w)
                print("master:",self.repo.commit(self.w))
                print("origin/master:",self.repo.commit(self.r))
                if self.repo.commit(self.w) != self.repo.commit(self.r):
                    print("need update")
                    print("process update.....")
                    win32process.TerminateProcess(self.handle[0], 0)
                    self.repo.git.merge(self.r)
                else:
                    print("It's up to date  ")
            except git.exc.GitCommandError as err:
                print(err)
            except pywintypes.error as err:
                print(err)
                
            

class myThread(threading.Thread):
    def __init__(self,task):
        threading.Thread.__init__(self)
        self.task = task
    def run(self):
        self.task.checkandupdate()
            
task = AutoUpdate("c:/upsms_x64")
th = myThread(task)
th.start()
task.run()           
