import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutProduct_category_treeInput } from "../inputs/CategoryCreateOrConnectWithoutProduct_category_treeInput";
import { CategoryCreateWithoutProduct_category_treeInput } from "../inputs/CategoryCreateWithoutProduct_category_treeInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutProduct_category_treeInput", {})
export class CategoryCreateNestedOneWithoutProduct_category_treeInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutProduct_category_treeInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutProduct_category_treeInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutProduct_category_treeInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutProduct_category_treeInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;
}
