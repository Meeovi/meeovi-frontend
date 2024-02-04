import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RuleOrderByWithAggregationInput } from "../../../inputs/RuleOrderByWithAggregationInput";
import { RuleScalarWhereWithAggregatesInput } from "../../../inputs/RuleScalarWhereWithAggregatesInput";
import { RuleWhereInput } from "../../../inputs/RuleWhereInput";
import { RuleScalarFieldEnum } from "../../../../enums/RuleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRuleArgs {
  @TypeGraphQL.Field(_type => RuleWhereInput, {
    nullable: true
  })
  where?: RuleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RuleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RuleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RuleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "priority" | "payload" | "invalid" | "areas" | "module_types" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => RuleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RuleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
