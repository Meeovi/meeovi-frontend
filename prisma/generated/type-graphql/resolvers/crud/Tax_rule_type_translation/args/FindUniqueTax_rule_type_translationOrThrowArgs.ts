import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rule_type_translationWhereUniqueInput } from "../../../inputs/Tax_rule_type_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTax_rule_type_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => Tax_rule_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_rule_type_translationWhereUniqueInput;
}
