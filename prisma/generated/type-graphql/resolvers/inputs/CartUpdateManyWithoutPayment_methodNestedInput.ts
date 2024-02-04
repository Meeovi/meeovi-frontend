import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyPayment_methodInputEnvelope } from "../inputs/CartCreateManyPayment_methodInputEnvelope";
import { CartCreateOrConnectWithoutPayment_methodInput } from "../inputs/CartCreateOrConnectWithoutPayment_methodInput";
import { CartCreateWithoutPayment_methodInput } from "../inputs/CartCreateWithoutPayment_methodInput";
import { CartScalarWhereInput } from "../inputs/CartScalarWhereInput";
import { CartUpdateManyWithWhereWithoutPayment_methodInput } from "../inputs/CartUpdateManyWithWhereWithoutPayment_methodInput";
import { CartUpdateWithWhereUniqueWithoutPayment_methodInput } from "../inputs/CartUpdateWithWhereUniqueWithoutPayment_methodInput";
import { CartUpsertWithWhereUniqueWithoutPayment_methodInput } from "../inputs/CartUpsertWithWhereUniqueWithoutPayment_methodInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpdateManyWithoutPayment_methodNestedInput", {})
export class CartUpdateManyWithoutPayment_methodNestedInput {
  @TypeGraphQL.Field(_type => [CartCreateWithoutPayment_methodInput], {
    nullable: true
  })
  create?: CartCreateWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartCreateOrConnectWithoutPayment_methodInput], {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpsertWithWhereUniqueWithoutPayment_methodInput], {
    nullable: true
  })
  upsert?: CartUpsertWithWhereUniqueWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => CartCreateManyPayment_methodInputEnvelope, {
    nullable: true
  })
  createMany?: CartCreateManyPayment_methodInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CartUpdateWithWhereUniqueWithoutPayment_methodInput], {
    nullable: true
  })
  update?: CartUpdateWithWhereUniqueWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpdateManyWithWhereWithoutPayment_methodInput], {
    nullable: true
  })
  updateMany?: CartUpdateManyWithWhereWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CartScalarWhereInput[] | undefined;
}
