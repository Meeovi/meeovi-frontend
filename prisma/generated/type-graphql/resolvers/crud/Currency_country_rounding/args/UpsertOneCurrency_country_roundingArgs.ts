import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_country_roundingCreateInput } from "../../../inputs/Currency_country_roundingCreateInput";
import { Currency_country_roundingUpdateInput } from "../../../inputs/Currency_country_roundingUpdateInput";
import { Currency_country_roundingWhereUniqueInput } from "../../../inputs/Currency_country_roundingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCurrency_country_roundingArgs {
  @TypeGraphQL.Field(_type => Currency_country_roundingWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_country_roundingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Currency_country_roundingCreateInput, {
    nullable: false
  })
  create!: Currency_country_roundingCreateInput;

  @TypeGraphQL.Field(_type => Currency_country_roundingUpdateInput, {
    nullable: false
  })
  update!: Currency_country_roundingUpdateInput;
}
