import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_tagUpdateWithoutCategoryInput } from "../inputs/Category_tagUpdateWithoutCategoryInput";
import { Category_tagWhereUniqueInput } from "../inputs/Category_tagWhereUniqueInput";

@TypeGraphQL.InputType("Category_tagUpdateWithWhereUniqueWithoutCategoryInput", {})
export class Category_tagUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Category_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Category_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Category_tagUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: Category_tagUpdateWithoutCategoryInput;
}
