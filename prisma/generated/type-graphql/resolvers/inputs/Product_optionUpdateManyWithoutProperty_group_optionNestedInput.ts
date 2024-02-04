import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_optionCreateManyProperty_group_optionInputEnvelope } from "../inputs/Product_optionCreateManyProperty_group_optionInputEnvelope";
import { Product_optionCreateOrConnectWithoutProperty_group_optionInput } from "../inputs/Product_optionCreateOrConnectWithoutProperty_group_optionInput";
import { Product_optionCreateWithoutProperty_group_optionInput } from "../inputs/Product_optionCreateWithoutProperty_group_optionInput";
import { Product_optionScalarWhereInput } from "../inputs/Product_optionScalarWhereInput";
import { Product_optionUpdateManyWithWhereWithoutProperty_group_optionInput } from "../inputs/Product_optionUpdateManyWithWhereWithoutProperty_group_optionInput";
import { Product_optionUpdateWithWhereUniqueWithoutProperty_group_optionInput } from "../inputs/Product_optionUpdateWithWhereUniqueWithoutProperty_group_optionInput";
import { Product_optionUpsertWithWhereUniqueWithoutProperty_group_optionInput } from "../inputs/Product_optionUpsertWithWhereUniqueWithoutProperty_group_optionInput";
import { Product_optionWhereUniqueInput } from "../inputs/Product_optionWhereUniqueInput";

@TypeGraphQL.InputType("Product_optionUpdateManyWithoutProperty_group_optionNestedInput", {})
export class Product_optionUpdateManyWithoutProperty_group_optionNestedInput {
  @TypeGraphQL.Field(_type => [Product_optionCreateWithoutProperty_group_optionInput], {
    nullable: true
  })
  create?: Product_optionCreateWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionCreateOrConnectWithoutProperty_group_optionInput], {
    nullable: true
  })
  connectOrCreate?: Product_optionCreateOrConnectWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionUpsertWithWhereUniqueWithoutProperty_group_optionInput], {
    nullable: true
  })
  upsert?: Product_optionUpsertWithWhereUniqueWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_optionCreateManyProperty_group_optionInputEnvelope, {
    nullable: true
  })
  createMany?: Product_optionCreateManyProperty_group_optionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_optionWhereUniqueInput], {
    nullable: true
  })
  set?: Product_optionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_optionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_optionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_optionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionUpdateWithWhereUniqueWithoutProperty_group_optionInput], {
    nullable: true
  })
  update?: Product_optionUpdateWithWhereUniqueWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionUpdateManyWithWhereWithoutProperty_group_optionInput], {
    nullable: true
  })
  updateMany?: Product_optionUpdateManyWithWhereWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_optionScalarWhereInput[] | undefined;
}
