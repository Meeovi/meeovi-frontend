import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rule_typeCreateManyInput } from "../../../inputs/Tax_rule_typeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTax_rule_typeArgs {
  @TypeGraphQL.Field(_type => [Tax_rule_typeCreateManyInput], {
    nullable: false
  })
  data!: Tax_rule_typeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
