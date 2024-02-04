import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_custom_field_setCreateManyProductInputEnvelope } from "../inputs/Product_custom_field_setCreateManyProductInputEnvelope";
import { Product_custom_field_setCreateOrConnectWithoutProductInput } from "../inputs/Product_custom_field_setCreateOrConnectWithoutProductInput";
import { Product_custom_field_setCreateWithoutProductInput } from "../inputs/Product_custom_field_setCreateWithoutProductInput";
import { Product_custom_field_setScalarWhereInput } from "../inputs/Product_custom_field_setScalarWhereInput";
import { Product_custom_field_setUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_custom_field_setUpdateManyWithWhereWithoutProductInput";
import { Product_custom_field_setUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_custom_field_setUpdateWithWhereUniqueWithoutProductInput";
import { Product_custom_field_setUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_custom_field_setUpsertWithWhereUniqueWithoutProductInput";
import { Product_custom_field_setWhereUniqueInput } from "../inputs/Product_custom_field_setWhereUniqueInput";

@TypeGraphQL.InputType("Product_custom_field_setUpdateManyWithoutProductNestedInput", {})
export class Product_custom_field_setUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_custom_field_setCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_custom_field_setCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_custom_field_setCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_custom_field_setUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_custom_field_setCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setWhereUniqueInput], {
    nullable: true
  })
  set?: Product_custom_field_setWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_custom_field_setWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_custom_field_setWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_custom_field_setWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_custom_field_setUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_custom_field_setUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_custom_field_setScalarWhereInput[] | undefined;
}
