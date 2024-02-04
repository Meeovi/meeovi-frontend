import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionCreateManyCms_pageInput } from "../inputs/Cms_sectionCreateManyCms_pageInput";

@TypeGraphQL.InputType("Cms_sectionCreateManyCms_pageInputEnvelope", {})
export class Cms_sectionCreateManyCms_pageInputEnvelope {
  @TypeGraphQL.Field(_type => [Cms_sectionCreateManyCms_pageInput], {
    nullable: false
  })
  data!: Cms_sectionCreateManyCms_pageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
