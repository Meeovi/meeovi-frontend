import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_mediaCreateManyProductInputEnvelope } from "../inputs/Product_mediaCreateManyProductInputEnvelope";
import { Product_mediaCreateOrConnectWithoutProductInput } from "../inputs/Product_mediaCreateOrConnectWithoutProductInput";
import { Product_mediaCreateWithoutProductInput } from "../inputs/Product_mediaCreateWithoutProductInput";
import { Product_mediaScalarWhereInput } from "../inputs/Product_mediaScalarWhereInput";
import { Product_mediaUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_mediaUpdateManyWithWhereWithoutProductInput";
import { Product_mediaUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_mediaUpdateWithWhereUniqueWithoutProductInput";
import { Product_mediaUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_mediaUpsertWithWhereUniqueWithoutProductInput";
import { Product_mediaWhereUniqueInput } from "../inputs/Product_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Product_mediaUpdateManyWithoutProductNestedInput", {})
export class Product_mediaUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_mediaCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_mediaCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_mediaCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_mediaUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_mediaCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_mediaCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaWhereUniqueInput], {
    nullable: true
  })
  set?: Product_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_mediaUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_mediaUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_mediaScalarWhereInput[] | undefined;
}
