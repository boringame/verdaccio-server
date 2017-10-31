Set UAC = CreateObject("Shell.Application")
Set Shell = CreateObject("WScript.Shell")
Dim ucCount
Dim args
args = ""
For ucCount=1 To WScript.Arguments.count - 1 Step 1
	args = args & " " & WScript.Arguments(ucCount)
Next
UAC.ShellExecute WScript.arguments(0), args, "", "runas", 5