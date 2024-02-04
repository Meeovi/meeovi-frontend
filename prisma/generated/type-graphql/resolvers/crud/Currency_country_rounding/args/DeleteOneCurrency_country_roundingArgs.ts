import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_country_roundingWhereUniqueInput } from "../../../inputs/Currency_country_roundingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCurrency_country_roundingArgs {
  @TypeGraphQL.Field(_type => Currency_country_roundingWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_country_roundingWhereUniqueInput;
}
