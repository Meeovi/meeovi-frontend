import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rule_typeCreateInput } from "../../../inputs/Tax_rule_typeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTax_rule_typeArgs {
  @TypeGraphQL.Field(_type => Tax_rule_typeCreateInput, {
    nullable: false
  })
  data!: Tax_rule_typeCreateInput;
}
