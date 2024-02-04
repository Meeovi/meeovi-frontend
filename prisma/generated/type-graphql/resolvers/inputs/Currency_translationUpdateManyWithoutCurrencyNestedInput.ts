import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_translationCreateManyCurrencyInputEnvelope } from "../inputs/Currency_translationCreateManyCurrencyInputEnvelope";
import { Currency_translationCreateOrConnectWithoutCurrencyInput } from "../inputs/Currency_translationCreateOrConnectWithoutCurrencyInput";
import { Currency_translationCreateWithoutCurrencyInput } from "../inputs/Currency_translationCreateWithoutCurrencyInput";
import { Currency_translationScalarWhereInput } from "../inputs/Currency_translationScalarWhereInput";
import { Currency_translationUpdateManyWithWhereWithoutCurrencyInput } from "../inputs/Currency_translationUpdateManyWithWhereWithoutCurrencyInput";
import { Currency_translationUpdateWithWhereUniqueWithoutCurrencyInput } from "../inputs/Currency_translationUpdateWithWhereUniqueWithoutCurrencyInput";
import { Currency_translationUpsertWithWhereUniqueWithoutCurrencyInput } from "../inputs/Currency_translationUpsertWithWhereUniqueWithoutCurrencyInput";
import { Currency_translationWhereUniqueInput } from "../inputs/Currency_translationWhereUniqueInput";

@TypeGraphQL.InputType("Currency_translationUpdateManyWithoutCurrencyNestedInput", {})
export class Currency_translationUpdateManyWithoutCurrencyNestedInput {
  @TypeGraphQL.Field(_type => [Currency_translationCreateWithoutCurrencyInput], {
    nullable: true
  })
  create?: Currency_translationCreateWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationCreateOrConnectWithoutCurrencyInput], {
    nullable: true
  })
  connectOrCreate?: Currency_translationCreateOrConnectWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationUpsertWithWhereUniqueWithoutCurrencyInput], {
    nullable: true
  })
  upsert?: Currency_translationUpsertWithWhereUniqueWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => Currency_translationCreateManyCurrencyInputEnvelope, {
    nullable: true
  })
  createMany?: Currency_translationCreateManyCurrencyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Currency_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Currency_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Currency_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Currency_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationUpdateWithWhereUniqueWithoutCurrencyInput], {
    nullable: true
  })
  update?: Currency_translationUpdateWithWhereUniqueWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationUpdateManyWithWhereWithoutCurrencyInput], {
    nullable: true
  })
  updateMany?: Currency_translationUpdateManyWithWhereWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Currency_translationScalarWhereInput[] | undefined;
}
