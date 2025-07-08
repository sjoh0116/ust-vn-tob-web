import { useEffect } from "react";

export default function ZaloSdk(){
    useEffect(() => {
        // SDK script 삽입
        const scriptId = 'zalo-sdk';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://sp.zalo.me/plugins/sdk.js';
            script.async = true;
            document.body.appendChild(script);
        }

        // Zalo DOM 요소 직접 생성 (React 관여 X)
        const zaloDiv = document.createElement('div');
        zaloDiv.className = 'zalo-chat-widget';
        zaloDiv.setAttribute('data-oaid', '3973361622657182886');
        zaloDiv.setAttribute('data-welcome-message', 'Rất vui khi được hỗ trợ bạn!');
        zaloDiv.setAttribute('data-autopopup', '0');
        zaloDiv.setAttribute('data-width', '');
        zaloDiv.setAttribute('data-height', '');

        document.body.appendChild(zaloDiv);

        return () => {
            // 정리
            document.getElementById(scriptId)?.remove();
            zaloDiv.remove();
        };
    }, []);

    return null; // React에서는 아무 것도 렌더링하지 않음
}