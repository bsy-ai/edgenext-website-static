import axios from 'axios';
import CryptoJS from 'crypto-js';

export interface BaiduTranslateConfig {
  appId: string;
  appKey: string;
  from?: string;
  to: string;
}

export interface TranslateResult {
  originalText: string;
  translatedText: string;
  from: string;
  to: string;
}

export class BaiduTranslateService {
  private baseUrl = 'https://fanyi-api.baidu.com/api/trans/vip/translate';
  
  constructor(private config: BaiduTranslateConfig) {}

  private generateSign(query: string, salt: string): string {
    const { appId, appKey } = this.config;
    const str = `${appId}${query}${salt}${appKey}`;
    return CryptoJS.MD5(str).toString();
  }

  async translate(text: string, to: string = this.config.to, from: string = this.config.from || 'auto'): Promise<TranslateResult> {
    const salt = Date.now().toString();
    const sign = this.generateSign(text, salt);

    const params = {
      q: text,
      from,
      to,
      appid: this.config.appId,
      salt,
      sign
    };

    try {
      const response = await axios.post(this.baseUrl, null, { params });
      
      if (response.data.error_code) {
        throw new Error(`Baidu Translate Error: ${response.data.error_msg}`);
      }

      const result = response.data.trans_result[0];
      return {
        originalText: text,
        translatedText: result.dst,
        from: response.data.from,
        to: response.data.to
      };
    } catch (error) {
      console.error('Translation failed:', error);
      throw error;
    }
  }

  async translateBatch(texts: string[], to: string = this.config.to, from: string = this.config.from || 'auto'): Promise<TranslateResult[]> {
    const results: TranslateResult[] = [];
    
    console.log(`📝 Processing ${texts.length} texts for translation...`);
    
    // 百度翻译API有频率限制，所以我们添加延迟
    for (let i = 0; i < texts.length; i++) {
      const text = texts[i];
      try {
        console.log(`🔄 Translating ${i + 1}/${texts.length}: "${text.substring(0, 50)}${text.length > 50 ? '...' : ''}"`);
        const result = await this.translate(text, to, from);
        results.push(result);
        
        // 添加延迟以避免API频率限制
        await new Promise(resolve => setTimeout(resolve, 200));
      } catch (error) {
        console.error(`❌ Failed to translate text ${i + 1}/${texts.length}: "${text}"`, error);
        // 如果翻译失败，保持原文
        results.push({
          originalText: text,
          translatedText: text,
          from,
          to
        });
      }
    }
    
    console.log(`✅ Batch translation completed: ${results.length} results`);
    return results;
  }
}

// 工厂函数
export function createBaiduTranslateService(config: BaiduTranslateConfig): BaiduTranslateService {
  return new BaiduTranslateService(config);
}
