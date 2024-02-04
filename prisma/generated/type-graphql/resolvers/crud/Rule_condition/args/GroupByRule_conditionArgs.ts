import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_conditionOrderByWithAggregationInput } from "../../../inputs/Rule_conditionOrderByWithAggregationInput";
import { Rule_conditionScalarWhereWithAggregatesInput } from "../../../inputs/Rule_conditionScalarWhereWithAggregatesInput";
import { Rule_conditionWhereInput } from "../../../inputs/Rule_conditionWhereInput";
import { Rule_conditionScalarFieldEnum } from "../../../../enums/Rule_conditionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRule_conditionArgs {
  @TypeGraphQL.Field(_type => Rule_conditionWhereInput, {
    nullable: true
  })
  where?: Rule_conditionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Rule_conditionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Rule_conditionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rule_conditionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "rule_id" | "script_id" | "parent_id" | "value" | "position" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Rule_conditionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Rule_conditionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
