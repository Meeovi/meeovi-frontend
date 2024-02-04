import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rule_typeOrderByWithAggregationInput } from "../../../inputs/Tax_rule_typeOrderByWithAggregationInput";
import { Tax_rule_typeScalarWhereWithAggregatesInput } from "../../../inputs/Tax_rule_typeScalarWhereWithAggregatesInput";
import { Tax_rule_typeWhereInput } from "../../../inputs/Tax_rule_typeWhereInput";
import { Tax_rule_typeScalarFieldEnum } from "../../../../enums/Tax_rule_typeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTax_rule_typeArgs {
  @TypeGraphQL.Field(_type => Tax_rule_typeWhereInput, {
    nullable: true
  })
  where?: Tax_rule_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_rule_typeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Tax_rule_typeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_rule_typeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "technical_name" | "position" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Tax_rule_typeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Tax_rule_typeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
