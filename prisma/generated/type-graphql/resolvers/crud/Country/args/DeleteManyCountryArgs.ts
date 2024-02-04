import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountryWhereInput } from "../../../inputs/CountryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCountryArgs {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;
}
