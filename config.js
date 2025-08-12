// Configurações do projeto
export const config = {
    // URLs do Supabase - configure com suas próprias chaves
    SUPABASE_URL: typeof process !== 'undefined' && process.env.SUPABASE_URL 
        ? process.env.SUPABASE_URL 
        : 'COLE_AQUI_SEU_PROJECT_URL',
    
    SUPABASE_ANON_KEY: typeof process !== 'undefined' && process.env.SUPABASE_ANON_KEY 
        ? process.env.SUPABASE_ANON_KEY 
        : 'COLE_AQUI_SUA_ANON_KEY',
    
    // URLs do site - detecta automaticamente em produção
    SITE_URL: typeof window !== 'undefined' 
        ? window.location.origin 
        : (typeof process !== 'undefined' && process.env.SITE_URL 
            ? process.env.SITE_URL 
            : 'http://localhost:8000'),
    
    // Configurações de pagamento
    STRIPE_PUBLISHABLE_KEY: typeof process !== 'undefined' && process.env.STRIPE_PUBLISHABLE_KEY 
        ? process.env.STRIPE_PUBLISHABLE_KEY 
        : 'pk_test_...',
    
    // Preços dos planos VIP (em centavos)
    VIP_PRICES: {
        monthly: 1990, // R$ 19,90
        yearly: 19900  // R$ 199,00
    }
};

// Função para verificar se as configurações estão corretas
export function validateConfig() {
    const errors = [];
    
    if (!config.SUPABASE_URL || config.SUPABASE_URL === 'COLE_AQUI_SEU_PROJECT_URL') {
        errors.push('SUPABASE_URL não configurada');
    }
    
    if (!config.SUPABASE_ANON_KEY || config.SUPABASE_ANON_KEY === 'COLE_AQUI_SUA_ANON_KEY') {
        errors.push('SUPABASE_ANON_KEY não configurada');
    }
    
    if (errors.length > 0) {
        console.error('❌ Configurações pendentes:', errors);
        console.log('📝 Por favor, configure o arquivo config.js com suas chaves do Supabase');
        return false;
    }
    
    console.log('✅ Configurações OK!');
    return true;
}