import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_tagUpdateWithoutTagInput } from "../inputs/Category_tagUpdateWithoutTagInput";
import { Category_tagWhereUniqueInput } from "../inputs/Category_tagWhereUniqueInput";

@TypeGraphQL.InputType("Category_tagUpdateWithWhereUniqueWithoutTagInput", {})
export class Category_tagUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => Category_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Category_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Category_tagUpdateWithoutTagInput, {
    nullable: false
  })
  data!: Category_tagUpdateWithoutTagInput;
}
