#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
output_file="$script_dir/dinavo-erklaervideo-vertical.mp4"
font_regular="/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
font_bold="/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

ffmpeg -y \
  -f lavfi -i "color=c=0x07111f:s=1080x1920:r=30:d=25" \
  -f lavfi -i "sine=frequency=110:sample_rate=48000:duration=25" \
  -f lavfi -i "sine=frequency=164.81:sample_rate=48000:duration=25" \
  -f lavfi -i "sine=frequency=220:sample_rate=48000:duration=25" \
  -filter_complex "
    [0:v]
    drawbox=x=0:y=0:w=1080:h=1920:color=0x07111f:t=fill,
    drawbox=x=760:y=-110:w=500:h=500:color=0x132b31@0.85:t=fill,
    drawbox=x=-180:y=1480:w=620:h=620:color=0x0d1e3d@0.92:t=fill,

    drawtext=fontfile=${font_bold}:text='DINA':fontsize=78:fontcolor=white:x=70:y=70,
    drawtext=fontfile=${font_bold}:text='VO':fontsize=78:fontcolor=0x7df0ad:x=270:y=70,
    drawbox=x=665:y=72:w=360:h=70:color=0xeafbf2:t=fill,
    drawtext=fontfile=${font_bold}:text='KOSTENLOS · BETA':fontsize=28:fontcolor=0x07643e:x=698:y=92,

    drawbox=x=55:y=205:w=970:h=145:color=0x112033@0.96:t=fill,
    drawtext=fontfile=${font_bold}:text='Kleinanzeigen\: 15 €':fontsize=58:fontcolor=white:x=(w-text_w)/2:y=242:enable='between(t,0,4.999)',
    drawtext=fontfile=${font_bold}:text='eBay verkauft\: 45 €':fontsize=58:fontcolor=white:x=(w-text_w)/2:y=242:enable='between(t,5,11.999)',
    drawtext=fontfile=${font_bold}:text='Nach Gebühren\: 21 € —':fontsize=49:fontcolor=0x7df0ad:x=(w-text_w)/2:y=222:enable='gte(t,12)',
    drawtext=fontfile=${font_bold}:text='lohnt sich das für dich?':fontsize=49:fontcolor=white:x=(w-text_w)/2:y=282:enable='gte(t,12)',

    drawtext=fontfile=${font_bold}:text='Deal prüfen':fontsize=58:fontcolor=white:x=70:y=405,
    drawtext=fontfile=${font_regular}:text='Eintragen. Ergebnis sofort sehen.':fontsize=31:fontcolor=0xb9c7d9:x=70:y=475,

    drawbox=x=55:y=545:w=970:h=510:color=0xf8fafc:t=fill,
    drawtext=fontfile=${font_bold}:text='Was ist es?':fontsize=30:fontcolor=0x334155:x=95:y=585,
    drawtext=fontfile=${font_regular}:text='PlayStation 5 Controller':fontsize=38:fontcolor=0x0f172a:x=95:y=635,
    drawbox=x=95:y=692:w=890:h=2:color=0xcbd5e1:t=fill,

    drawtext=fontfile=${font_bold}:text='Was zahlst du?':fontsize=30:fontcolor=0x334155:x=95:y=735,
    drawtext=fontfile=${font_bold}:text='1':fontsize=48:fontcolor=0x0f172a:x=830:y=775:enable='between(t,1.1,1.55)',
    drawtext=fontfile=${font_bold}:text='15,00 €':fontsize=48:fontcolor=0x0f172a:x=773:y=775:enable='gte(t,1.55)',
    drawbox=x=95:y=845:w=890:h=2:color=0xcbd5e1:t=fill,

    drawtext=fontfile=${font_bold}:text='Für wie viel verkaufen?':fontsize=30:fontcolor=0x334155:x=95:y=890,
    drawtext=fontfile=${font_bold}:text='4':fontsize=48:fontcolor=0x0f172a:x=830:y=930:enable='between(t,5.4,5.85)',
    drawtext=fontfile=${font_bold}:text='45,00 €':fontsize=48:fontcolor=0x0f172a:x=773:y=930:enable='gte(t,5.85)',

    drawbox=x=55:y=1100:w=970:h=170:color=0x112033@0.96:t=fill:enable='gte(t,9)',
    drawtext=fontfile=${font_bold}:text='Gebühren + Versand':fontsize=34:fontcolor=0xb9c7d9:x=90:y=1140:enable='gte(t,9)',
    drawtext=fontfile=${font_bold}:text='9,00 €':fontsize=48:fontcolor=white:x=800:y=1130:enable='gte(t,9)',
    drawtext=fontfile=${font_regular}:text='Alle Kosten bleiben nachvollziehbar.':fontsize=29:fontcolor=0x7df0ad:x=90:y=1200:enable='gte(t,9)',

    drawbox=x=55:y=1315:w=970:h=385:color=0xf8fafc:t=fill:enable='gte(t,12)',
    drawtext=fontfile=${font_bold}:text='ERGEBNIS':fontsize=27:fontcolor=0x64748b:x=95:y=1360:enable='gte(t,12)',
    drawtext=fontfile=${font_bold}:text='LOHNT SICH':fontsize=58:fontcolor=0x087f4f:x=95:y=1420:enable='gte(t,12)',
    drawtext=fontfile=${font_regular}:text='Verkauf − Einkauf − Kosten':fontsize=29:fontcolor=0x475569:x=95:y=1500:enable='gte(t,12)',
    drawbox=x=95:y=1555:w=890:h=2:color=0xb8e8cc:t=fill:enable='gte(t,12)',
    drawtext=fontfile=${font_bold}:text='Rechnerischer Gewinn':fontsize=34:fontcolor=0x0f172a:x=95:y=1590:enable='gte(t,12)',
    drawtext=fontfile=${font_bold}:text='21,00 €':fontsize=55:fontcolor=0x087f4f:x=760:y=1576:enable='gte(t,12)',

    drawbox=x=95:y=1745:w=890:h=100:color=white:t=fill:enable='gte(t,21.5)',
    drawtext=fontfile=${font_bold}:text='Kostenlos prüfen · Link im Profil':fontsize=38:fontcolor=0x0f172a:x=(w-text_w)/2:y=1773:enable='gte(t,21.5)',
    fade=t=in:st=0:d=0.35,
    fade=t=out:st=24.4:d=0.6,
    format=yuv420p[v];

    [1:a]volume=0.018[a1];
    [2:a]volume=0.012[a2];
    [3:a]volume=0.008[a3];
    [a1][a2][a3]amix=inputs=3:normalize=0,
    afade=t=in:st=0:d=1.2,
    afade=t=out:st=23:d=2[a]
  " \
  -map "[v]" -map "[a]" \
  -c:v libx264 -preset medium -crf 19 -profile:v high -level 4.1 \
  -c:a aac -b:a 160k -ar 48000 \
  -movflags +faststart -shortest "$output_file"

echo "$output_file"
