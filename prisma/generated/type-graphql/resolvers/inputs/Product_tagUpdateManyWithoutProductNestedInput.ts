import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_tagCreateManyProductInputEnvelope } from "../inputs/Product_tagCreateManyProductInputEnvelope";
import { Product_tagCreateOrConnectWithoutProductInput } from "../inputs/Product_tagCreateOrConnectWithoutProductInput";
import { Product_tagCreateWithoutProductInput } from "../inputs/Product_tagCreateWithoutProductInput";
import { Product_tagScalarWhereInput } from "../inputs/Product_tagScalarWhereInput";
import { Product_tagUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_tagUpdateManyWithWhereWithoutProductInput";
import { Product_tagUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_tagUpdateWithWhereUniqueWithoutProductInput";
import { Product_tagUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_tagUpsertWithWhereUniqueWithoutProductInput";
import { Product_tagWhereUniqueInput } from "../inputs/Product_tagWhereUniqueInput";

@TypeGraphQL.InputType("Product_tagUpdateManyWithoutProductNestedInput", {})
export class Product_tagUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_tagCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_tagCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_tagCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_tagUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_tagCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_tagCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_tagWhereUniqueInput], {
    nullable: true
  })
  set?: Product_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_tagUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_tagUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_tagScalarWhereInput[] | undefined;
}
