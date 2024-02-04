import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_category_treeCreateManyCategoryInputEnvelope } from "../inputs/Product_category_treeCreateManyCategoryInputEnvelope";
import { Product_category_treeCreateOrConnectWithoutCategoryInput } from "../inputs/Product_category_treeCreateOrConnectWithoutCategoryInput";
import { Product_category_treeCreateWithoutCategoryInput } from "../inputs/Product_category_treeCreateWithoutCategoryInput";
import { Product_category_treeWhereUniqueInput } from "../inputs/Product_category_treeWhereUniqueInput";

@TypeGraphQL.InputType("Product_category_treeCreateNestedManyWithoutCategoryInput", {})
export class Product_category_treeCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [Product_category_treeCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: Product_category_treeCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: Product_category_treeCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: Product_category_treeCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_category_treeWhereUniqueInput[] | undefined;
}
