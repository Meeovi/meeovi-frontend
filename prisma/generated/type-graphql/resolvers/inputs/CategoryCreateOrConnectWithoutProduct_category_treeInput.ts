import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutProduct_category_treeInput } from "../inputs/CategoryCreateWithoutProduct_category_treeInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutProduct_category_treeInput", {})
export class CategoryCreateOrConnectWithoutProduct_category_treeInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutProduct_category_treeInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutProduct_category_treeInput;
}
