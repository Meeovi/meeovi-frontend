import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationCreateWithoutCategoryInput } from "../inputs/Category_translationCreateWithoutCategoryInput";
import { Category_translationWhereUniqueInput } from "../inputs/Category_translationWhereUniqueInput";

@TypeGraphQL.InputType("Category_translationCreateOrConnectWithoutCategoryInput", {})
export class Category_translationCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Category_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Category_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Category_translationCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: Category_translationCreateWithoutCategoryInput;
}
