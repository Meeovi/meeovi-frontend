import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rule_type_translationCreateManyInput } from "../../../inputs/Tax_rule_type_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTax_rule_type_translationArgs {
  @TypeGraphQL.Field(_type => [Tax_rule_type_translationCreateManyInput], {
    nullable: false
  })
  data!: Tax_rule_type_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
