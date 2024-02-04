import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rule_typeWhereUniqueInput } from "../../../inputs/Tax_rule_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneTax_rule_typeArgs {
  @TypeGraphQL.Field(_type => Tax_rule_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_rule_typeWhereUniqueInput;
}
