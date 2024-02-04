import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyCountryInputEnvelope } from "../inputs/CartCreateManyCountryInputEnvelope";
import { CartCreateOrConnectWithoutCountryInput } from "../inputs/CartCreateOrConnectWithoutCountryInput";
import { CartCreateWithoutCountryInput } from "../inputs/CartCreateWithoutCountryInput";
import { CartScalarWhereInput } from "../inputs/CartScalarWhereInput";
import { CartUpdateManyWithWhereWithoutCountryInput } from "../inputs/CartUpdateManyWithWhereWithoutCountryInput";
import { CartUpdateWithWhereUniqueWithoutCountryInput } from "../inputs/CartUpdateWithWhereUniqueWithoutCountryInput";
import { CartUpsertWithWhereUniqueWithoutCountryInput } from "../inputs/CartUpsertWithWhereUniqueWithoutCountryInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpdateManyWithoutCountryNestedInput", {})
export class CartUpdateManyWithoutCountryNestedInput {
  @TypeGraphQL.Field(_type => [CartCreateWithoutCountryInput], {
    nullable: true
  })
  create?: CartCreateWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartCreateOrConnectWithoutCountryInput], {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpsertWithWhereUniqueWithoutCountryInput], {
    nullable: true
  })
  upsert?: CartUpsertWithWhereUniqueWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => CartCreateManyCountryInputEnvelope, {
    nullable: true
  })
  createMany?: CartCreateManyCountryInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CartUpdateWithWhereUniqueWithoutCountryInput], {
    nullable: true
  })
  update?: CartUpdateWithWhereUniqueWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpdateManyWithWhereWithoutCountryInput], {
    nullable: true
  })
  updateMany?: CartUpdateManyWithWhereWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CartScalarWhereInput[] | undefined;
}
