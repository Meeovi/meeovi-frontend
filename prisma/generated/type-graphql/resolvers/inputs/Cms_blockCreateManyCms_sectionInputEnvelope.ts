import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockCreateManyCms_sectionInput } from "../inputs/Cms_blockCreateManyCms_sectionInput";

@TypeGraphQL.InputType("Cms_blockCreateManyCms_sectionInputEnvelope", {})
export class Cms_blockCreateManyCms_sectionInputEnvelope {
  @TypeGraphQL.Field(_type => [Cms_blockCreateManyCms_sectionInput], {
    nullable: false
  })
  data!: Cms_blockCreateManyCms_sectionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
