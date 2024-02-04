import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_category_treeCreateManyProductInputEnvelope } from "../inputs/Product_category_treeCreateManyProductInputEnvelope";
import { Product_category_treeCreateOrConnectWithoutProductInput } from "../inputs/Product_category_treeCreateOrConnectWithoutProductInput";
import { Product_category_treeCreateWithoutProductInput } from "../inputs/Product_category_treeCreateWithoutProductInput";
import { Product_category_treeWhereUniqueInput } from "../inputs/Product_category_treeWhereUniqueInput";

@TypeGraphQL.InputType("Product_category_treeCreateNestedManyWithoutProductInput", {})
export class Product_category_treeCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_category_treeCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_category_treeCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_category_treeCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_category_treeCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_category_treeWhereUniqueInput[] | undefined;
}
