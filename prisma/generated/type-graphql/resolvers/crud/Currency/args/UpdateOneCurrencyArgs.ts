import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrencyUpdateInput } from "../../../inputs/CurrencyUpdateInput";
import { CurrencyWhereUniqueInput } from "../../../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCurrencyArgs {
  @TypeGraphQL.Field(_type => CurrencyUpdateInput, {
    nullable: false
  })
  data!: CurrencyUpdateInput;

  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: false
  })
  where!: CurrencyWhereUniqueInput;
}
