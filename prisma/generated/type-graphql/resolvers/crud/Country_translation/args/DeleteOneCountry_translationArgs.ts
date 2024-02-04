import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_translationWhereUniqueInput } from "../../../inputs/Country_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCountry_translationArgs {
  @TypeGraphQL.Field(_type => Country_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_translationWhereUniqueInput;
}
