if status is-login
	if uwsm check may-start; and uwsm select
		exec uwsm start default
	end
end

if status is-interactive
	alias dot="git --git-dir=$HOME/.dot --work-tree=$HOME"
	pyenv init - fish | source
end
