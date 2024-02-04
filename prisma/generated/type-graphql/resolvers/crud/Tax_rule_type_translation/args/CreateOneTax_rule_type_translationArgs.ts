import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rule_type_translationCreateInput } from "../../../inputs/Tax_rule_type_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTax_rule_type_translationArgs {
  @TypeGraphQL.Field(_type => Tax_rule_type_translationCreateInput, {
    nullable: false
  })
  data!: Tax_rule_type_translationCreateInput;
}
