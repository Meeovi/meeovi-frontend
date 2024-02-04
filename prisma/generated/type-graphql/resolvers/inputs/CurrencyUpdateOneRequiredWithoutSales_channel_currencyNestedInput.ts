import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateOrConnectWithoutSales_channel_currencyInput } from "../inputs/CurrencyCreateOrConnectWithoutSales_channel_currencyInput";
import { CurrencyCreateWithoutSales_channel_currencyInput } from "../inputs/CurrencyCreateWithoutSales_channel_currencyInput";
import { CurrencyUpdateToOneWithWhereWithoutSales_channel_currencyInput } from "../inputs/CurrencyUpdateToOneWithWhereWithoutSales_channel_currencyInput";
import { CurrencyUpsertWithoutSales_channel_currencyInput } from "../inputs/CurrencyUpsertWithoutSales_channel_currencyInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyUpdateOneRequiredWithoutSales_channel_currencyNestedInput", {})
export class CurrencyUpdateOneRequiredWithoutSales_channel_currencyNestedInput {
  @TypeGraphQL.Field(_type => CurrencyCreateWithoutSales_channel_currencyInput, {
    nullable: true
  })
  create?: CurrencyCreateWithoutSales_channel_currencyInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutSales_channel_currencyInput, {
    nullable: true
  })
  connectOrCreate?: CurrencyCreateOrConnectWithoutSales_channel_currencyInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpsertWithoutSales_channel_currencyInput, {
    nullable: true
  })
  upsert?: CurrencyUpsertWithoutSales_channel_currencyInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: true
  })
  connect?: CurrencyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateToOneWithWhereWithoutSales_channel_currencyInput, {
    nullable: true
  })
  update?: CurrencyUpdateToOneWithWhereWithoutSales_channel_currencyInput | undefined;
}
