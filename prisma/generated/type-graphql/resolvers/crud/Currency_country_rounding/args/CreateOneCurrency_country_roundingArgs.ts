import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_country_roundingCreateInput } from "../../../inputs/Currency_country_roundingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCurrency_country_roundingArgs {
  @TypeGraphQL.Field(_type => Currency_country_roundingCreateInput, {
    nullable: false
  })
  data!: Currency_country_roundingCreateInput;
}
