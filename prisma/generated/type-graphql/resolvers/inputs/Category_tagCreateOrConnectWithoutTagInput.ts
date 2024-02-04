import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_tagCreateWithoutTagInput } from "../inputs/Category_tagCreateWithoutTagInput";
import { Category_tagWhereUniqueInput } from "../inputs/Category_tagWhereUniqueInput";

@TypeGraphQL.InputType("Category_tagCreateOrConnectWithoutTagInput", {})
export class Category_tagCreateOrConnectWithoutTagInput {
  @TypeGraphQL.Field(_type => Category_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Category_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Category_tagCreateWithoutTagInput, {
    nullable: false
  })
  create!: Category_tagCreateWithoutTagInput;
}
