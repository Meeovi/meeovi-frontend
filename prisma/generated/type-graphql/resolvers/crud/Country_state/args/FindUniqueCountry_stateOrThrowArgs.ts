import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_stateWhereUniqueInput } from "../../../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCountry_stateOrThrowArgs {
  @TypeGraphQL.Field(_type => Country_stateWhereUniqueInput, {
    nullable: false
  })
  where!: Country_stateWhereUniqueInput;
}
