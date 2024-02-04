import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rule_type_translationOrderByWithAggregationInput } from "../../../inputs/Tax_rule_type_translationOrderByWithAggregationInput";
import { Tax_rule_type_translationScalarWhereWithAggregatesInput } from "../../../inputs/Tax_rule_type_translationScalarWhereWithAggregatesInput";
import { Tax_rule_type_translationWhereInput } from "../../../inputs/Tax_rule_type_translationWhereInput";
import { Tax_rule_type_translationScalarFieldEnum } from "../../../../enums/Tax_rule_type_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTax_rule_type_translationArgs {
  @TypeGraphQL.Field(_type => Tax_rule_type_translationWhereInput, {
    nullable: true
  })
  where?: Tax_rule_type_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_rule_type_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Tax_rule_type_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_rule_type_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"tax_rule_type_id" | "language_id" | "type_name" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Tax_rule_type_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Tax_rule_type_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
