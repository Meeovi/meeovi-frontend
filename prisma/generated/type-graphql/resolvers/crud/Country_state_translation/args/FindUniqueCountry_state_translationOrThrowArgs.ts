import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_state_translationWhereUniqueInput } from "../../../inputs/Country_state_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCountry_state_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => Country_state_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_state_translationWhereUniqueInput;
}
