import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_pricesCreateManyCurrencyInputEnvelope } from "../inputs/Promotion_discount_pricesCreateManyCurrencyInputEnvelope";
import { Promotion_discount_pricesCreateOrConnectWithoutCurrencyInput } from "../inputs/Promotion_discount_pricesCreateOrConnectWithoutCurrencyInput";
import { Promotion_discount_pricesCreateWithoutCurrencyInput } from "../inputs/Promotion_discount_pricesCreateWithoutCurrencyInput";
import { Promotion_discount_pricesScalarWhereInput } from "../inputs/Promotion_discount_pricesScalarWhereInput";
import { Promotion_discount_pricesUpdateManyWithWhereWithoutCurrencyInput } from "../inputs/Promotion_discount_pricesUpdateManyWithWhereWithoutCurrencyInput";
import { Promotion_discount_pricesUpdateWithWhereUniqueWithoutCurrencyInput } from "../inputs/Promotion_discount_pricesUpdateWithWhereUniqueWithoutCurrencyInput";
import { Promotion_discount_pricesUpsertWithWhereUniqueWithoutCurrencyInput } from "../inputs/Promotion_discount_pricesUpsertWithWhereUniqueWithoutCurrencyInput";
import { Promotion_discount_pricesWhereUniqueInput } from "../inputs/Promotion_discount_pricesWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_discount_pricesUpdateManyWithoutCurrencyNestedInput", {})
export class Promotion_discount_pricesUpdateManyWithoutCurrencyNestedInput {
  @TypeGraphQL.Field(_type => [Promotion_discount_pricesCreateWithoutCurrencyInput], {
    nullable: true
  })
  create?: Promotion_discount_pricesCreateWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesCreateOrConnectWithoutCurrencyInput], {
    nullable: true
  })
  connectOrCreate?: Promotion_discount_pricesCreateOrConnectWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesUpsertWithWhereUniqueWithoutCurrencyInput], {
    nullable: true
  })
  upsert?: Promotion_discount_pricesUpsertWithWhereUniqueWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesCreateManyCurrencyInputEnvelope, {
    nullable: true
  })
  createMany?: Promotion_discount_pricesCreateManyCurrencyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesWhereUniqueInput], {
    nullable: true
  })
  set?: Promotion_discount_pricesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Promotion_discount_pricesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesWhereUniqueInput], {
    nullable: true
  })
  delete?: Promotion_discount_pricesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesWhereUniqueInput], {
    nullable: true
  })
  connect?: Promotion_discount_pricesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesUpdateWithWhereUniqueWithoutCurrencyInput], {
    nullable: true
  })
  update?: Promotion_discount_pricesUpdateWithWhereUniqueWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesUpdateManyWithWhereWithoutCurrencyInput], {
    nullable: true
  })
  updateMany?: Promotion_discount_pricesUpdateManyWithWhereWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Promotion_discount_pricesScalarWhereInput[] | undefined;
}
