import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_optionCreateManyProductInputEnvelope } from "../inputs/Product_optionCreateManyProductInputEnvelope";
import { Product_optionCreateOrConnectWithoutProductInput } from "../inputs/Product_optionCreateOrConnectWithoutProductInput";
import { Product_optionCreateWithoutProductInput } from "../inputs/Product_optionCreateWithoutProductInput";
import { Product_optionScalarWhereInput } from "../inputs/Product_optionScalarWhereInput";
import { Product_optionUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_optionUpdateManyWithWhereWithoutProductInput";
import { Product_optionUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_optionUpdateWithWhereUniqueWithoutProductInput";
import { Product_optionUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_optionUpsertWithWhereUniqueWithoutProductInput";
import { Product_optionWhereUniqueInput } from "../inputs/Product_optionWhereUniqueInput";

@TypeGraphQL.InputType("Product_optionUpdateManyWithoutProductNestedInput", {})
export class Product_optionUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_optionCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_optionCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_optionCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_optionUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_optionCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_optionCreateManyProductInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Product_optionUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_optionUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_optionUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_optionScalarWhereInput[] | undefined;
}
