import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateOrConnectWithoutCurrency_country_roundingInput } from "../inputs/CurrencyCreateOrConnectWithoutCurrency_country_roundingInput";
import { CurrencyCreateWithoutCurrency_country_roundingInput } from "../inputs/CurrencyCreateWithoutCurrency_country_roundingInput";
import { CurrencyUpdateToOneWithWhereWithoutCurrency_country_roundingInput } from "../inputs/CurrencyUpdateToOneWithWhereWithoutCurrency_country_roundingInput";
import { CurrencyUpsertWithoutCurrency_country_roundingInput } from "../inputs/CurrencyUpsertWithoutCurrency_country_roundingInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyUpdateOneRequiredWithoutCurrency_country_roundingNestedInput", {})
export class CurrencyUpdateOneRequiredWithoutCurrency_country_roundingNestedInput {
  @TypeGraphQL.Field(_type => CurrencyCreateWithoutCurrency_country_roundingInput, {
    nullable: true
  })
  create?: CurrencyCreateWithoutCurrency_country_roundingInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutCurrency_country_roundingInput, {
    nullable: true
  })
  connectOrCreate?: CurrencyCreateOrConnectWithoutCurrency_country_roundingInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpsertWithoutCurrency_country_roundingInput, {
    nullable: true
  })
  upsert?: CurrencyUpsertWithoutCurrency_country_roundingInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: true
  })
  connect?: CurrencyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateToOneWithWhereWithoutCurrency_country_roundingInput, {
    nullable: true
  })
  update?: CurrencyUpdateToOneWithWhereWithoutCurrency_country_roundingInput | undefined;
}
