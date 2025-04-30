if status is-interactive
    alias dot "git --git-dir=$HOME/.dot --work-tree=$HOME"
end

if status is-login
    if uwsm check may-start; and uwsm select
        exec systemd-cat -t uwsm_start uwsm start default
    end
end

