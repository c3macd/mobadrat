import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              من نحن؟
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              نحن فريق من المتخصصين والخبراء في مجال التكنولوجيا والتطوير، نسعى لتقديم أفضل الحلول المبتكرة لعملائنا. نؤمن بأن النجاح يأتي من خلال الجودة والإبداع والالتزام.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              منذ تأسيسنا، نجحنا في تنفيذ العديد من المشاريع الناجحة وبناء علاقات طويلة الأمد مع عملائنا. نحن نفخر بكوننا شريكك الموثوق في رحلة النجاح.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">مشروع مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">عميل راضي</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
              <p className="text-lg leading-relaxed mb-6">
                أن نكون الخيار الأول للشركات والأفراد الذين يسعون للتميز والإبداع في مشاريعهم التقنية.
              </p>
              <h3 className="text-2xl font-bold mb-4">مهمتنا</h3>
              <p className="text-lg leading-relaxed">
                تقديم حلول تقنية متطورة وخدمات استشارية متخصصة تساعد عملاءنا على تحقيق أهدافهم بكفاءة وفعالية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;