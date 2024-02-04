import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyShipping_methodInputEnvelope } from "../inputs/CartCreateManyShipping_methodInputEnvelope";
import { CartCreateOrConnectWithoutShipping_methodInput } from "../inputs/CartCreateOrConnectWithoutShipping_methodInput";
import { CartCreateWithoutShipping_methodInput } from "../inputs/CartCreateWithoutShipping_methodInput";
import { CartScalarWhereInput } from "../inputs/CartScalarWhereInput";
import { CartUpdateManyWithWhereWithoutShipping_methodInput } from "../inputs/CartUpdateManyWithWhereWithoutShipping_methodInput";
import { CartUpdateWithWhereUniqueWithoutShipping_methodInput } from "../inputs/CartUpdateWithWhereUniqueWithoutShipping_methodInput";
import { CartUpsertWithWhereUniqueWithoutShipping_methodInput } from "../inputs/CartUpsertWithWhereUniqueWithoutShipping_methodInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpdateManyWithoutShipping_methodNestedInput", {})
export class CartUpdateManyWithoutShipping_methodNestedInput {
  @TypeGraphQL.Field(_type => [CartCreateWithoutShipping_methodInput], {
    nullable: true
  })
  create?: CartCreateWithoutShipping_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartCreateOrConnectWithoutShipping_methodInput], {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutShipping_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpsertWithWhereUniqueWithoutShipping_methodInput], {
    nullable: true
  })
  upsert?: CartUpsertWithWhereUniqueWithoutShipping_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => CartCreateManyShipping_methodInputEnvelope, {
    nullable: true
  })
  createMany?: CartCreateManyShipping_methodInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CartUpdateWithWhereUniqueWithoutShipping_methodInput], {
    nullable: true
  })
  update?: CartUpdateWithWhereUniqueWithoutShipping_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpdateManyWithWhereWithoutShipping_methodInput], {
    nullable: true
  })
  updateMany?: CartUpdateManyWithWhereWithoutShipping_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CartScalarWhereInput[] | undefined;
}
