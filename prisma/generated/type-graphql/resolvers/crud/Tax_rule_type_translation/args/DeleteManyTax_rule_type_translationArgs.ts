import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rule_type_translationWhereInput } from "../../../inputs/Tax_rule_type_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTax_rule_type_translationArgs {
  @TypeGraphQL.Field(_type => Tax_rule_type_translationWhereInput, {
    nullable: true
  })
  where?: Tax_rule_type_translationWhereInput | undefined;
}
