import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageUpdateWithoutCategoryInput } from "../inputs/Cms_pageUpdateWithoutCategoryInput";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";

@TypeGraphQL.InputType("Cms_pageUpdateToOneWithWhereWithoutCategoryInput", {})
export class Cms_pageUpdateToOneWithWhereWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  where?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: Cms_pageUpdateWithoutCategoryInput;
}
