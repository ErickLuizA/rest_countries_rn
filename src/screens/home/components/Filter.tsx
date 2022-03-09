import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  LayoutRectangle,
  Modal,
  Pressable,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native'
import { Icon } from '@/components/Icon'
import { ShimmerPlaceholder } from '@/components/ShimmerPlaceholder'
import { useTheme } from '@/hooks/useTheme'
import { useContinents } from '@/hooks/useContinents'

interface IFilterProps {
  filter: string
  onFilter: (value: string) => void
}

export function Filter({ filter, onFilter }: IFilterProps) {
  const { theme } = useTheme()
  const { data, loading } = useContinents()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [layout, setLayout] = useState<LayoutRectangle>({
    width: 0,
    height: 0,
    x: 0,
    y: 0
  })

  function handleOnPress(item: string) {
    if (filter === item) {
      onFilter('')
    } else {
      onFilter(item)
    }

    setIsModalVisible(false)
  }

  if (loading) {
    return (
      <View style={styles.marginVertical}>
        <ShimmerPlaceholder width={155} height={50} />
      </View>
    )
  }

  return (
    <>
      <TouchableHighlight
        underlayColor={theme.background}
        onPress={() => setIsModalVisible(true)}
        onLayout={event => setLayout(event.nativeEvent.layout)}
        style={[styles.container, { backgroundColor: theme.primary }]}
      >
        <View style={styles.button}>
          <Text style={{ color: theme.onPrimary }}>
            {filter.length ? filter : 'Filter by Region'}
          </Text>
          <Icon
            name="expand-more"
            style={styles.icon}
            color={theme.onPrimary}
          />
        </View>
      </TouchableHighlight>

      <Modal
        visible={isModalVisible}
        transparent
        onRequestClose={() => setIsModalVisible(false)}
      >
        <Pressable
          style={styles.flex}
          onPressIn={() => setIsModalVisible(false)}
        >
          <Pressable
            style={[
              styles.menuContainer,
              { backgroundColor: theme.primary },
              { top: layout.y + layout.height + 70, width: layout.width }
            ]}
          >
            <FlatList
              data={data?.continents}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleOnPress(item.name)}>
                  <Text style={{ color: theme.onPrimary }}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 4,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    minWidth: 150
  },

  marginVertical: { marginVertical: 20 },

  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  icon: {
    marginLeft: 10
  },

  flex: {
    flex: 1
  },

  separator: {
    height: 10
  },

  menuContainer: {
    position: 'absolute',
    margin: 20,
    padding: 16,
    borderRadius: 4
  }
})
