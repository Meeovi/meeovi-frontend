import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyCustomerInputEnvelope } from "../inputs/CartCreateManyCustomerInputEnvelope";
import { CartCreateOrConnectWithoutCustomerInput } from "../inputs/CartCreateOrConnectWithoutCustomerInput";
import { CartCreateWithoutCustomerInput } from "../inputs/CartCreateWithoutCustomerInput";
import { CartScalarWhereInput } from "../inputs/CartScalarWhereInput";
import { CartUpdateManyWithWhereWithoutCustomerInput } from "../inputs/CartUpdateManyWithWhereWithoutCustomerInput";
import { CartUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/CartUpdateWithWhereUniqueWithoutCustomerInput";
import { CartUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/CartUpsertWithWhereUniqueWithoutCustomerInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpdateManyWithoutCustomerNestedInput", {})
export class CartUpdateManyWithoutCustomerNestedInput {
  @TypeGraphQL.Field(_type => [CartCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: CartCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: CartUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => CartCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: CartCreateManyCustomerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CartUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: CartUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: CartUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CartScalarWhereInput[] | undefined;
}
