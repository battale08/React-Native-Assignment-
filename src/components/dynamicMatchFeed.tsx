// components/MatchFeed.tsx
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useMatchFeed } from "../../src/hooks/useMatchFeed";

const MatchFeed = () => {
  const state = useMatchFeed();

  const renderItem = ({ item }: any) => {
    switch (item.type) {
      case "BALL":
        return <Text style={styles.ball}>{item.payload.commentary}</Text>;
      case "BOUNDARY":
        return <Text style={styles.boundary}>🏏 {item.payload.commentary}</Text>;
      case "WICKET":
        return <Text style={styles.wicket}> {item.payload.commentary} ({item.payload.playerOut})</Text>;
      case "MATCH_STATUS":
        return <Text style={styles.status}>📢 {item.payload.summary}</Text>;
      case "UNKNOWN":
      default:
        return <Text style={styles.unknown}>⚠️ {item.payload.commentary}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {/* Scoreboard */}
      <View style={styles.scoreboard}>
     <View style={styles.scoreBox}>
       <Text style={styles.scoreLabel}>SCORE</Text>
       <Text style={styles.scoreValue}>{state.score}/{state.wickets}</Text>
     </View>
     <View style={styles.overBox}>
       <Text style={styles.overLabel}>OVERS</Text>
       <Text style={styles.overValue}>{state.overs}</Text>
     </View>
    <View style={styles.inningsBox}>
      <Text style={styles.inningsLabel}>INNINGS</Text>
     <Text style={styles.inningsValue}>{state.innings}</Text>
    </View>
    </View>

      {/* Commentary Feed */}
      <FlatList
        data={state.feed}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        inverted
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 12, 
    backgroundColor: "#fff", // light background,
    marginHorizontal: 0,
  },
  scoreboard: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#004d40", // dark green sports vibe
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 4,
  },
  scoreBox: { 
    alignItems: "center" 
  },
  overBox: { 
    alignItems: "center" 
  },

  scoreLabel: { 
    fontSize: 12, 
    color: "#b2dfdb", 
    letterSpacing: 1 
  },
  scoreValue: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#fff"
  },

  overLabel: { 
    fontSize: 12, 
    color: "#b2dfdb", 
    letterSpacing: 1 
  },
  overValue: { 
    fontSize: 20, 
    fontWeight: "600", 
    color: "#ffeb3b" 
  }, // bright yellow like a scoreboard light

  ball: { 
    fontSize: 16,
    fontWeight: "600",
    padding: 6,
    color: "#000"
  },
  boundary: { 
    fontSize: 16, 
    color: "green", 
    fontWeight: "bold",
    padding: 6 
  },
  wicket: { 
    fontSize: 15, 
    color: "red", 
    fontWeight: "bold", 
    padding: 6 
  },
  status: { 
    fontSize: 16,
    fontWeight: "bold",
    color: "#000080",
    textAlign: "center", 
    backgroundColor: "lightblue", 
    padding: 8, 
    marginVertical: 4, 
    borderRadius: 6,
    
  },
  unknown: { 
    fontSize: 14, 
    color: "orange", 
    padding: 6 
  },
  matchStatusBanner: {
    backgroundColor: "#ff5722", // bright orange like a cricket alert
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  matchStatusText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  inningsBox: { 
    alignItems: "center" 
  },
  inningsLabel: { 
    fontSize: 12, 
    color: "#b2dfdb", 
    letterSpacing: 1  
  },
  inningsValue: { 
    fontSize: 20, 
    fontWeight: "600", 
    color: "#ff9800" 
  }, 
});

export default MatchFeed;
