import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rule_type_translationCreateInput } from "../../../inputs/Tax_rule_type_translationCreateInput";
import { Tax_rule_type_translationUpdateInput } from "../../../inputs/Tax_rule_type_translationUpdateInput";
import { Tax_rule_type_translationWhereUniqueInput } from "../../../inputs/Tax_rule_type_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTax_rule_type_translationArgs {
  @TypeGraphQL.Field(_type => Tax_rule_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_rule_type_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Tax_rule_type_translationCreateInput, {
    nullable: false
  })
  create!: Tax_rule_type_translationCreateInput;

  @TypeGraphQL.Field(_type => Tax_rule_type_translationUpdateInput, {
    nullable: false
  })
  update!: Tax_rule_type_translationUpdateInput;
}
