import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_tagCreateWithoutCategoryInput } from "../inputs/Category_tagCreateWithoutCategoryInput";
import { Category_tagUpdateWithoutCategoryInput } from "../inputs/Category_tagUpdateWithoutCategoryInput";
import { Category_tagWhereUniqueInput } from "../inputs/Category_tagWhereUniqueInput";

@TypeGraphQL.InputType("Category_tagUpsertWithWhereUniqueWithoutCategoryInput", {})
export class Category_tagUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Category_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Category_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Category_tagUpdateWithoutCategoryInput, {
    nullable: false
  })
  update!: Category_tagUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => Category_tagCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: Category_tagCreateWithoutCategoryInput;
}
