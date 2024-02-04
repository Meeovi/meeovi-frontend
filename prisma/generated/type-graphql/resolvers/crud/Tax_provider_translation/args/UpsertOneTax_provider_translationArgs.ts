import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_provider_translationCreateInput } from "../../../inputs/Tax_provider_translationCreateInput";
import { Tax_provider_translationUpdateInput } from "../../../inputs/Tax_provider_translationUpdateInput";
import { Tax_provider_translationWhereUniqueInput } from "../../../inputs/Tax_provider_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTax_provider_translationArgs {
  @TypeGraphQL.Field(_type => Tax_provider_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_provider_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Tax_provider_translationCreateInput, {
    nullable: false
  })
  create!: Tax_provider_translationCreateInput;

  @TypeGraphQL.Field(_type => Tax_provider_translationUpdateInput, {
    nullable: false
  })
  update!: Tax_provider_translationUpdateInput;
}
