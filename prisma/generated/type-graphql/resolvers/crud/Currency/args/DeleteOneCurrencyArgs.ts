import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrencyWhereUniqueInput } from "../../../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCurrencyArgs {
  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: false
  })
  where!: CurrencyWhereUniqueInput;
}
