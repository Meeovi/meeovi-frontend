import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_country_roundingCreateManyCurrencyInputEnvelope } from "../inputs/Currency_country_roundingCreateManyCurrencyInputEnvelope";
import { Currency_country_roundingCreateOrConnectWithoutCurrencyInput } from "../inputs/Currency_country_roundingCreateOrConnectWithoutCurrencyInput";
import { Currency_country_roundingCreateWithoutCurrencyInput } from "../inputs/Currency_country_roundingCreateWithoutCurrencyInput";
import { Currency_country_roundingScalarWhereInput } from "../inputs/Currency_country_roundingScalarWhereInput";
import { Currency_country_roundingUpdateManyWithWhereWithoutCurrencyInput } from "../inputs/Currency_country_roundingUpdateManyWithWhereWithoutCurrencyInput";
import { Currency_country_roundingUpdateWithWhereUniqueWithoutCurrencyInput } from "../inputs/Currency_country_roundingUpdateWithWhereUniqueWithoutCurrencyInput";
import { Currency_country_roundingUpsertWithWhereUniqueWithoutCurrencyInput } from "../inputs/Currency_country_roundingUpsertWithWhereUniqueWithoutCurrencyInput";
import { Currency_country_roundingWhereUniqueInput } from "../inputs/Currency_country_roundingWhereUniqueInput";

@TypeGraphQL.InputType("Currency_country_roundingUpdateManyWithoutCurrencyNestedInput", {})
export class Currency_country_roundingUpdateManyWithoutCurrencyNestedInput {
  @TypeGraphQL.Field(_type => [Currency_country_roundingCreateWithoutCurrencyInput], {
    nullable: true
  })
  create?: Currency_country_roundingCreateWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingCreateOrConnectWithoutCurrencyInput], {
    nullable: true
  })
  connectOrCreate?: Currency_country_roundingCreateOrConnectWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingUpsertWithWhereUniqueWithoutCurrencyInput], {
    nullable: true
  })
  upsert?: Currency_country_roundingUpsertWithWhereUniqueWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingCreateManyCurrencyInputEnvelope, {
    nullable: true
  })
  createMany?: Currency_country_roundingCreateManyCurrencyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingWhereUniqueInput], {
    nullable: true
  })
  set?: Currency_country_roundingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Currency_country_roundingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingWhereUniqueInput], {
    nullable: true
  })
  delete?: Currency_country_roundingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingWhereUniqueInput], {
    nullable: true
  })
  connect?: Currency_country_roundingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingUpdateWithWhereUniqueWithoutCurrencyInput], {
    nullable: true
  })
  update?: Currency_country_roundingUpdateWithWhereUniqueWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingUpdateManyWithWhereWithoutCurrencyInput], {
    nullable: true
  })
  updateMany?: Currency_country_roundingUpdateManyWithWhereWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Currency_country_roundingScalarWhereInput[] | undefined;
}
