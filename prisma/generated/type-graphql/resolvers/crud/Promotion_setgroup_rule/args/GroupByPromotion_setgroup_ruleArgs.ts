import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroup_ruleOrderByWithAggregationInput } from "../../../inputs/Promotion_setgroup_ruleOrderByWithAggregationInput";
import { Promotion_setgroup_ruleScalarWhereWithAggregatesInput } from "../../../inputs/Promotion_setgroup_ruleScalarWhereWithAggregatesInput";
import { Promotion_setgroup_ruleWhereInput } from "../../../inputs/Promotion_setgroup_ruleWhereInput";
import { Promotion_setgroup_ruleScalarFieldEnum } from "../../../../enums/Promotion_setgroup_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPromotion_setgroup_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroup_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_setgroup_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_setgroup_ruleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Promotion_setgroup_ruleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_setgroup_ruleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"setgroup_id" | "rule_id">;

  @TypeGraphQL.Field(_type => Promotion_setgroup_ruleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Promotion_setgroup_ruleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
