import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_category_treeInput } from "../inputs/ProductCreateOrConnectWithoutProduct_category_treeInput";
import { ProductCreateWithoutProduct_category_treeInput } from "../inputs/ProductCreateWithoutProduct_category_treeInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutProduct_category_treeInput", {})
export class ProductCreateNestedOneWithoutProduct_category_treeInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_category_treeInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_category_treeInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_category_treeInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_category_treeInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
