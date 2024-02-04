import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateWithoutCategoryInput } from "../inputs/Cms_pageCreateWithoutCategoryInput";
import { Cms_pageUpdateWithoutCategoryInput } from "../inputs/Cms_pageUpdateWithoutCategoryInput";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";

@TypeGraphQL.InputType("Cms_pageUpsertWithoutCategoryInput", {})
export class Cms_pageUpsertWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Cms_pageUpdateWithoutCategoryInput, {
    nullable: false
  })
  update!: Cms_pageUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: Cms_pageCreateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  where?: Cms_pageWhereInput | undefined;
}
