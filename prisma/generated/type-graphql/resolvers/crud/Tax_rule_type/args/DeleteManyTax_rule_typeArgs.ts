import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rule_typeWhereInput } from "../../../inputs/Tax_rule_typeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTax_rule_typeArgs {
  @TypeGraphQL.Field(_type => Tax_rule_typeWhereInput, {
    nullable: true
  })
  where?: Tax_rule_typeWhereInput | undefined;
}
