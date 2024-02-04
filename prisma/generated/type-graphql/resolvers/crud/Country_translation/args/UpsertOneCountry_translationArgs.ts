import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_translationCreateInput } from "../../../inputs/Country_translationCreateInput";
import { Country_translationUpdateInput } from "../../../inputs/Country_translationUpdateInput";
import { Country_translationWhereUniqueInput } from "../../../inputs/Country_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCountry_translationArgs {
  @TypeGraphQL.Field(_type => Country_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_translationCreateInput, {
    nullable: false
  })
  create!: Country_translationCreateInput;

  @TypeGraphQL.Field(_type => Country_translationUpdateInput, {
    nullable: false
  })
  update!: Country_translationUpdateInput;
}
