import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_persona_ruleOrderByWithAggregationInput } from "../../../inputs/Promotion_persona_ruleOrderByWithAggregationInput";
import { Promotion_persona_ruleScalarWhereWithAggregatesInput } from "../../../inputs/Promotion_persona_ruleScalarWhereWithAggregatesInput";
import { Promotion_persona_ruleWhereInput } from "../../../inputs/Promotion_persona_ruleWhereInput";
import { Promotion_persona_ruleScalarFieldEnum } from "../../../../enums/Promotion_persona_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPromotion_persona_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_persona_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_persona_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_persona_ruleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Promotion_persona_ruleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_persona_ruleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"promotion_id" | "rule_id">;

  @TypeGraphQL.Field(_type => Promotion_persona_ruleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Promotion_persona_ruleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
