import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_translationCreateInput } from "../../../inputs/Country_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCountry_translationArgs {
  @TypeGraphQL.Field(_type => Country_translationCreateInput, {
    nullable: false
  })
  data!: Country_translationCreateInput;
}
