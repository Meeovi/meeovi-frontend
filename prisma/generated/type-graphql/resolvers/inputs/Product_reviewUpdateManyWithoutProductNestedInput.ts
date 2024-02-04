import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateManyProductInputEnvelope } from "../inputs/Product_reviewCreateManyProductInputEnvelope";
import { Product_reviewCreateOrConnectWithoutProductInput } from "../inputs/Product_reviewCreateOrConnectWithoutProductInput";
import { Product_reviewCreateWithoutProductInput } from "../inputs/Product_reviewCreateWithoutProductInput";
import { Product_reviewScalarWhereInput } from "../inputs/Product_reviewScalarWhereInput";
import { Product_reviewUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_reviewUpdateManyWithWhereWithoutProductInput";
import { Product_reviewUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_reviewUpdateWithWhereUniqueWithoutProductInput";
import { Product_reviewUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_reviewUpsertWithWhereUniqueWithoutProductInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewUpdateManyWithoutProductNestedInput", {})
export class Product_reviewUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_reviewCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_reviewCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_reviewCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_reviewUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_reviewCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_reviewCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  set?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_reviewUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_reviewUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_reviewScalarWhereInput[] | undefined;
}
