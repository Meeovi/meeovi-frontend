import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rule_typeCreateInput } from "../../../inputs/Tax_rule_typeCreateInput";
import { Tax_rule_typeUpdateInput } from "../../../inputs/Tax_rule_typeUpdateInput";
import { Tax_rule_typeWhereUniqueInput } from "../../../inputs/Tax_rule_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTax_rule_typeArgs {
  @TypeGraphQL.Field(_type => Tax_rule_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_rule_typeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Tax_rule_typeCreateInput, {
    nullable: false
  })
  create!: Tax_rule_typeCreateInput;

  @TypeGraphQL.Field(_type => Tax_rule_typeUpdateInput, {
    nullable: false
  })
  update!: Tax_rule_typeUpdateInput;
}
