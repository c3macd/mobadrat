import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'سرعة في التنفيذ',
      description: 'نقدم خدماتنا بسرعة عالية وجودة متميزة لضمان رضا عملائنا'
    },
    {
      icon: '💡',
      title: 'حلول مبتكرة',
      description: 'نستخدم أحدث التقنيات والأساليب المبتكرة في تقديم خدماتنا'
    },
    {
      icon: '🎯',
      title: 'دقة في العمل',
      description: 'نركز على التفاصيل ونضمن تحقيق أهدافك بأعلى مستوى من الدقة'
    },
    {
      icon: '🤝',
      title: 'دعم مستمر',
      description: 'نقدم دعماً فنياً متواصلاً لضمان استمرارية نجاح مشاريعك'
    },
    {
      icon: '🔒',
      title: 'أمان وموثوقية',
      description: 'نضمن أمان بياناتك وخصوصيتها بأعلى معايير الحماية'
    },
    {
      icon: '📈',
      title: 'نمو مستدام',
      description: 'نساعدك في تحقيق نمو مستدام ومتواصل لأعمالك ومشاريعك'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المصممة خصيصاً لتلبية احتياجاتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;