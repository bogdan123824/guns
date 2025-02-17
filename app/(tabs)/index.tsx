import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import ProductCard from '@/components/ProductCard';
import { FontAwesome } from '@expo/vector-icons';

const products = [
  {
    title: 'Игрушечный Автомат M4A1',
    price: '4286',
    oldPrice: '7143',
    discount: '40%',
    imageUrl: 'https://m416.com.ua/image/cache/catalog/image/cache/catalog/avtomantu/watermark/watermark/M4A1%20WH02A%20%D0%A7%D0%BE%D1%80%D0%BD%D0%B8%D0%B9/m516%20logo%20quality-659-600x600.webp', 
    inStock: false,
    labels: ['Акция', 'Хит продаж', 'Топ'],
  },
  {
    title: 'Гель Бластер HK416',
    price: '5200',
    oldPrice: '6500',
    discount: '20%',
    imageUrl: 'https://m416.com.ua/image/cache/catalog/image/cache/catalog/avtomantu/watermark/watermark/Horizontal/watermark-229-600x600.webp', 
    inStock: true,
    labels: ['Акция', 'Топ'],
  },
  {
    title: 'Гель Бластер M4A1',
    price: '1714',
    oldPrice: '2856',
    discount: '40%',
    imageUrl: 'https://m416.com.ua/image/cache/catalog/image/cache/catalog/avtomantu/%D0%91%D0%95%D0%97%20%D0%9B%D0%9E%D0%93%D0%9E/%D0%91%D0%B5%D0%B7%20%D0%BB%D0%BE%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82-660-1900x1280.webp', 
    inStock: true,
    labels: ['Акция'],
  },
  {
    title: 'Снайперская винтовка M82',
    price: '2576',
    oldPrice: '3576',
    discount: '5%',
    imageUrl: 'https://m416.com.ua/image/cache/catalog/image/cache/catalog/avtomantu/%D0%86%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%BE%D0%B2%D0%B0%20%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%BD%D0%B0%20%D0%A1%D0%BD%D0%B0%D0%B9%D0%BF%D0%B5%D1%80%D1%81%D1%8C%D0%BA%D0%B0%20%D0%93%D0%B2%D0%B8%D0%BD%D1%82%D1%96%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%9E%D1%80%D0%B1%D1%96%D0%B7%D0%B0%D1%85%20%D0%93%D0%B5%D0%BB%D1%8C%20%D0%91%D0%BB%D0%B0%D1%81%D1%82%D0%B5%D1%80%20M82%20928B/IMG_4835-1900x1280.webp', 
    inStock: false,
    labels: ['Акция', 'Хит продаж'],
  },
  {
    title: 'Бластер на Орбізах M4A1 PRO',
    price: '6200',
    oldPrice: '7500',
    discount: '10%',
    imageUrl: 'https://m416.com.ua/image/cache/catalog/image/cache/catalog/avtomantu/%D0%91%D0%95%D0%97%20%D0%9B%D0%9E%D0%93%D0%9E/%D0%91%D0%B5%D0%B7%20%D0%BB%D0%BE%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82-1154-1900x1280.webp', 
    inStock: true,
    labels: ['Топ'],
  },
  {
    title: 'Гель Бластер на Орбізах AK-47',
    price: '3211',
    oldPrice: '5210',
    discount: '30%',
    imageUrl: 'https://m416.com.ua/image/cache/catalog/image/cache/catalog/avtomantu/%D0%91%D0%95%D0%97%20%D0%9B%D0%9E%D0%93%D0%9E/%D0%91%D0%B5%D0%B7%20%D0%BB%D0%BE%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82-1129-1900x1280.webp', 
    inStock: true,
    labels: ['Акция'],
  },
  {
    title: 'Гель Бластер AWP A320-FJ',
    price: '2345',
    oldPrice: '3245',
    discount: '15%',
    imageUrl: 'https://m416.com.ua/image/cache/catalog/image/cache/catalog/avtomantu/%D0%91%D0%95%D0%97%20%D0%9B%D0%9E%D0%93%D0%9E/%D0%91%D0%B5%D0%B7%20%D0%BB%D0%BE%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82-642-1900x1280.webp',
    inStock: false,
    labels: ['Акция', 'Хит продаж', 'Топ'],
  },
  {
    title: 'Гель Бластер M4A1 Riffle',
    price: '4956',
    oldPrice: '6590',
    discount: '12%',
    imageUrl: 'https://m416.com.ua/image/cache/catalog/image/cache/catalog/avtomantu/%D0%91%D0%95%D0%97%20%D0%9B%D0%9E%D0%93%D0%9E/%D0%A1%D0%B0%D0%B9%D1%82-405-1900x1280.webp', 
    inStock: true,
    labels: ['Хит продаж', 'Топ'],
  },
  {
    title: 'Гель Бластер AK-47 2-078G',
    price: '3892',
    oldPrice: '5268',
    discount: '20%',
    imageUrl: 'https://m416.com.ua/image/cache/catalog/image/cache/catalog/avtomantu/%D0%91%D0%95%D0%97%20%D0%9B%D0%9E%D0%93%D0%9E/%D0%91%D0%B5%D0%B7%20%D0%BB%D0%BE%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82-272-1900x1280.webp', 
    inStock: false,
    labels: ['Топ'],
  },
  {
    title: 'Гель Бластер M4A1 PRO A626',
    price: '3323',
    oldPrice: '4129',
    discount: '18%',
    imageUrl: 'https://m416.com.ua/image/cache/catalog/image/cache/catalog/avtomantu/%D0%91%D0%95%D0%97%20%D0%9B%D0%9E%D0%93%D0%9E/%D0%B1%D0%B5%D0%B7%20%D0%BB%D0%BE%D0%B3%D0%BE%20%20%D1%81%D0%B0%D0%B9%D1%82-002-1900x1280.webp',
    inStock: true,
    labels: ['Хит продаж'],
  },
];

const ITEMS_PER_PAGE = 2; 

export default function HomeScreen() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </ScrollView>
      <View style={styles.paginationContainer}>
        <TouchableOpacity onPress={prevPage} disabled={currentPage === 0}>
          <FontAwesome name="chevron-left" size={24} color={currentPage === 0 ? 'white' : 'white'} />
        </TouchableOpacity>
        <Text style={styles.pageText}>{currentPage + 1} / {totalPages}</Text>
        <TouchableOpacity onPress={nextPage} disabled={currentPage === totalPages - 1}>
          <FontAwesome name="chevron-right" size={24} color={currentPage === totalPages - 1 ? 'white' : 'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 435,
  },
  pageText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', 
  },
});
