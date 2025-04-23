type Schema = {
  type: "string" | "number" | "boolean" | "list" | "number_list";
  description: string;
  allowed_values?: string[] | number[] | boolean[];
  required?: boolean;
};

export const GAME_MECHANICS_SCHEMA: {
  [key: string]: {
    [key: string]: Schema;
  };
} = {
  effect: {
    ".name": {
      type: "string",
      description: "The unique identifier for the effect.",
    },
    ".target": {
      type: "string",
      allowed_values: [
        "performer",
        "performer_group",
        "performer_group_other",
        "target",
        "target_group",
        "target_group_other",
        "target_enemy_group",
        "global",
      ],
      description: "Specifies the target of the effect.",
    },
    ".curio_result_type": {
      type: "string",
      allowed_values: ["positive", "negative", "neutral", "none"],
      description: "The result type for curio interactions.",
    },
    ".chance": {
      type: "number",
      description: "The probability of the effect occurring.",
    },
    ".on_hit": {
      type: "boolean",
      description: "Indicates if the effect triggers on a hit.",
      required: true,
    },
    ".on_miss": {
      type: "boolean",
      description: "Indicates if the effect triggers on a miss.",
      required: true,
    },
    ".queue": {
      type: "boolean",
      description: "Indicates if the effect should be queued.",
    },
    ".dotBleed": {
      type: "number",
      description: "The bleed damage over time value.",
    },
    ".dotPoison": {
      type: "number",
      description: "The poison damage over time value.",
    },
    ".dotStress": {
      type: "number",
      description: "The stress damage over time value.",
    },
    ".stress": {
      type: "number",
      description: "The stress value applied by the effect.",
    },
    ".healstress": {
      type: "number",
      description: "The amount of stress healed by the effect.",
    },
    ".combat_stat_buff": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect applies a combat stat buff.",
    },
    ".damage_low_multiply": {
      type: "number",
      description: "Multiplier for the lower bound of damage.",
    },
    ".damage_high_multiply": {
      type: "number",
      description: "Multiplier for the upper bound of damage.",
    },
    ".max_hp_multiply": {
      type: "number",
      description: "Multiplier for maximum HP.",
    },
    ".attack_rating_add": {
      type: "number",
      description: "Value added to the attack rating.",
    },
    ".crit_chance_add": {
      type: "number",
      description: "Value added to the critical hit chance.",
    },
    ".defense_rating_add": {
      type: "number",
      description: "Value added to the defense rating.",
    },
    ".protection_rating_add": {
      type: "number",
      description: "Value added to the protection rating.",
    },
    ".speed_rating_add": {
      type: "number",
      description: "Value added to the speed rating.",
    },
    ".buff_ids": {
      type: "list",
      description: "List of buff IDs applied by the effect.",
    },
    ".duration": {
      type: "number",
      description: "Duration of the effect in turns.",
    },
    ".dotHpHeal": {
      type: "number",
      description: "Healing over time value for HP.",
    },
    ".heal": {
      type: "number",
      description: "The amount of HP healed by the effect.",
    },
    ".heal_percent": {
      type: "number",
      description: "Percentage of HP healed by the effect.",
    },
    ".can_crit_heal": {
      type: "boolean",
      description: "Indicates if the heal can critically strike.",
    },
    ".cure": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect cures a condition.",
    },
    ".cure_bleed": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect cures bleeding.",
    },
    ".cure_poison": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect cures poison.",
    },
    ".clearDotStress": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect clears stress damage over time.",
    },
    ".tag": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect applies a tag.",
    },
    ".untag": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect removes a tag.",
    },
    ".stun": {
      type: "number",
      description: "The stun value applied by the effect.",
    },
    ".unstun": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect removes a stun.",
    },
    ".keyStatus": {
      type: "string",
      allowed_values: [
        "tagged",
        "poisoned",
        "bleeding",
        "stunned",
        "dazed",
        "virtued",
        "afflicted",
        "transformed",
      ],
      description: "The key status applied or checked by the effect.",
    },
    ".riposte": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect enables riposte.",
    },
    ".riposte_on_miss_chance_add": {
      type: "number",
      description: "Chance added to riposte on a miss.",
    },
    ".riposte_on_hit_chance_add": {
      type: "number",
      description: "Chance added to riposte on a hit.",
    },
    ".riposte_on_miss_chance_multiply": {
      type: "number",
      description: "Multiplier for riposte chance on a miss.",
    },
    ".riposte_on_hit_chance_multiply": {
      type: "number",
      description: "Multiplier for riposte chance on a hit.",
    },
    ".riposte_effect": {
      type: "string",
      description: "The effect ID triggered by riposte.",
    },
    ".clear_riposte": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect clears riposte.",
    },
    ".guard": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect enables guarding.",
    },
    ".clearguarding": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect clears guarding.",
    },
    ".clearguarded": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect clears guarded status.",
    },
    ".torch_decrease": {
      type: "number",
      description: "The amount by which the torch level decreases.",
    },
    ".torch_increase": {
      type: "number",
      description: "The amount by which the torch level increases.",
    },
    ".item": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect applies to an item.",
    },
    ".curio": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect applies to a curio.",
    },
    ".dotShuffle": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect shuffles the target.",
    },
    ".push": {
      type: "number",
      description: "The push value applied by the effect.",
    },
    ".pull": {
      type: "number",
      description: "The pull value applied by the effect.",
    },
    ".shuffletarget": {
      type: "number",
      description: "Indicates if the target is shuffled.",
      allowed_values: [1, 0],
    },
    ".shuffleparty": {
      type: "boolean",
      description: "Indicates if the party is shuffled.",
    },
    ".destealth": {
      type: "number",
      description: "Indicates if the effect removes stealth.",
      allowed_values: [1, 0],
    },
    ".instant_shuffle": {
      type: "boolean",
      description: "Indicates if the shuffle is instant.",
    },
    ".buff_amount": {
      type: "number",
      description: "The amount of the buff applied.",
    },
    ".buff_type": {
      type: "string",
      description: "The type of buff applied.",
    },
    ".buff_sub_type": {
      type: "string",
      description: "The subtype of buff applied.",
    },
    ".buff_duration_type": {
      type: "string",
      description: "The duration type of the buff.",
    },
    ".steal_buff_stat_type": {
      type: "string",
      description: "The stat type of the buff to steal.",
    },
    ".hp_dot_bleed": {
      type: "number",
      description: "The bleed damage over time applied to HP.",
    },
    ".hp_dot_poison": {
      type: "number",
      description: "The poison damage over time applied to HP.",
    },
    ".hp_dot_heal": {
      type: "number",
      description: "The healing over time applied to HP.",
    },
    ".stress_dot": {
      type: "number",
      description: "The stress damage over time applied.",
    },
    ".shuffle_dot": {
      type: "number",
      description: "The shuffle effect applied over time.",
    },
    ".steal_buff_source_type": {
      type: "string",
      description: "The source type of the buff to steal.",
    },
    ".swap_source_and_target": {
      type: "boolean",
      description: "Indicates if the source and target are swapped.",
    },
    ".kill": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect kills the target.",
    },
    ".immobilize": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect immobilizes the target.",
    },
    ".unimmobilize": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect removes immobilization.",
    },
    ".control": {
      type: "number",
      description: "The control value applied by the effect.",
    },
    ".uncontrol": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect removes control.",
    },
    ".kill_enemy_types": {
      type: "string",
      description: "Specifies the enemy types killed by the effect.",
    },
    ".monsterType": {
      type: "string",
      allowed_values: ["unholy", "man", "beast", "eldritch", "vampire", "husk"],
      description: "Specifies the monster type affected by the effect.",
    },
    ".capture": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect captures the target.",
    },
    ".capture_remove_from_party": {
      type: "number",
      allowed_values: [1, 0],
      description:
        "Indicates if the captured target is removed from the party.",
    },
    ".disease": {
      type: "string",
      description: "Specifies the disease applied by the effect.",
    },
    ".remove_vampire": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect removes vampirism.",
    },
    ".summon_monsters": {
      type: "list",
      description: "List of monster IDs summoned by the effect.",
    },
    ".summon_chances": {
      type: "number_list",
      description: "The chance of summoning monsters.",
    },
    ".summon_ranks": {
      type: "number",
      description: "The ranks of monsters summoned.",
    },
    ".summon_limits": {
      type: "number",
      description: "The limit on the number of monsters summoned.",
    },
    ".summon_count": {
      type: "number",
      description: "The count of monsters summoned.",
    },
    ".summon_erase_data_on_roll": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if summon data is erased on roll.",
    },
    ".summon_can_spawn_loot": {
      type: "boolean",
      allowed_values: [true, false],
      description: "Indicates if summoned monsters can spawn loot.",
    },
    ".summon_rank_is_previous_monster_class": {
      type: "boolean",
      description:
        "Indicates if summon rank is based on the previous monster class.",
    },
    ".summon_does_roll_initiatives": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if summoned monsters roll initiatives.",
    },
    ".crit_doesnt_apply_to_roll": {
      type: "boolean",
      description: "Indicates if critical hits don't apply to rolls.",
    },
    ".virtue_blockable_chance": {
      type: "number",
      description: "The chance of blocking virtue.",
    },
    ".affliction_blockable_chance": {
      type: "number",
      description: "The chance of blocking affliction.",
    },
    ".set_mode": {
      type: "string",
      description: "Specifies the mode set by the effect.",
    },
    ".can_apply_on_death": {
      type: "boolean",
      description: "Indicates if the effect can apply on death.",
    },
    ".apply_once": {
      type: "boolean",
      description: "Indicates if the effect applies only once.",
    },
    ".rank_target": {
      type: "string",
      description: "Specifies the rank target of the effect.",
    },
    ".clear_rank_target": {
      type: "string",
      description: "Specifies the rank target cleared by the effect.",
    },
    ".performer_rank_target": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the performer rank is targeted.",
    },
    ".apply_with_result": {
      type: "boolean",
      description: "Indicates if the effect applies with a result.",
    },
    ".initiative_change": {
      type: "number",
      description: "The change in initiative caused by the effect.",
    },
    ".source_heal_type": {
      type: "string",
      description: "Specifies the source type of healing.",
    },
    ".skill_instant": {
      type: "boolean",
      description: "Indicates if the skill is instant.",
    },
    ".actor_dot": {
      type: "string",
      description: "Specifies the actor dot ID applied by the effect.",
    },
    ".health_damage": {
      type: "number",
      description: "The health damage applied by the effect.",
    },
    ".bark": {
      type: "string",
      description: "Specifies the bark string entry triggered by the effect.",
    },
    ".set_monster_class_id": {
      type: "string",
      description: "Specifies the monster class ID set by the effect.",
    },
    ".set_monster_class_ids": {
      type: "list",
      description: "List of monster class IDs set by the effect.",
    },
    ".set_monster_class_chances": {
      type: "number",
      description: "The chances of setting monster classes.",
    },
    ".set_monster_class_reset_hp": {
      type: "boolean",
      description: "Indicates if monster class reset affects HP.",
    },
    ".set_monster_class_reset_buffs": {
      type: "boolean",
      description: "Indicates if monster class reset affects buffs.",
    },
    ".set_monster_class_carry_over_hp_min_percent": {
      type: "number",
      description:
        "Minimum HP percentage carried over during monster class reset.",
    },
    ".set_monster_class_clear_initative": {
      type: "boolean",
      description: "Indicates if monster class reset clears initiative.",
    },
    ".set_monster_class_clear_monster_brain_cooldowns": {
      type: "boolean",
      description: "Indicates if monster class reset clears brain cooldowns.",
    },
    ".set_monster_class_reset_scale": {
      type: "boolean",
      description: "Indicates if monster class reset affects scaling.",
    },
    ".has_description": {
      type: "boolean",
      description: "Indicates if the effect has a description.",
    },
    ".stealth": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect applies stealth.",
    },
    ".unstealth": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect removes stealth.",
    },
    ".clear_debuff": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect clears debuffs.",
    },
    ".health_damage_blocks": {
      type: "number",
      description: "The amount of health damage blocked by the effect.",
    },
    ".dotSource": {
      type: "string",
      description: "Specifies the source of the damage over time.",
    },
    ".buff_source_type": {
      type: "string",
      description: "Specifies the source type of the buff.",
    },
    ".use_item_id": {
      type: "string",
      description: "Specifies the item ID used by the effect.",
    },
    ".use_item_type": {
      type: "string",
      description: "Specifies the item type used by the effect.",
    },
    ".skips_endless_wave_curio": {
      type: "boolean",
      description: "Indicates if the effect skips endless wave curio.",
    },
    ".spawn_target_actor_base_class_id": {
      type: "string",
      description: "Specifies the base class ID of the target actor spawned.",
    },
    ".clearvirtue": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect clears virtue.",
    },
    ".riposte_validate": {
      type: "boolean",
      description: "Indicates if riposte validation is enabled.",
    },
    ".buff_is_clear_debuff_valid": {
      type: "boolean",
      description: "Indicates if clearing debuffs is valid for the buff.",
    },
    ".refreshes_skill_uses": {
      type: "boolean",
      description: "Indicates if the effect refreshes skill uses.",
    },
    ".cure_disease": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect cures a disease.",
    },
    ".individual_target_actor_rolls": {
      type: "boolean",
      description: "Indicates if individual target actor rolls are enabled.",
    },
    ".damage_type": {
      type: "string",
      description: "Specifies the type of damage applied.",
    },
    ".damage_source_type": {
      type: "string",
      description: "Specifies the source type of the damage.",
    },
    ".damage_source_data": {
      type: "string",
      description:
        "Specifies the data for the damage source, e.g., monster ID or trinket ID.",
    },
    ".daze": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect applies daze.",
    },
    ".undaze": {
      type: "number",
      allowed_values: [1, 0],
      description: "Indicates if the effect removes daze.",
    },
    ".apply_on_death": {
      type: "boolean",
      description: "Indicates if the effect applies on death.",
    },
  },
  combat_skill: {
    ".id": {
      type: "string",
      description: "Skill name identifier",
    },
    ".dmg": {
      type: "string",
      description: "Damage range for monsters or value for heroes",
    },
    ".atk": {
      type: "number",
      description: "Attack value",
    },
    ".move": {
      type: "string",
      description: "Movement direction",
      allowed_values: ["back", "forth"],
    },
    ".crit": {
      type: "number",
      description: "Critical hit value",
    },
    ".level": {
      type: "number",
      description: "Skill level value",
    },
    ".type": {
      type: "string",
      description: "Skill type",
      allowed_values: ["melee", "ranged", "move", "teleport", ""],
    },
    ".starting_cooldown": {
      type: "number",
      description: "Starting cooldown value",
    },
    ".per_battle_limit": {
      type: "number",
      description: "Limit per battle",
    },
    ".per_turn_limit": {
      type: "number",
      description: "Limit per turn",
    },
    ".is_continue_turn": {
      type: "boolean",
      description: "Whether the skill continues the turn",
    },
    ".launch": {
      type: "string",
      description: "Launch ranks",
    },
    ".target": {
      type: "string",
      description: "Target ranks",
    },
    ".self_target_valid": {
      type: "boolean",
      description: "Whether self-targeting is valid",
    },
    ".extra_targets_chance": {
      type: "number",
      description: "Chance for extra targets",
    },
    ".extra_targets_count": {
      type: "number",
      description: "Count of extra targets",
    },
    ".is_crit_valid": {
      type: "boolean",
      description: "Whether critical hits are valid",
    },
    ".effect": {
      type: "list",
      description: "Effect IDs",
    },
    ".valid_modes": {
      type: "list",
      description: "Valid mode IDs",
    },
    ".%s_effects": {
      type: "list",
      description: "Effects IDs for a specific mode",
    },
    ".ignore_stealth": {
      type: "boolean",
      description: "Whether the skill ignores stealth",
    },
    ".ignore_guard": {
      type: "boolean",
      description: "Whether the skill ignores guard",
    },
    ".can_miss": {
      type: "boolean",
      description: "Whether the skill can miss",
    },
    ".can_be_riposted": {
      type: "boolean",
      description: "Whether the skill can be riposted",
    },
    ".ignore_protection": {
      type: "boolean",
      description: "Whether the skill ignores protection",
    },
    ".required_performer_hp_range": {
      type: "string",
      description: "Required HP range for the performer",
    },
    ".rank_damage_modifiers": {
      type: "list",
      description: "Damage modifiers for ranks",
      allowed_values: ["rank4", "rank3", "rank2", "rank1"],
    },
    ".heal": {
      type: "string",
      description: "Healing value",
    },
    ".can_crit_heal": {
      type: "boolean",
      description: "Whether critical healing is possible",
    },
    ".generation_guaranteed": {
      type: "boolean",
      description: "Whether generation is guaranteed",
    },
    ".is_user_selected_targets": {
      type: "boolean",
      description: "Whether the user selects targets",
    },
    ".is_knowledgeable": {
      type: "boolean",
      description: "Whether the skill is knowledgeable",
    },
    ".is_monster_rerank_valid_on_attack": {
      type: "boolean",
      description: "Whether monster rerank is valid on attack",
    },
    ".is_monster_rerank_valid_on_friendly_presentation_end": {
      type: "boolean",
      description:
        "Whether monster rerank is valid on friendly presentation end",
    },
    ".is_monster_rerank_valid_on_friendly_post_result": {
      type: "boolean",
      description: "Whether monster rerank is valid on friendly post result",
    },
    ".is_stall_invalidating": {
      type: "boolean",
      description: "Whether the skill invalidates stalling",
    },
    ".refresh_after_each_wave": {
      type: "boolean",
      description: "Whether the skill refreshes after each wave",
    },
    ".damage_heal_base_class_ids": {
      type: "list",
      description: "Base class IDs for damage or healing",
    },
    ".ignore_deathsdoor": {
      type: "boolean",
      description: "Whether the skill ignores death's door",
    },
    ".icon": {
      type: "string",
      description: "Icon name",
    },
    ".anim": {
      type: "string",
      description: "Animation name",
    },
    ".fx": {
      type: "string",
      description: "Effect name",
    },
    ".targfx": {
      type: "string",
      description: "Target effect name",
    },
    ".targheadfx": {
      type: "string",
      description: "Target head effect name",
    },
    ".targchestfx": {
      type: "string",
      description: "Target chest effect name",
    },
    ".misstargfx": {
      type: "string",
      description: "Missed target effect name",
    },
    ".misstargheadfx": {
      type: "string",
      description: "Missed target head effect name",
    },
    ".misstargchestfx": {
      type: "string",
      description: "Missed target chest effect name",
    },
    ".area_pos_offset": {
      type: "string",
      description: "Area position offset (X, Y)",
    },
    ".target_area_pos_offset": {
      type: "string",
      description: "Target area position offset (X, Y)",
    },
    ".reset_source_stance": {
      type: "boolean",
      description: "Whether the source stance is reset",
    },
    ".reset_target_stance": {
      type: "boolean",
      description: "Whether the target stance is reset",
    },
    ".can_display_selection": {
      type: "boolean",
      description: "Whether the selection can be displayed",
    },
    ".hide_performer_health": {
      type: "boolean",
      description: "Whether the performer's health is hidden",
    },
    ".condensed_tooltip_effects": {
      type: "boolean",
      description: "Whether effects are condensed in the tooltip",
    },
    ".condensed_tooltip_stats": {
      type: "boolean",
      description: "Whether stats are condensed in the tooltip",
    },
    ".condensed_tooltip_type": {
      type: "boolean",
      description: "Whether type is condensed in the tooltip",
    },
    ".condensed_tooltip_effects_per_line": {
      type: "number",
      description: "Number of effects per line in the tooltip",
    },
    ".nil": {
      type: "boolean",
      description: "Hides skill stats and other information",
    },
    ".custom_target_anim": {
      type: "string",
      description: "Custom target animation name",
    },
    ".custom_idle_anim_name": {
      type: "string",
      description: "Custom idle animation name",
    },
    ".custom_idle_round_duration": {
      type: "number",
      description: "Custom idle round duration",
    },
    ".has_crit_vo": {
      type: "boolean",
      description: "Whether critical voiceover is present",
    },
    ".can_display_skill_name": {
      type: "boolean",
      description: "Whether the skill name can be displayed",
    },
    ".can_display_performer_selection_after_turn": {
      type: "boolean",
      description: "Whether performer selection can be displayed after turn",
    },
    ".sw_smendA_effects": {
      type: "list",
      description: "Effects IDs for a specific mode",
    },
    ".sw_smendB_effects": {
      type: "list",
      description: "Effects IDs for a specific mode",
    },
    ".sw_sformA_effects": {
      type: "list",
      description: "Effects IDs for a specific mode",
    },
    ".ignore_riposte": {
      type: "boolean",
      description: "Whether the skill ignores riposte",
    },
  },
  resistances: {
    ".stun": {
      type: "number",
      description: "Resistance to stun effects.",
    },
    ".move": {
      type: "number",
      description: "Resistance to movement effects.",
    },
    ".poison": {
      type: "number",
      description: "Resistance to poison effects.",
    },
    ".bleed": {
      type: "number",
      description: "Resistance to bleeding effects.",
    },
    ".disease": {
      type: "number",
      description: "Resistance to disease effects.",
    },
    ".debuff": {
      type: "number",
      description: "Resistance to debuff effects.",
    },
    ".death_blow": {
      type: "number",
      description: "Resistance to death blow effects.",
    },
    ".trap": {
      type: "number",
      description: "Resistance to trap effects.",
    },
  },
  mode: {
    ".id": {
      type: "string",
      description: "The unique identifier for the mode.",
    },
    ".is_raid_default": {
      type: "boolean",
      description: "Indicates if the mode is the default for raids.",
    },
    ".always_guard_actor_base_class_ids": {
      type: "list",
      description: "List of actor base class IDs that always guard.",
    },
    ".is_targetable": {
      type: "boolean",
      description: "Indicates if the mode is targetable.",
    },
    ".keep_rounds_in_ranks": {
      type: "number",
      description: "Number of rounds to keep actors in ranks.",
    },
    ".stress_damage_per_turn": {
      type: "number",
      description: "Stress damage applied per turn in this mode.",
    },
    ".bark_override_id": {
      type: "string",
      description: "Specifies the bark override ID for this mode.",
    },
    ".affliction_combat_skill_id": {
      type: "string",
      description: "Combat skill ID triggered by affliction in this mode.",
    },
    ".battle_complete_combat_skill_id": {
      type: "string",
      description: "Combat skill ID triggered upon battle completion.",
    },
  },
  generation: {
    ".is_generation_enabled": {
      type: "boolean",
      description: "Indicates if generation is enabled.",
    },
    ".town_event_dependency": {
      type: "string",
      description: "Specifies the town event dependency.",
    },
    ".number_of_positive_quirks_min": {
      type: "number",
      description: "Minimum number of positive quirks.",
    },
    ".number_of_positive_quirks_max": {
      type: "number",
      description: "Maximum number of positive quirks.",
    },
    ".number_of_negative_quirks_min": {
      type: "number",
      description: "Minimum number of negative quirks.",
    },
    ".number_of_negative_quirks_max": {
      type: "number",
      description: "Maximum number of negative quirks.",
    },
    ".number_of_class_specific_camping_skills": {
      type: "number",
      description: "Number of class-specific camping skills.",
    },
    ".number_of_shared_camping_skills": {
      type: "number",
      description: "Number of shared camping skills.",
    },
    ".number_of_random_combat_skills": {
      type: "number",
      description: "Number of random combat skills.",
    },
    ".number_of_cards_in_deck": {
      type: "number",
      description: "Number of cards in the deck.",
    },
    ".card_chance": {
      type: "number",
      description: "Chance of drawing a card.",
    },
    ".reduce_number_of_cards_in_deck_hero_class_id": {
      type: "string",
      description:
        "Hero class ID for reducing the number of cards in the deck.",
    },
    ".reduce_number_of_cards_in_deck_amount": {
      type: "number",
      description:
        "Amount by which the number of cards in the deck is reduced.",
    },
  },
};
