import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrencyCreateInput } from "../../../inputs/CurrencyCreateInput";
import { CurrencyUpdateInput } from "../../../inputs/CurrencyUpdateInput";
import { CurrencyWhereUniqueInput } from "../../../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCurrencyArgs {
  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: false
  })
  where!: CurrencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CurrencyCreateInput, {
    nullable: false
  })
  create!: CurrencyCreateInput;

  @TypeGraphQL.Field(_type => CurrencyUpdateInput, {
    nullable: false
  })
  update!: CurrencyUpdateInput;
}
