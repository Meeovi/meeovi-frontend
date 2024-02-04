import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateWithoutCategoryInput } from "../inputs/Cms_pageCreateWithoutCategoryInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageCreateOrConnectWithoutCategoryInput", {})
export class Cms_pageCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_pageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: Cms_pageCreateWithoutCategoryInput;
}
