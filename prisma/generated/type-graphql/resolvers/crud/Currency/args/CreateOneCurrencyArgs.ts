import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrencyCreateInput } from "../../../inputs/CurrencyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCurrencyArgs {
  @TypeGraphQL.Field(_type => CurrencyCreateInput, {
    nullable: false
  })
  data!: CurrencyCreateInput;
}
