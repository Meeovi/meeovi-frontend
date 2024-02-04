import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyCurrencyInputEnvelope } from "../inputs/CartCreateManyCurrencyInputEnvelope";
import { CartCreateOrConnectWithoutCurrencyInput } from "../inputs/CartCreateOrConnectWithoutCurrencyInput";
import { CartCreateWithoutCurrencyInput } from "../inputs/CartCreateWithoutCurrencyInput";
import { CartScalarWhereInput } from "../inputs/CartScalarWhereInput";
import { CartUpdateManyWithWhereWithoutCurrencyInput } from "../inputs/CartUpdateManyWithWhereWithoutCurrencyInput";
import { CartUpdateWithWhereUniqueWithoutCurrencyInput } from "../inputs/CartUpdateWithWhereUniqueWithoutCurrencyInput";
import { CartUpsertWithWhereUniqueWithoutCurrencyInput } from "../inputs/CartUpsertWithWhereUniqueWithoutCurrencyInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpdateManyWithoutCurrencyNestedInput", {})
export class CartUpdateManyWithoutCurrencyNestedInput {
  @TypeGraphQL.Field(_type => [CartCreateWithoutCurrencyInput], {
    nullable: true
  })
  create?: CartCreateWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartCreateOrConnectWithoutCurrencyInput], {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpsertWithWhereUniqueWithoutCurrencyInput], {
    nullable: true
  })
  upsert?: CartUpsertWithWhereUniqueWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => CartCreateManyCurrencyInputEnvelope, {
    nullable: true
  })
  createMany?: CartCreateManyCurrencyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  set?: CartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  delete?: CartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  connect?: CartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpdateWithWhereUniqueWithoutCurrencyInput], {
    nullable: true
  })
  update?: CartUpdateWithWhereUniqueWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpdateManyWithWhereWithoutCurrencyInput], {
    nullable: true
  })
  updateMany?: CartUpdateManyWithWhereWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CartScalarWhereInput[] | undefined;
}
