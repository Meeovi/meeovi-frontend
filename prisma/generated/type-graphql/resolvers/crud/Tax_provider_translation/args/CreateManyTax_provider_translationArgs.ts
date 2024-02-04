import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_provider_translationCreateManyInput } from "../../../inputs/Tax_provider_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTax_provider_translationArgs {
  @TypeGraphQL.Field(_type => [Tax_provider_translationCreateManyInput], {
    nullable: false
  })
  data!: Tax_provider_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
