import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_stateWhereInput } from "../../../inputs/Country_stateWhereInput";

@TypeGraphQL.ArgsType()
export class Customer_addressCountry_stateArgs {
  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  where?: Country_stateWhereInput | undefined;
}
