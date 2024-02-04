import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionCreateManyMediaInput } from "../inputs/Cms_sectionCreateManyMediaInput";

@TypeGraphQL.InputType("Cms_sectionCreateManyMediaInputEnvelope", {})
export class Cms_sectionCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Cms_sectionCreateManyMediaInput], {
    nullable: false
  })
  data!: Cms_sectionCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
