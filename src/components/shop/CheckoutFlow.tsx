'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, MessageCircle, X } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface CheckoutFlowProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

const categoryEmojis: Record<string, string> = {
  peluches: '🧸',
  flores: '🌹',
  desayunos: '🎂',
  globos: '🎈',
  cumpleanos: '🎁',
  aniversarios: '💝',
  personalizados: '✨',
  sorpresas: '🎉',
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

const steps = [
  { num: 1, label: 'Productos', emoji: '🛍️' },
  { num: 2, label: 'Destinatario', emoji: '👤' },
  { num: 3, label: 'Entrega', emoji: '📅' },
  { num: 4, label: 'Dedicatoria', emoji: '💌' },
  { num: 5, label: 'Resumen', emoji: '📋' },
  { num: 6, label: 'WhatsApp', emoji: '💬' },
];

export function CheckoutFlow({ isOpen, onClose, onBack }: CheckoutFlowProps) {
  const { items, getTotalPrice, getTotalItems } = useCartStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [recipientName, setRecipientName] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [dedication, setDedication] = useState('');
  const [senderName, setSenderName] = useState('');

  if (!isOpen) return null;

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const generateWhatsAppMessage = () => {
    const productsList = items
      .map((item) => `  • ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}`)
      .join('\n');

    const message = `Hola Emociones Matutinas 💝

Quiero realizar el siguiente pedido:

🛍️ PRODUCTOS:
${productsList}

👤 DATOS DESTINATARIO:
  • Nombre: ${recipientName}
  • Teléfono: ${recipientPhone}
  • Dirección: ${recipientAddress}

📅 FECHA Y HORA DE ENTREGA:
  • Fecha: ${deliveryDate}
  • Hora: ${deliveryTime}

💌 DEDICATORIA:
${dedication || 'Sin dedicatoria'}

👤 REMITENTE:
  • Nombre: ${senderName}

💰 TOTAL: ${formatPrice(totalPrice)}

¡Gracias! 💝`;

    return encodeURIComponent(message);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return items.length > 0;
      case 2: return recipientName.trim() !== '' && recipientPhone.trim() !== '' && recipientAddress.trim() !== '';
      case 3: return deliveryDate.trim() !== '' && deliveryTime.trim() !== '';
      case 4: return true;
      case 5: return true;
      default: return true;
    }
  };

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const whatsappUrl = `https://wa.me/573001234567?text=${generateWhatsAppMessage()}`;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
        <div className="w-full sm:max-w-lg bg-white sm:rounded-3xl rounded-t-3xl max-h-[95vh] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-pink-100">
            <div className="flex items-center gap-2">
              {currentStep > 1 && (
                <button onClick={prevStep} className="p-1.5 rounded-full hover:bg-pink-50">
                  <ArrowLeft className="w-4 h-4 text-gray-400" />
                </button>
              )}
              <h2 className="text-lg font-bold text-gray-800">
                {steps[currentStep - 1].emoji} {steps[currentStep - 1].label}
              </h2>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-pink-50">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Step indicators */}
          <div className="flex items-center justify-center gap-1 py-3 px-4 bg-pink-50/30">
            {steps.map((step) => (
              <div key={step.num} className="flex items-center">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step.num < currentStep
                      ? 'bg-green-400 text-white'
                      : step.num === currentStep
                      ? 'bg-pink-500 text-white scale-110 shadow-lg shadow-pink-200'
                      : 'bg-pink-100 text-pink-300'
                  }`}
                >
                  {step.num < currentStep ? <Check className="w-3.5 h-3.5" /> : step.num}
                </div>
                {step.num < 6 && (
                  <div className={`w-4 sm:w-8 h-0.5 mx-0.5 ${step.num < currentStep ? 'bg-green-400' : 'bg-pink-100'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {/* Step 1: Products */}
            {currentStep === 1 && (
              <div className="space-y-3">
                <p className="text-sm text-gray-500">Revisa los productos en tu carrito:</p>
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 bg-pink-50/50 rounded-xl">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-lg">{categoryEmojis[item.category] || '🎁'}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-400">Cantidad: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-pink-500">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
                <div className="flex items-center justify-between p-3 bg-pink-100/50 rounded-xl">
                  <span className="font-semibold text-gray-700">Total ({totalItems} items)</span>
                  <span className="text-xl font-bold text-pink-600">{formatPrice(totalPrice)}</span>
                </div>
              </div>
            )}

            {/* Step 2: Recipient */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <p className="text-sm text-gray-500">Datos de la persona que recibirá el regalo:</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Nombre del destinatario *</label>
                    <Input
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="¿Para quién es el regalo?"
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-400/30 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Teléfono *</label>
                    <Input
                      value={recipientPhone}
                      onChange={(e) => setRecipientPhone(e.target.value)}
                      placeholder="300 123 4567"
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-400/30 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Dirección de entrega *</label>
                    <Textarea
                      value={recipientAddress}
                      onChange={(e) => setRecipientAddress(e.target.value)}
                      placeholder="Calle, barrio, apartamento..."
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-400/30 rounded-xl resize-none"
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Delivery */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <p className="text-sm text-gray-500">¿Cuándo quieres que llegue la sorpresa?</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Fecha de entrega *</label>
                    <Input
                      type="date"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-400/30 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Hora preferida *</label>
                    <Input
                      type="time"
                      value={deliveryTime}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-400/30 rounded-xl"
                    />
                  </div>
                  <div className="bg-pink-50 p-3 rounded-xl">
                    <p className="text-xs text-pink-600 font-medium">💡 Recuerda: Entregas programadas en Bogotá. Confirma disponibilidad por WhatsApp.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Dedication */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <p className="text-sm text-gray-500">Agrega un mensaje especial para acompañar tu regalo:</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Tu nombre (remitente)</label>
                    <Input
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="¿De parte de quién?"
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-400/30 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Dedicatoria</label>
                    <Textarea
                      value={dedication}
                      onChange={(e) => setDedication(e.target.value)}
                      placeholder="Escribe tu mensaje de amor, amistad o celebración..."
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-400/30 rounded-xl resize-none"
                      rows={4}
                    />
                  </div>
                  <div className="bg-pink-50 p-3 rounded-xl">
                    <p className="text-xs text-pink-600">💝 La dedicatoria se escribirá a mano en una tarjeta premium incluida con tu pedido.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Summary */}
            {currentStep === 5 && (
              <div className="space-y-4">
                <p className="text-sm text-gray-500">Revisa tu pedido antes de enviarlo:</p>
                <div className="space-y-3">
                  {/* Products summary */}
                  <div className="bg-pink-50/50 p-3 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-700 mb-2">🛍️ Productos</h4>
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm py-1">
                        <span className="text-gray-600">{categoryEmojis[item.category]} {item.name} x{item.quantity}</span>
                        <span className="font-medium text-gray-800">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                    <div className="border-t border-pink-200 mt-2 pt-2 flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-pink-600">{formatPrice(totalPrice)}</span>
                    </div>
                  </div>

                  {/* Recipient summary */}
                  <div className="bg-pink-50/50 p-3 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-700 mb-1">👤 Destinatario</h4>
                    <p className="text-sm text-gray-600">{recipientName}</p>
                    <p className="text-sm text-gray-600">{recipientPhone}</p>
                    <p className="text-sm text-gray-600">{recipientAddress}</p>
                  </div>

                  {/* Delivery summary */}
                  <div className="bg-pink-50/50 p-3 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-700 mb-1">📅 Entrega</h4>
                    <p className="text-sm text-gray-600">{deliveryDate} a las {deliveryTime}</p>
                  </div>

                  {/* Dedication summary */}
                  <div className="bg-pink-50/50 p-3 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-700 mb-1">💌 Dedicatoria</h4>
                    <p className="text-sm text-gray-600 italic">&ldquo;{dedication || 'Sin dedicatoria'}&rdquo;</p>
                    {senderName && <p className="text-sm text-gray-500 mt-1">De: {senderName}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: WhatsApp */}
            {currentStep === 6 && (
              <div className="space-y-4 text-center py-4">
                <div className="text-6xl mb-2">🎉</div>
                <h3 className="text-xl font-bold text-gray-800">¡Tu pedido está listo!</h3>
                <p className="text-sm text-gray-500">
                  Envía tu pedido por WhatsApp y nosotros nos encargamos del resto.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl shadow-lg shadow-green-200/50 transition-all duration-300 hover:scale-105 text-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  Enviar a WhatsApp
                </a>
                <p className="text-xs text-gray-400 mt-2">
                  Se abrirá WhatsApp con tu pedido completo
                </p>
              </div>
            )}
          </div>

          {/* Footer with navigation */}
          {currentStep < 6 && (
            <div className="border-t border-pink-100 p-4">
              <Button
                onClick={nextStep}
                disabled={!canProceed()}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-xl shadow-lg shadow-pink-200/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
