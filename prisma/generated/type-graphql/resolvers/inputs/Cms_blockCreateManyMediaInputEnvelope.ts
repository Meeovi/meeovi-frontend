import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockCreateManyMediaInput } from "../inputs/Cms_blockCreateManyMediaInput";

@TypeGraphQL.InputType("Cms_blockCreateManyMediaInputEnvelope", {})
export class Cms_blockCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Cms_blockCreateManyMediaInput], {
    nullable: false
  })
  data!: Cms_blockCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
