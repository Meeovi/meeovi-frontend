import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutSales_channelInput } from "../inputs/CurrencyCreateWithoutSales_channelInput";
import { CurrencyUpdateWithoutSales_channelInput } from "../inputs/CurrencyUpdateWithoutSales_channelInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpsertWithoutSales_channelInput", {})
export class CurrencyUpsertWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutSales_channelInput, {
    nullable: false
  })
  update!: CurrencyUpdateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;
}
