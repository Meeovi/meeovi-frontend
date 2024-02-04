import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_page_translationCreateManyCms_pageInput } from "../inputs/Cms_page_translationCreateManyCms_pageInput";

@TypeGraphQL.InputType("Cms_page_translationCreateManyCms_pageInputEnvelope", {})
export class Cms_page_translationCreateManyCms_pageInputEnvelope {
  @TypeGraphQL.Field(_type => [Cms_page_translationCreateManyCms_pageInput], {
    nullable: false
  })
  data!: Cms_page_translationCreateManyCms_pageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
