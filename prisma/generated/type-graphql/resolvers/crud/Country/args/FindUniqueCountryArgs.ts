import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountryWhereUniqueInput } from "../../../inputs/CountryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCountryArgs {
  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: false
  })
  where!: CountryWhereUniqueInput;
}
