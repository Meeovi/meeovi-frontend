import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_assigned_productsCreateManyProductInputEnvelope } from "../inputs/Product_cross_selling_assigned_productsCreateManyProductInputEnvelope";
import { Product_cross_selling_assigned_productsCreateOrConnectWithoutProductInput } from "../inputs/Product_cross_selling_assigned_productsCreateOrConnectWithoutProductInput";
import { Product_cross_selling_assigned_productsCreateWithoutProductInput } from "../inputs/Product_cross_selling_assigned_productsCreateWithoutProductInput";
import { Product_cross_selling_assigned_productsScalarWhereInput } from "../inputs/Product_cross_selling_assigned_productsScalarWhereInput";
import { Product_cross_selling_assigned_productsUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_cross_selling_assigned_productsUpdateManyWithWhereWithoutProductInput";
import { Product_cross_selling_assigned_productsUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_cross_selling_assigned_productsUpdateWithWhereUniqueWithoutProductInput";
import { Product_cross_selling_assigned_productsUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_cross_selling_assigned_productsUpsertWithWhereUniqueWithoutProductInput";
import { Product_cross_selling_assigned_productsWhereUniqueInput } from "../inputs/Product_cross_selling_assigned_productsWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_selling_assigned_productsUpdateManyWithoutProductNestedInput", {})
export class Product_cross_selling_assigned_productsUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_cross_selling_assigned_productsCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_cross_selling_assigned_productsCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_cross_selling_assigned_productsUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_cross_selling_assigned_productsCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsWhereUniqueInput], {
    nullable: true
  })
  set?: Product_cross_selling_assigned_productsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_cross_selling_assigned_productsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_cross_selling_assigned_productsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_cross_selling_assigned_productsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_cross_selling_assigned_productsUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_cross_selling_assigned_productsUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_cross_selling_assigned_productsScalarWhereInput[] | undefined;
}
