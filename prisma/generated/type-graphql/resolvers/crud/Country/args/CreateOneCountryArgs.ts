import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountryCreateInput } from "../../../inputs/CountryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCountryArgs {
  @TypeGraphQL.Field(_type => CountryCreateInput, {
    nullable: false
  })
  data!: CountryCreateInput;
}
