import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateManyMediaInput } from "../inputs/Cms_pageCreateManyMediaInput";

@TypeGraphQL.InputType("Cms_pageCreateManyMediaInputEnvelope", {})
export class Cms_pageCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Cms_pageCreateManyMediaInput], {
    nullable: false
  })
  data!: Cms_pageCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
