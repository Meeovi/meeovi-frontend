import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_categoryCreateManyProductInputEnvelope } from "../inputs/Product_categoryCreateManyProductInputEnvelope";
import { Product_categoryCreateOrConnectWithoutProductInput } from "../inputs/Product_categoryCreateOrConnectWithoutProductInput";
import { Product_categoryCreateWithoutProductInput } from "../inputs/Product_categoryCreateWithoutProductInput";
import { Product_categoryScalarWhereInput } from "../inputs/Product_categoryScalarWhereInput";
import { Product_categoryUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_categoryUpdateManyWithWhereWithoutProductInput";
import { Product_categoryUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_categoryUpdateWithWhereUniqueWithoutProductInput";
import { Product_categoryUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_categoryUpsertWithWhereUniqueWithoutProductInput";
import { Product_categoryWhereUniqueInput } from "../inputs/Product_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Product_categoryUpdateManyWithoutProductNestedInput", {})
export class Product_categoryUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_categoryCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_categoryCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_categoryCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_categoryUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_categoryCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_categoryCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryWhereUniqueInput], {
    nullable: true
  })
  set?: Product_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_categoryUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_categoryUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_categoryScalarWhereInput[] | undefined;
}
