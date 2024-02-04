import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_category_treeInput } from "../inputs/ProductCreateWithoutProduct_category_treeInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutProduct_category_treeInput", {})
export class ProductCreateOrConnectWithoutProduct_category_treeInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_category_treeInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_category_treeInput;
}
