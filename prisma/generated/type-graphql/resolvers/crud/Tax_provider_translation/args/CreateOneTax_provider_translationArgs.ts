import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_provider_translationCreateInput } from "../../../inputs/Tax_provider_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTax_provider_translationArgs {
  @TypeGraphQL.Field(_type => Tax_provider_translationCreateInput, {
    nullable: false
  })
  data!: Tax_provider_translationCreateInput;
}
